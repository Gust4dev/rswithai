import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import { ScrollToTop } from "@/components";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteName = process.env.NEXT_PUBLIC_COMPANY_NAME || "CONTRATEI";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://contratei.com.br";

export const metadata: Metadata = {
  title: {
    default: `${siteName} - Sistema de Recrutamento com IA`,
    template: `%s | ${siteName}`,
  },
  description:
    "Feche vagas em 7 dias, não 30. Sistema de recrutamento com IA que analisa currículos automaticamente e encontra os melhores candidatos para sua empresa.",
  keywords: [
    "recrutamento",
    "RH",
    "recursos humanos",
    "IA",
    "inteligência artificial",
    "triagem de currículos",
    "ATS",
    "software de RH",
    "gestão de vagas",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - Sistema de Recrutamento com IA`,
    description:
      "Feche vagas em 7 dias, não 30. Sistema de recrutamento com IA que analisa currículos automaticamente.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} - Sistema de Recrutamento com IA`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Sistema de Recrutamento com IA`,
    description:
      "Feche vagas em 7 dias, não 30. Sistema de recrutamento com IA que analisa currículos automaticamente.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
