import { z } from "zod";

/**
 * Beta tester form validation schema
 */
// Domínios de email pessoal bloqueados por padrão
const personalDomains = [
    "gmail.com",
    "hotmail.com",
    "outlook.com",
    "yahoo.com",
    "icloud.com",
    "live.com",
];

export const betaFormSchema = z.object({
    name: z
        .string()
        .min(3, "Nome deve ter pelo menos 3 caracteres")
        .max(100, "Nome muito longo"),

    role: z
        .string()
        .min(2, "Cargo deve ter pelo menos 2 caracteres")
        .max(100, "Cargo muito longo"),

    company: z
        .string()
        .min(2, "Nome da empresa deve ter pelo menos 2 caracteres")
        .max(100, "Nome da empresa muito longo"),

    employees: z.enum(["10-50", "50-100", "100-200", "200+"], {
        errorMap: () => ({ message: "Selecione o número de funcionários" }),
    }),

    // Flag para permitir email pessoal
    usePersonalEmail: z.boolean().optional().default(false),

    email: z
        .string()
        .email("Email inválido"),

    whatsapp: z
        .string()
        .min(10, "WhatsApp inválido")
        .max(20, "WhatsApp inválido")
        .refine(
            (phone) => {
                const digits = phone.replace(/\D/g, "");
                return digits.length >= 10 && digits.length <= 13;
            },
            { message: "Número de WhatsApp inválido" }
        ),

    plan: z.enum(["basico", "pro"], {
        errorMap: () => ({ message: "Selecione um plano" }),
    }),

    painPoint: z
        .string()
        .max(200, "Máximo de 200 caracteres")
        .optional(),

    consent: z.boolean().refine((val) => val === true, {
        message: "Você precisa concordar com os termos",
    }),
}).refine(
    (data) => {
        // Se usePersonalEmail estiver marcado, aceita qualquer email
        if (data.usePersonalEmail) return true;

        // Caso contrário, bloqueia domínios pessoais
        const domain = data.email.split("@")[1]?.toLowerCase();
        return !personalDomains.includes(domain);
    },
    {
        message: "Por favor, use seu email corporativo ou marque a opção abaixo",
        path: ["email"],
    }
);

export type BetaFormData = z.infer<typeof betaFormSchema>;

/**
 * Exit intent email schema
 */
export const exitIntentSchema = z.object({
    email: z.string().email("Email inválido"),
});

export type ExitIntentData = z.infer<typeof exitIntentSchema>;

/**
 * API response schema
 */
export const apiResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.unknown().optional(),
});

export type ApiResponse = z.infer<typeof apiResponseSchema>;
