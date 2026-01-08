import { Resend } from "resend";

// Resend client initialization
// Will only work when RESEND_API_KEY is set
export const resend = new Resend(process.env.RESEND_API_KEY);

// Helper to check if Resend is configured
export function isResendConfigured(): boolean {
    return !!(
        process.env.RESEND_API_KEY &&
        process.env.RESEND_API_KEY !== "re_xxxxx"
    );
}
