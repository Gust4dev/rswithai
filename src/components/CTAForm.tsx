"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button, Input, Select, Textarea } from "@/components/ui";
import { betaFormSchema, type BetaFormData } from "@/lib/validations";

const employeesOptions = [
  { value: "10-50", label: "10 - 50 funcionários" },
  { value: "50-100", label: "50 - 100 funcionários" },
  { value: "100-200", label: "100 - 200 funcionários" },
  { value: "200+", label: "200+ funcionários" },
];

export function CTAForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<"basico" | "pro">("pro");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BetaFormData>({
    resolver: zodResolver(betaFormSchema),
    defaultValues: {
      plan: "pro",
      consent: false,
      usePersonalEmail: false,
    },
  });

  const watchedEmployees = watch("employees");

  const onSubmit = async (data: BetaFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/submit-beta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Erro ao enviar candidatura");
      }

      // Redirect to thank you page
      window.location.href = "/obrigado";
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Erro ao enviar. Tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="section bg-gradient-to-b from-primary/5 to-background"
      id="cta-form"
    >
      <div className="container-narrow">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-accent mb-4">🚀 Garanta Sua Vaga</span>
          <h2 className="text-section mb-4">
            Entre para o <span className="gradient-text">Beta Exclusivo</span>
          </h2>
          <p className="text-body text-text-light">
            Apenas 20 empresas terão acesso. Preencha o formulário abaixo.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 border border-border shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Plan Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-text mb-3">
                Escolha seu plano *
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan("basico");
                    setValue("plan", "basico");
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedPlan === "basico"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-semibold">Beta Básico</span>
                  <p className="text-sm text-text-light">
                    Gratuito por 3 meses
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan("pro");
                    setValue("plan", "pro");
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedPlan === "pro"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-semibold">Beta Pro 🔥</span>
                  <p className="text-sm text-text-light">
                    R$99/mês por 6 meses
                  </p>
                </button>
              </div>
              {errors.plan && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.plan.message}
                </p>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                label="Nome Completo"
                placeholder="Seu nome"
                error={errors.name?.message}
                required
                {...register("name")}
              />
              <Input
                label="Cargo"
                placeholder="Ex: Gerente de RH"
                error={errors.role?.message}
                required
                {...register("role")}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                label="Nome da Empresa"
                placeholder="Sua empresa"
                error={errors.company?.message}
                required
                {...register("company")}
              />
              <Select
                label="Quantos funcionários?"
                options={employeesOptions}
                placeholder="Selecione..."
                error={errors.employees?.message}
                required
                value={watchedEmployees || ""}
                onChange={(e) =>
                  setValue(
                    "employees",
                    e.target.value as BetaFormData["employees"]
                  )
                }
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input
                  label={
                    watch("usePersonalEmail") ? "Email" : "Email Corporativo"
                  }
                  type="email"
                  placeholder={
                    watch("usePersonalEmail")
                      ? "seuemail@gmail.com"
                      : "voce@empresa.com.br"
                  }
                  error={errors.email?.message}
                  required
                  {...register("email")}
                />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="usePersonalEmail"
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    {...register("usePersonalEmail")}
                  />
                  <label
                    htmlFor="usePersonalEmail"
                    className="text-xs text-text-light cursor-pointer"
                  >
                    Não tenho email corporativo
                  </label>
                </div>
              </div>
              <Input
                label="WhatsApp"
                type="tel"
                placeholder="(11) 99999-9999"
                error={errors.whatsapp?.message}
                required
                {...register("whatsapp")}
              />
            </div>

            <Textarea
              label="Qual sua maior dor no RH hoje?"
              placeholder="Conte um pouco sobre os desafios que você enfrenta..."
              maxLength={200}
              error={errors.painPoint?.message}
              {...register("painPoint")}
            />

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                {...register("consent")}
              />
              <label htmlFor="consent" className="text-sm text-text-light">
                Concordo em receber comunicações sobre o programa beta e aceito
                a{" "}
                <a href="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                .
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-500">{errors.consent.message}</p>
            )}

            {/* Error message */}
            {submitError && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                {submitError}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Quero Ser Beta Tester
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
