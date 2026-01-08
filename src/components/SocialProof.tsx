"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Counter } from "@/components/ui";

const stats = [
  { value: 12, suffix: "/20", label: "vagas preenchidas" },
  { value: 50, suffix: "+", label: "empresas interessadas" },
  { value: 4.9, suffix: "/5", label: "avaliação média" },
];

export function SocialProof() {
  return (
    <section id="social-proof" className="section bg-white">
      <div className="container-wide">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-section mb-4">
            Empresas de tecnologia já garantiram sua vaga no beta
          </h2>
          <p className="text-body text-text-light max-w-2xl mx-auto mb-10">
            Junte-se às empresas que estão transformando seu recrutamento com IA
          </p>
        </motion.div>

        {/* Urgency Counter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-orange-100 rounded-full px-6 py-3 border border-accent/20">
            <Flame className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-lg font-semibold">
              <Counter end={12} className="text-accent text-2xl" />
              <span className="text-text">/20</span>
              <span className="text-text-light ml-2">vagas preenchidas</span>
            </span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="gradient-text"
                />
              </div>
              <p className="text-text-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Company logos placeholder */}
        <motion.div
          className="mt-12 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-text-light text-center mb-6">
            Empresas que confiam na nossa solução
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {/* Placeholder logos - será substituído por logos reais */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-8 bg-gray-300 rounded animate-pulse"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
