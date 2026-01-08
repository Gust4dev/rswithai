/**
 * Helpers para tracking de eventos customizados no GA4
 */

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
    }
}

/**
 * Verifica se o GA4 está disponível
 */
function isGaAvailable(): boolean {
    return typeof window !== "undefined" && "gtag" in window;
}

/**
 * Envia evento customizado para o Google Analytics 4
 */
export function trackEvent(
    action: string,
    category: string,
    label?: string,
    value?: number
): void {
    if (!isGaAvailable()) return;

    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    });
}

/**
 * Track de submissão do formulário beta
 */
export function trackFormSubmit(plan: string): void {
    trackEvent("generate_lead", "Beta Form", plan, plan === "pro" ? 50 : 0);

    // Também envia conversão
    if (isGaAvailable()) {
        window.gtag("event", "conversion", {
            send_to: `${process.env.NEXT_PUBLIC_GA_ID}/beta-signup`,
            value: plan === "pro" ? 50 : 0,
            currency: "BRL",
        });
    }
}

/**
 * Track de seleção de plano
 */
export function trackPlanSelection(plan: string): void {
    trackEvent("select_content", "Pricing", plan);
}

/**
 * Track de abertura do modal de exit intent
 */
export function trackExitIntent(): void {
    trackEvent("view_item", "Exit Intent", "modal_shown");
}

/**
 * Track de scroll depth
 */
export function trackScrollDepth(depth: number): void {
    trackEvent("scroll", "Page Engagement", `${depth}%`, depth);
}

/**
 * Track de clique em CTA
 */
export function trackCTAClick(location: string): void {
    trackEvent("click", "CTA", location);
}
