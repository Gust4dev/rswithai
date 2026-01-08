import { google } from "googleapis";

interface LeadData {
    name: string;
    email: string;
    company: string;
    role: string;
    employees: string;
    whatsapp: string;
    plan: string;
    painPoint?: string;
}

/**
 * Configura autenticação com Google Sheets API via Service Account
 */
function getAuth() {
    return new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
}

/**
 * Adiciona um novo lead na planilha do Google Sheets
 * Colunas: Timestamp | Nome | Cargo | Empresa | Funcionários | Email | WhatsApp | Plano | Dor Principal | Status
 */
export async function addLead(data: LeadData): Promise<void> {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
        throw new Error("GOOGLE_SHEET_ID not configured");
    }

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Página1!A:J",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [
                [
                    new Date().toISOString(),
                    data.name,
                    data.role,
                    data.company,
                    data.employees,
                    data.email,
                    data.whatsapp,
                    data.plan === "pro" ? "Beta Pro" : "Beta Básico",
                    data.painPoint || "",
                    "Novo",
                ],
            ],
        },
    });
}

/**
 * Verifica se as credenciais do Google Sheets estão configuradas
 */
export function isSheetsConfigured(): boolean {
    return !!(
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
        process.env.GOOGLE_PRIVATE_KEY &&
        process.env.GOOGLE_SHEET_ID
    );
}
