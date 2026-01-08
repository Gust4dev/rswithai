import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#6366F1",
                    50: "#EEEEFF",
                    100: "#E0E1FE",
                    200: "#C7C8FD",
                    300: "#A5A7FB",
                    400: "#8385F7",
                    500: "#6366F1",
                    600: "#4F52E8",
                    700: "#3B3ED4",
                    800: "#3234B0",
                    900: "#2D2F8C",
                },
                secondary: {
                    DEFAULT: "#10B981",
                    50: "#ECFDF5",
                    100: "#D1FAE5",
                    200: "#A7F3D0",
                    300: "#6EE7B7",
                    400: "#34D399",
                    500: "#10B981",
                    600: "#059669",
                    700: "#047857",
                    800: "#065F46",
                    900: "#064E3B",
                },
                accent: {
                    DEFAULT: "#F59E0B",
                    50: "#FFFBEB",
                    100: "#FEF3C7",
                    200: "#FDE68A",
                    300: "#FCD34D",
                    400: "#FBBF24",
                    500: "#F59E0B",
                    600: "#D97706",
                    700: "#B45309",
                    800: "#92400E",
                    900: "#78350F",
                },
                text: {
                    DEFAULT: "#1F2937",
                    light: "#6B7280",
                },
                background: "#F9FAFB",
                border: "#E5E7EB",
            },
            borderColor: {
                border: "#E5E7EB",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-space-grotesk)", "monospace"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
                "fade-in-up": "fadeInUp 0.6s ease-out",
                "slide-in-right": "slideInRight 0.5s ease-out",
                "pulse-glow": "pulseGlow 2s ease-in-out infinite",
                "count-up": "countUp 2s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                pulseGlow: {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" },
                    "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.8)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
