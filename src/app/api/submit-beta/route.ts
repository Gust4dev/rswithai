import { NextRequest, NextResponse } from "next/server";
import { betaFormSchema } from "@/lib/validations";
// import { notion } from "@/lib/notion";
// import { resend } from "@/lib/resend";

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

        // TODO: Uncomment when Notion is configured
        // Save to Notion
        /*
        await notion.pages.create({
          parent: { database_id: process.env.NOTION_DATABASE_ID! },
          properties: {
            'Nome': { title: [{ text: { content: data.name } }] },
            'Email': { email: data.email },
            'Empresa': { rich_text: [{ text: { content: data.company } }] },
            'Cargo': { rich_text: [{ text: { content: data.role } }] },
            'Funcionários': { select: { name: data.employees } },
            'WhatsApp': { phone_number: formattedWhatsapp },
            'Plano': { select: { name: data.plan === 'pro' ? 'Beta Pro' : 'Beta Básico' } },
            'Dor Principal': { rich_text: [{ text: { content: data.painPoint || '' } }] },
            'Status': { select: { name: 'Novo' } },
            'Data de Cadastro': { date: { start: new Date().toISOString() } },
          },
        });
        */

        // TODO: Uncomment when Resend is configured
        // Send confirmation email
        /*
        await resend.emails.send({
          from: `Beta <contato@${process.env.NEXT_PUBLIC_SITE_URL?.replace('https://', '').replace('http://', '')}>`,
          to: data.email,
          subject: '✅ Candidatura Recebida - Beta RH Tech',
          html: `
            <h1>Oi ${data.name.split(' ')[0]}!</h1>
            <p>Recebemos sua candidatura para o programa beta.</p>
            <h2>🎯 Próximos passos:</h2>
            <ol>
              <li>Analisaremos seu perfil (até 24h)</li>
              <li>Se aprovado, você receberá as credenciais</li>
              <li>Aí é só logar e começar!</li>
            </ol>
            <p><strong>Plano escolhido:</strong> ${data.plan === 'pro' ? 'Beta Pro' : 'Beta Básico'}</p>
            <p>Qualquer dúvida, responda este email.</p>
            <p>Abraços,<br>Equipe RH Tech</p>
          `,
        });
        */

        // Log for debugging (remove in production)
        console.log("Beta signup received:", {
            name: data.name,
            email: data.email,
            company: data.company,
            plan: data.plan,
            whatsapp: formattedWhatsapp,
            timestamp: new Date().toISOString(),
        });

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
