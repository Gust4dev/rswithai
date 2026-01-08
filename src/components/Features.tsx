"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import {
  Brain,
  Kanban,
  UserCircle,
  CheckSquare,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Triagem Inteligente com IA",
    description:
      "Nossa IA analisa currículos automaticamente, pontuando cada candidato com base nos requisitos da vaga.",
    color: "primary",
    badge: "Core",
  },
  {
    icon: Kanban,
    title: "Kanban Visual",
    description:
      "Arraste candidatos entre as etapas do processo. Visualize todo seu pipeline de forma clara e intuitiva.",
    color: "secondary",
    badge: null,
  },
  {
    icon: UserCircle,
    title: "Portal do Candidato",
    description:
      "Candidatos acompanham o status da aplicação. Menos emails, mais transparência, melhor experiência.",
    color: "accent",
    badge: null,
  },
  {
    icon: CheckSquare,
    title: "Aprovação de Vagas",
    description:
      "Workflow de aprovação para abertura de vagas. Gestores aprovam direto no sistema, sem email perdido.",
    color: "primary",
    badge: null,
  },
  {
    icon: BarChart3,
    title: "Métricas em Tempo Real",
    description:
      "Dashboards que mostram time-to-hire, custo por contratação, taxa de conversão e muito mais.",
    color: "secondary",
    badge: "Novo",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="section" id="features">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-primary mb-4">🚀 Features MVP</span>
          <h2 className="text-section mb-4">
            Tudo que você precisa para{" "}
            <span className="gradient-text">recrutar melhor</span>
          </h2>
          <p className="text-body text-text-light max-w-2xl mx-auto">
            Funcionalidades essenciais já disponíveis no beta
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full group">
                <div className="flex flex-col h-full">
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`
                      w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110
                      ${
                        feature.color === "primary"
                          ? "bg-primary/10 group-hover:bg-primary/20"
                          : ""
                      }
                      ${
                        feature.color === "secondary"
                          ? "bg-secondary/10 group-hover:bg-secondary/20"
                          : ""
                      }
                      ${
                        feature.color === "accent"
                          ? "bg-accent/10 group-hover:bg-accent/20"
                          : ""
                      }
                    `}
                    >
                      <feature.icon
                        className={`w-6 h-6
                        ${feature.color === "primary" ? "text-primary" : ""}
                        ${feature.color === "secondary" ? "text-secondary" : ""}
                        ${feature.color === "accent" ? "text-accent" : ""}
                      `}
                      />
                    </div>
                    {feature.badge && (
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full
                        ${
                          feature.badge === "Core"
                            ? "bg-primary/10 text-primary"
                            : ""
                        }
                        ${
                          feature.badge === "Novo"
                            ? "bg-secondary/10 text-secondary"
                            : ""
                        }
                      `}
                      >
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-text-light text-sm flex-grow">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
