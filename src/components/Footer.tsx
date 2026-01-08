"use client";

import { MessageCircle, Mail, MapPin } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const currentYear = new Date().getFullYear();
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "CONTRATEI";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "556292668427";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Somos uma startup fundada por profissionais de RH e tecnologia,
              unidos pela missão de transformar o recrutamento através da
              inteligência artificial. Acreditamos que contratar bem não deveria
              ser tão difícil.
            </p>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppLink(
                    whatsappNumber,
                    "Olá! Tenho interesse no beta."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@contratei.com.br"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@contratei.com.br</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Anápolis, GO - Brasil</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/termos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="/privacidade"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-sm">CNPJ: Em registro</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {companyName}. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Feito com 💜 para revolucionar o RH
          </p>
        </div>
      </div>
    </footer>
  );
}
