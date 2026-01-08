"use client";

import { motion } from "framer-motion";
import { FileText, Brain, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Publique a vaga",
    description:
      "Crie sua vaga em minutos com nosso editor intuitivo. Defina requisitos, experiência e habilidades desejadas.",
    color: "primary",
  },
  {
    number: "02",
    icon: Brain,
    title: "IA analisa candidatos",
    description:
      "Nossa IA lê e pontua cada currículo automaticamente, identificando os candidatos mais qualificados para sua vaga.",
    color: "secondary",
  },
  {
    number: "03",
    icon: Target,
    title: "Você foca nos melhores",
    description:
      "Receba apenas os top 10 candidatos ranqueados. Agende entrevistas direto pelo sistema e feche a vaga rapidamente.",
    color: "accent",
  },
];

export function HowItWorks() {
  return (
    <section className="section-gradient" id="how-it-works">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-primary mb-4">🔧 Como Funciona</span>
          <h2 className="text-section mb-4">
            Três passos para <span className="gradient-text">revolucionar</span>{" "}
            seu recrutamento
          </h2>
          <p className="text-body text-text-light max-w-2xl mx-auto">
            Simples de usar, poderoso nos resultados
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step number */}
                  <div
                    className={`
                      w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0
                      ${step.color === "primary" ? "bg-primary/10" : ""}
                      ${step.color === "secondary" ? "bg-secondary/10" : ""}
                      ${step.color === "accent" ? "bg-accent/10" : ""}
                    `}
                  >
                    <step.icon
                      className={`w-7 h-7 
                        ${step.color === "primary" ? "text-primary" : ""}
                        ${step.color === "secondary" ? "text-secondary" : ""}
                        ${step.color === "accent" ? "text-accent" : ""}
                      `}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <span
                      className={`
                        text-sm font-bold
                        ${step.color === "primary" ? "text-primary" : ""}
                        ${step.color === "secondary" ? "text-secondary" : ""}
                        ${step.color === "accent" ? "text-accent" : ""}
                      `}
                    >
                      PASSO {step.number}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-light">{step.description}</p>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-border"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
