"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui";
import { scrollToElement } from "@/lib/utils";

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[--bg-base] to-[--bg-muted]">
      {/* 1. Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* 2. Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-50 animate-pulse delay-1000 pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary/20 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="text-sm font-semibold text-text">
                  Beta Exclusivo: Restam 8 Vagas
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-text"
              variants={fadeInUp}
            >
              Contrate em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary bg-300% animate-shine">
                7 Dias
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl text-text-light max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              A única IA que tria currículos como um recrutador sênior. Elimine
              o caos do RH e foque apenas em entrevistar os melhores.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                onClick={handlePrimaryCTA}
                className="group h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                Quero Acesso Beta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleSecondaryCTA}
                className="group h-14 px-8 text-lg bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <Play className="w-5 h-5 mr-2" />
                Como Funciona
              </Button>
            </motion.div>

            {/* Compatibility/Social Proof */}
            <motion.div
              className="flex flex-col items-center lg:items-start gap-4"
              variants={fadeInUp}
            >
              <p className="text-sm font-medium text-text-light uppercase tracking-wider">
                Compatível com
              </p>
              <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Lucide Icons representing platforms */}
                <div className="flex items-center gap-2" title="LinkedIn">
                  <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-sm">
                    in
                  </div>
                </div>
                <div className="flex items-center gap-2" title="Gmail">
                  <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-sm">
                    M
                  </div>
                </div>
                <div className="flex items-center gap-2" title="PDF/Word">
                  <div className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-sm">
                    doc
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image Container with pure CSS 3D effect */}
            <div className="relative z-10 transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 preserve-3d">
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
              <Image
                src="/images/hero-visual.png"
                alt="Dashboard Inteligente"
                width={700}
                height={700}
                className="w-full h-auto drop-shadow-2xl rounded-2xl border border-white/40 shadow-2xl"
                priority
              />

              {/* Floating Element 1 - Approved Candidate */}
              <motion.div
                className="absolute -left-4 top-10 md:-left-8 md:top-20 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 backdrop-blur-md"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      Candidato Aprovado
                    </div>
                    <div className="font-bold text-gray-800">98% Match</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Speed */}
              <motion.div
                className="absolute -right-4 bottom-10 md:-right-8 md:bottom-20 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 backdrop-blur-md"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      Tempo de Triagem
                    </div>
                    <div className="font-bold text-gray-800">30 segs</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
