import * as brevo from "@getbrevo/brevo";

/**
 * Configura instância da API Brevo com a API key
 */
function getBrevoInstance(): brevo.TransactionalEmailsApi {
  const apiInstance = new brevo.TransactionalEmailsApi();

  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY!
  );

  return apiInstance;
}

/**
 * Envia email de boas-vindas para novo candidato beta
 */
export async function sendWelcomeEmail(
  to: string,
  name: string,
  plan: string
): Promise<void> {
  const apiInstance = getBrevoInstance();
  const firstName = name.split(" ")[0];

  const sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.sender = {
    email: "gustavogomes034@outlook.com",
    name: "Equipe CONTRATEI",
  };
  sendSmtpEmail.to = [{ email: to, name }];
  sendSmtpEmail.subject = "✅ Candidatura Recebida - Beta CONTRATEI";
  sendSmtpEmail.htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #6366f1; margin: 0;">CONTRATEI</h1>
        <p style="color: #64748b; margin: 5px 0 0 0;">Recrutamento com Inteligência Artificial</p>
      </div>
      
      <h2 style="color: #1e293b;">Oi ${firstName}! 👋</h2>
      
      <p style="color: #475569; line-height: 1.6;">
        Recebemos sua candidatura para o programa beta do CONTRATEI. 
        Estamos muito felizes com seu interesse!
      </p>
      
      <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 12px; padding: 20px; margin: 20px 0;">
        <h3 style="color: #fff; margin: 0 0 15px 0;">🎯 Próximos passos:</h3>
        <ol style="color: #fff; margin: 0; padding-left: 20px; line-height: 1.8;">
          <li>Analisaremos seu perfil (até 24h)</li>
          <li>Se aprovado, você receberá as credenciais de acesso</li>
          <li>Aí é só logar e começar a revolucionar seu recrutamento!</li>
        </ol>
      </div>
      
      <div style="background: #f8fafc; border-radius: 8px; padding: 15px; margin: 20px 0;">
        <p style="margin: 0; color: #475569;">
          <strong>Plano escolhido:</strong> ${plan}
        </p>
      </div>
      
      <p style="color: #475569; line-height: 1.6;">
        Qualquer dúvida, é só responder este email que teremos prazer em ajudar.
      </p>
      
      <p style="color: #475569; margin-top: 30px;">
        Abraços,<br>
        <strong style="color: #6366f1;">Equipe CONTRATEI</strong>
      </p>
      
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
      
      <p style="color: #94a3b8; font-size: 12px; text-align: center;">
        © 2026 CONTRATEI - Recrutamento com IA
      </p>
    </div>
  `;

  await apiInstance.sendTransacEmail(sendSmtpEmail);
}

/**
 * Verifica se a API key do Brevo está configurada
 */
export function isBrevoConfigured(): boolean {
  return !!(
    process.env.BREVO_API_KEY &&
    process.env.BREVO_API_KEY !== "xkeysib-xxxxx"
  );
}
