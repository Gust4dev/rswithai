"use client";

import { motion } from "framer-motion";
import { Card, Counter } from "@/components/ui";
import { Gift, Percent, MessageSquare, Zap, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Acesso Gratuito ou Desconto",
    description:
      "Plano básico 100% grátis por 3 meses. Plano Pro por R$99/mês (vs R$500 normal).",
    color: "secondary",
  },
  {
    icon: Percent,
    title: "50% Desconto Lifetime",
    description:
      "Beta testers Pro garantem R$250/mês pra sempre, mesmo quando o preço subir.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "Voz Ativa no Roadmap",
    description:
      "Você vota nas próximas features. Grupo exclusivo no WhatsApp com fundadores.",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Suporte Prioritário",
    description:
      "Linha direta com a equipe técnica. Problemas resolvidos em horas, não dias.",
    color: "secondary",
  },
  {
    icon: Trophy,
    title: "Exclusividade",
    description:
      "Apenas 20 empresas terão acesso ao beta. Badge exclusivo de early adopter.",
    color: "primary",
  },
];

export function WhyBeta() {
  return (
    <section
      className="section bg-gradient-to-b from-background to-primary/5"
      id="why-beta"
    >
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-secondary mb-4">🎁 Benefícios Exclusivos</span>
          <h2 className="text-section mb-4">
            Por que ser <span className="gradient-text">Beta Tester</span>?
          </h2>
          <p className="text-body text-text-light max-w-2xl mx-auto">
            Mais do que um desconto - uma chance de moldar o futuro do
            recrutamento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full">
                <div
                  className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    ${benefit.color === "primary" ? "bg-primary/10" : ""}
                    ${benefit.color === "secondary" ? "bg-secondary/10" : ""}
                    ${benefit.color === "accent" ? "bg-accent/10" : ""}
                  `}
                >
                  <benefit.icon
                    className={`w-6 h-6
                      ${benefit.color === "primary" ? "text-primary" : ""}
                      ${benefit.color === "secondary" ? "text-secondary" : ""}
                      ${benefit.color === "accent" ? "text-accent" : ""}
                    `}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-text-light text-sm">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Urgency Counter */}
        <motion.div
          className="text-center p-8 bg-white rounded-2xl border border-border shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-text-light mb-3">Vagas restantes no beta:</p>
          <div className="flex items-center justify-center gap-2">
            <Counter end={8} className="text-5xl text-primary" />
            <span className="text-3xl text-text-light">/20</span>
          </div>
          <p className="text-sm text-text-light mt-3">
            ⚡ Últimas vagas sendo preenchidas rapidamente
          </p>
        </motion.div>
      </div>
    </section>
  );
}
