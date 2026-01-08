import Link from "next/link";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "556292668427";

export default function ObrigadoPage() {
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(
    "Olá! Acabei de me inscrever no beta e gostaria de mais informações."
  )}`;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-secondary" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Candidatura Enviada! 🎉
        </h1>

        {/* Description */}
        <p className="text-text-light text-lg mb-8">
          Obrigado pelo seu interesse no beta. Vamos analisar sua candidatura e
          entrar em contato em até <strong>24 horas</strong>.
        </p>

        {/* Next steps */}
        <div className="bg-white rounded-2xl p-6 border border-border mb-8 text-left">
          <h2 className="font-semibold mb-4">🎯 Próximos passos:</h2>
          <ol className="space-y-3 text-text-light">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <span>Analisaremos seu perfil e necessidades</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <span>Se aprovado, você receberá credenciais por email</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <span>Aí é só logar e começar a usar!</span>
            </li>
          </ol>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="secondary">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar ao Site
            </Button>
          </Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button>
              <MessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp
            </Button>
          </a>
        </div>

        {/* Email note */}
        <p className="text-sm text-text-light mt-8">
          📧 Verifique sua caixa de entrada (e spam) para o email de
          confirmação.
        </p>
      </div>
    </main>
  );
}
