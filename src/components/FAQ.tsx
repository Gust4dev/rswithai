"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso pagar algo?",
    answer:
      "O plano Beta Básico é 100% gratuito por 3 meses. O plano Beta Pro custa R$99/mês (vs R$500 do preço normal). Você não precisa de cartão de crédito para testar o básico.",
  },
  {
    question: "Minha empresa é muito pequena, posso participar?",
    answer:
      "Sim! Aceitamos empresas de 10 funcionários em diante. Na verdade, empresas menores costumam ter agilidade para implementar e dar feedback mais rápido.",
  },
  {
    question: "Tem contrato de fidelidade?",
    answer:
      "Não. Você tem liberdade total. O plano é mensal e você pode cancelar a qualquer momento sem multa. Se não gostar, basta não renovar.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "O setup inicial leva cerca de 5 minutos. Você pode publicar sua primeira vaga no mesmo dia. Oferecemos onboarding assistido para os primeiros passos.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim! Utilizamos criptografia de ponta a ponta, servidores no Brasil e somos LGPD compliant. Seus dados e dos candidatos estão protegidos.",
  },
  {
    question: "O que acontece depois do beta?",
    answer:
      "Beta testers do plano Pro garantem o preço de R$250/mês para sempre (vs R$500 normal). Você mantém todos os dados e histórico sem interrupção.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container-narrow">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-primary mb-4">❓ FAQ</span>
          <h2 className="text-section mb-4">Perguntas Frequentes</h2>
          <p className="text-body text-text-light">
            Ainda tem dúvidas? Estamos aqui para ajudar.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-text pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-text-light flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-text-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
