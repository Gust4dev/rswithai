"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button, Input } from "@/components/ui";
import { exitIntentSchema, type ExitIntentData } from "@/lib/validations";

const STORAGE_KEY = "exitIntentShown";

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExitIntentData>({
    resolver: zodResolver(exitIntentSchema),
  });

  useEffect(() => {
    // Check if already shown
    if (typeof window !== "undefined") {
      const alreadyShown = localStorage.getItem(STORAGE_KEY);
      if (alreadyShown) return;
    }

    // Desktop: mouse leave
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showModal();
      }
    };

    // Mobile: quick scroll up
    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY < 200) {
        scrollUpCount++;
        if (scrollUpCount >= 3) {
          showModal();
        }
      } else {
        scrollUpCount = 0;
      }
      lastScrollY = currentScrollY;
    };

    const showModal = () => {
      const alreadyShown = localStorage.getItem(STORAGE_KEY);
      if (!alreadyShown) {
        setIsOpen(true);
        localStorage.setItem(STORAGE_KEY, "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSubmit = async (data: ExitIntentData) => {
    setIsSubmitting(true);
    try {
      // In a real app, send to your API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setTimeout(() => setIsOpen(false), 2000);
    } catch {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl mx-4 relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-text-light hover:text-text rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSuccess ? (
                <>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-center mb-2">
                    ⚡ Antes de ir...
                  </h3>
                  <p className="text-text-light text-center mb-6">
                    Deixa seu email pra gente te avisar quando o beta abrir
                    novas vagas?
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      Me Avise
                    </Button>
                  </form>

                  <button
                    onClick={closeModal}
                    className="w-full text-center text-sm text-text-light hover:text-text mt-4 transition-colors"
                  >
                    Não, obrigado
                  </button>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Perfeito!</h3>
                  <p className="text-text-light">
                    Você será avisado assim que novas vagas abrirem.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
