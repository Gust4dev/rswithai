"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui";
import { scrollToElement } from "@/lib/utils";

const trustBadges = [
  "100% gratuito durante o beta",
  "Sem cartão de crédito",
  "Setup em 5 minutos",
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Hero() {
  const handlePrimaryCTA = () => {
    scrollToElement("cta-form");
  };

  const handleSecondaryCTA = () => {
    scrollToElement("how-it-works");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <motion.div
            className="text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="badge-accent inline-flex items-center gap-2 mb-6">
                🚀 Beta Exclusivo - Vagas Limitadas
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="text-hero mb-6" variants={fadeInUp}>
              Contrate em <span className="gradient-text">7 dias</span>
              <br />
              <span className="text-text-light text-3xl md:text-4xl lg:text-5xl">
                Com IA que faz a triagem por você
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-body text-text-light max-w-xl mx-auto lg:mx-0 mb-8"
              variants={fadeInUp}
            >
              Sistema de recrutamento com IA que analisa currículos
              automaticamente, elimina candidatos desqualificados e entrega só
              os melhores para você entrevistar. Transforme o caos do RH em
              processo previsível.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={fadeInUp}
            >
              <Button size="lg" onClick={handlePrimaryCTA} className="group">
                Quero Ser Beta Tester
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleSecondaryCTA}
                className="group"
              >
                <Play className="w-5 h-5" />
                Ver Como Funciona
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm text-text-light"
                >
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />

              {/* Main illustration */}
              <div className="relative z-10">
                <Image
                  src="/images/hero-visual.png"
                  alt="Sistema de RH com IA - Dashboard"
                  width={600}
                  height={600}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating stats cards */}
              <motion.div
                className="absolute -left-4 top-1/4 z-20 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <p className="text-sm text-text-light">Tempo economizado</p>
                    <p className="font-bold text-secondary">-75%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-1/4 z-20 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-sm text-text-light">
                      Candidatos qualificados
                    </p>
                    <p className="font-bold text-primary">Top 10</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <button
          onClick={() => scrollToElement("social-proof")}
          className="flex flex-col items-center gap-2 text-text-light hover:text-primary transition-colors"
          aria-label="Scroll para baixo"
        >
          <span className="text-sm">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
