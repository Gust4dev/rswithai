import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with clsx
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Format phone number to E.164 format
 */
export function formatPhoneE164(phone: string): string {
    const digits = phone.replace(/\D/g, "");
    if (digits.startsWith("55")) {
        return `+${digits}`;
    }
    return `+55${digits}`;
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
    const digits = phone.replace(/\D/g, "");
    const cleaned = digits.startsWith("55") ? digits.slice(2) : digits;

    if (cleaned.length === 11) {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
}

/**
 * Generate WhatsApp link
 */
export function getWhatsAppLink(phone: string, message?: string): string {
    const digits = phone.replace(/\D/g, "");
    const baseUrl = `https://wa.me/${digits}`;

    if (message) {
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
}

/**
 * Scroll to element by ID
 */
export function scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

/**
 * Format currency in BRL
 */
export function formatCurrency(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
}

/**
 * Delay execution
 */
export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => func(...args), wait);
    };
}
