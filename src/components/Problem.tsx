"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { Clock, TrendingDown, FileSpreadsheet } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Sobrecarga de Currículos",
    description:
      "180 currículos por vaga. Você perde horas lendo candidatos que nem deveriam ter aplicado.",
    stat: "180",
    statLabel: "currículos/vaga",
  },
  {
    icon: TrendingDown,
    title: "Decisões Ruins",
    description:
      "Contratações apressadas = turnover alto. Cada erro de contratação custa até 2x o salário anual.",
    stat: "2x",
    statLabel: "custo do erro",
  },
  {
    icon: Clock,
    title: "Caos de Planilhas",
    description:
      "Candidatos perdidos em emails, planilhas desatualizadas, nenhuma visibilidade do processo.",
    stat: "40h",
    statLabel: "perdidas/mês",
  },
];

export function Problem() {
  return (
    <section className="section-dark" id="problem">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge bg-red-500/20 text-red-400 mb-4">
            😤 O Problema
          </span>
          <h2 className="text-section text-white mb-4">
            Recrutar está cada vez mais difícil
          </h2>
          <p className="text-body text-gray-400 max-w-2xl mx-auto">
            O RH moderno enfrenta desafios que ferramentas antigas não resolvem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card variant="dark" className="h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    {problem.description}
                  </p>
                  <div className="pt-4 border-t border-gray-700">
                    <span className="text-3xl font-bold text-red-400 font-mono">
                      {problem.stat}
                    </span>
                    <span className="text-gray-500 ml-2 text-sm">
                      {problem.statLabel}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main stat highlight */}
        <motion.div
          className="text-center p-8 rounded-2xl bg-gray-800/50 border border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-4xl">📈</span>
            <p className="text-xl md:text-2xl text-white">
              <span className="font-bold text-red-400">
                RH gasta 40 horas/mês
              </span>{" "}
              só em triagem manual de currículos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
