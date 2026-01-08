"use client";

import { motion } from "framer-motion";
import { Check, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { scrollToElement } from "@/lib/utils";

const phases = [
  {
    status: "available",
    title: "Disponível Agora",
    icon: Check,
    items: [
      "Publicação de vagas",
      "Triagem com IA básica",
      "Kanban de candidatos",
      "Portal do candidato",
      "Métricas essenciais",
    ],
    color: "secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary",
  },
  {
    status: "development",
    title: "Em Desenvolvimento",
    icon: Clock,
    items: [
      "Integração com LinkedIn",
      "Entrevistas agendadas",
      "Testes de habilidades",
      "Colaboração em equipe",
      "API pública",
    ],
    color: "accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent",
  },
  {
    status: "planned",
    title: "Planejado",
    icon: Sparkles,
    items: [
      "WhatsApp Bot",
      "Assinatura digital",
      "IA generativa (GPT)",
      "Integrações com ERPs",
      "App mobile",
    ],
    color: "primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/50",
  },
];

export function Roadmap() {
  return (
    <section className="section bg-background" id="roadmap">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-primary mb-4">🗺️ Roadmap</span>
          <h2 className="text-section mb-4">
            O futuro do <span className="gradient-text">recrutamento</span>
          </h2>
          <p className="text-body text-text-light max-w-2xl mx-auto">
            Construindo junto com você. Beta testers têm voz ativa nas próximas
            features.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line - desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.status}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
              >
                {/* Status indicator */}
                <div className="flex items-center gap-3 mb-4 lg:mb-8">
                  <div
                    className={`
                    w-16 h-16 rounded-2xl ${phase.bgColor} flex items-center justify-center
                    border-2 ${phase.borderColor} bg-white relative z-10
                  `}
                  >
                    <phase.icon
                      className={`w-8 h-8 text-${phase.color}`}
                      style={{
                        color:
                          phase.color === "secondary"
                            ? "#10B981"
                            : phase.color === "accent"
                            ? "#F59E0B"
                            : "#6366F1",
                      }}
                    />
                  </div>
                  <div>
                    <span
                      className={`text-sm font-semibold`}
                      style={{
                        color:
                          phase.color === "secondary"
                            ? "#10B981"
                            : phase.color === "accent"
                            ? "#F59E0B"
                            : "#6366F1",
                      }}
                    >
                      {phase.status === "available" && "✅"}
                      {phase.status === "development" && "🚧"}
                      {phase.status === "planned" && "🔮"}
                    </span>
                    <h3 className="font-bold text-lg">{phase.title}</h3>
                  </div>
                </div>

                {/* Items list */}
                <div className="bg-white rounded-xl p-6 border border-border">
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check
                          className={`w-4 h-4 flex-shrink-0`}
                          style={{
                            color:
                              phase.status === "available"
                                ? "#10B981"
                                : phase.status === "development"
                                ? "#F59E0B"
                                : "#6366F1",
                            opacity: phase.status === "planned" ? 0.5 : 1,
                          }}
                        />
                        <span
                          className={`text-sm ${
                            phase.status === "planned"
                              ? "text-text-light"
                              : "text-text"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-text-light mb-4">
            Quer influenciar o roadmap? Beta testers decidem as prioridades!
          </p>
          <Button
            variant="secondary"
            onClick={() => scrollToElement("cta-form")}
          >
            Votar nas Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
