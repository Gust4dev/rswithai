"use client";

import { motion } from "framer-motion";
import { Check, X, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { scrollToElement, formatCurrency } from "@/lib/utils";

const plans = [
  {
    id: "basico",
    name: "Beta Básico",
    subtitle: "5 vagas simultâneas",
    price: 0,
    period: "por 3 meses",
    afterPrice: null,
    savingsLabel: null,
    features: [
      { text: "Gestão de vagas", included: true, bold: false },
      { text: "Portal do candidato", included: true, bold: false },
      { text: "Kanban básico", included: true, bold: false },
      { text: "Triagem com IA", included: false, bold: false },
      { text: "Métricas avançadas", included: false, bold: false },
      { text: "Banco de talentos", included: false, bold: false },
    ],
    cta: "Inscrever Grátis",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Beta Pro",
    subtitle: "15 vagas simultâneas",
    badge: "🔥 Mais Popular",
    price: 99,
    period: "por 6 meses",
    afterPrice: 250,
    originalPrice: 500,
    savingsLabel: "Economize R$3.000/ano",
    features: [
      { text: "TUDO do Básico +", included: true, bold: true },
      { text: "Triagem com IA", included: true, bold: false },
      { text: "Métricas avançadas", included: true, bold: false },
      { text: "Banco de talentos", included: true, bold: false },
      { text: "Roadmap priority", included: true, bold: false },
      { text: "Suporte prioritário", included: true, bold: false },
    ],
    cta: "Garantir Vaga Pro",
    highlighted: true,
  },
];

export function PricingCards() {
  return (
    <section className="section" id="pricing">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-accent mb-4">💰 Preços de Beta</span>
          <h2 className="text-section mb-4">
            Preços que <span className="gradient-text">nunca mais</span> serão
            tão baixos
          </h2>
          <p className="text-body text-text-light max-w-2xl mx-auto">
            Garanta agora o preço de beta tester. Depois que lançarmos
            oficialmente, esses valores não existem mais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`
                relative rounded-2xl p-8 transition-all duration-300
                ${
                  plan.highlighted
                    ? "bg-white border-2 border-primary shadow-2xl shadow-primary/10 scale-[1.02]"
                    : "bg-white border border-border hover:shadow-lg"
                }
              `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    <Flame className="w-4 h-4" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-text-light">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                {plan.price === 0 ? (
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-secondary">
                      GRATUITO
                    </span>
                    <span className="text-text-light ml-2">{plan.period}</span>
                  </div>
                ) : (
                  <>
                    <div className="mb-1">
                      <span className="text-4xl font-bold gradient-text">
                        {formatCurrency(plan.price)}
                      </span>
                      <span className="text-text-light">/mês</span>
                    </div>
                    <p className="text-sm text-text-light">{plan.period}</p>
                    {plan.afterPrice && (
                      <p className="text-sm text-text-light mt-1">
                        Depois: {formatCurrency(plan.afterPrice)}/mês{" "}
                        <span className="line-through text-text-light/50">
                          ({formatCurrency(plan.originalPrice!)}/mês normal)
                        </span>
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`flex items-center gap-2 ${
                      feature.bold ? "font-semibold" : ""
                    }`}
                  >
                    {feature.included ? (
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? "text-text" : "text-text-light/60"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Savings label */}
              {plan.savingsLabel && (
                <div className="mb-6 p-3 bg-secondary/10 rounded-lg text-center">
                  <span className="text-sm font-semibold text-secondary flex items-center justify-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {plan.savingsLabel}
                  </span>
                </div>
              )}

              {/* CTA */}
              <Button
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full"
                size="lg"
                onClick={() => scrollToElement("cta-form")}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          className="text-center text-sm text-text-light mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          ✓ Sem fidelidade &nbsp;•&nbsp; ✓ Cancele quando quiser &nbsp;•&nbsp; ✓
          Garantia de 30 dias
        </motion.p>
      </div>
    </section>
  );
}
