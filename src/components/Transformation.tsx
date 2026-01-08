"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const transformations = [
  {
    before: "📧 180 currículos pra ler",
    after: "🎯 10 melhores candidatos",
  },
  {
    before: "⏱️ 4 semanas pra fechar vaga",
    after: "⚡ 7 dias em média",
  },
  {
    before: "📊 Planilhas confusas",
    after: "📋 Kanban visual e intuitivo",
  },
  {
    before: "🔄 Candidatos perdidos",
    after: "👤 Portal do candidato",
  },
  {
    before: "❓ Zero métricas",
    after: "📈 Dashboard em tempo real",
  },
  {
    before: "😰 Decisões no achismo",
    after: "🧠 IA analisa por você",
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function Transformation() {
  return (
    <section className="section" id="transformation">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-secondary mb-4">✨ A Transformação</span>
          <h2 className="text-section mb-4">
            Antes vs <span className="gradient-text">Depois</span>
          </h2>
          <p className="text-body text-text-light max-w-2xl mx-auto">
            Veja como sua rotina de recrutamento vai mudar
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center bg-white rounded-xl p-4 border border-border hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              {/* Before */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50">
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm text-red-700">{item.before}</span>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>

              {/* After */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-green-700">{item.after}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
