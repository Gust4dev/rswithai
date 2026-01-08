import { NextRequest, NextResponse } from "next/server";
import { betaFormSchema } from "@/lib/validations";
import { addLead, isSheetsConfigured } from "@/lib/sheets";
import { sendWelcomeEmail, isBrevoConfigured } from "@/lib/brevo";

// Simple in-memory rate limiting (replace with Redis in production)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour
const MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record) {
        rateLimit.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (record.count >= MAX_REQUESTS) {
        return false;
    }

    record.count++;
    return true;
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0] ||
            request.headers.get("x-real-ip") ||
            "unknown";

        // Rate limiting
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Muitas tentativas. Tente novamente em 1 hora.",
                },
                { status: 429 }
            );
        }

        // Parse and validate body
        const body = await request.json();
        const validationResult = betaFormSchema.safeParse(body);

        if (!validationResult.success) {
            const errors = validationResult.error.errors.map((e) => e.message);
            return NextResponse.json(
                {
                    success: false,
                    message: errors[0] || "Dados inválidos",
                },
                { status: 400 }
            );
        }

        const data = validationResult.data;

        // Format WhatsApp to E.164
        const whatsappDigits = data.whatsapp.replace(/\D/g, "");
        const formattedWhatsapp = whatsappDigits.startsWith("55")
            ? `+${whatsappDigits}`
            : `+55${whatsappDigits}`;

        // Log for debugging
        console.log("📝 Beta signup received:", {
            name: data.name,
            email: data.email,
            company: data.company,
            plan: data.plan,
            whatsapp: formattedWhatsapp,
            timestamp: new Date().toISOString(),
        });

        // Save to Google Sheets
        if (isSheetsConfigured()) {
            try {
                await addLead({
                    name: data.name,
                    email: data.email,
                    company: data.company,
                    role: data.role,
                    employees: data.employees,
                    whatsapp: formattedWhatsapp,
                    plan: data.plan,
                    painPoint: data.painPoint || "",
                });
                console.log("✅ Lead saved to Google Sheets");
            } catch (error) {
                console.error("❌ Error saving to Google Sheets:", error);
                // Continue mesmo se falhar (não queremos bloquear o usuário)
            }
        } else {
            console.warn("⚠️ Google Sheets not configured - lead not saved to database");
        }

        // Send confirmation email via Brevo
        if (isBrevoConfigured()) {
            try {
                const planLabel = data.plan === "pro" ? "Beta Pro 🔥" : "Beta Básico";
                await sendWelcomeEmail(data.email, data.name, planLabel);
                console.log("✅ Welcome email sent via Brevo");
            } catch (error) {
                console.error("❌ Error sending email via Brevo:", error);
                // Continue mesmo se falhar
            }
        } else {
            console.warn("⚠️ Brevo not configured - welcome email not sent");
        }

        return NextResponse.json({
            success: true,
            message: "Candidatura enviada com sucesso!",
        });
    } catch (error) {
        console.error("Error processing beta signup:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Erro interno. Tente novamente.",
            },
            { status: 500 }
        );
    }
}
