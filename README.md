# CONTRATEI - Landing Page

Sistema de recrutamento com IA. Esta é a landing page para captura de beta testers.

## 🛠️ Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + Tailwind CSS 3
- **Animações**: Framer Motion
- **Formulário**: React Hook Form + Zod
- **Ícones**: Lucide React
- **Email**: Resend (configurar)
- **Database**: Notion API (configurar)
- **Analytics**: GA4, Hotjar, FB Pixel (opcionais)

## 📁 Estrutura

```
src/
├── app/
│   ├── globals.css       # Design system
│   ├── layout.tsx        # Layout + SEO
│   ├── page.tsx          # Landing page
│   ├── obrigado/         # Thank you page
│   └── api/submit-beta/  # API endpoint
├── components/
│   ├── ui/               # Componentes base
│   └── *.tsx             # Seções da landing
└── lib/
    ├── utils.ts          # Helpers
    ├── validations.ts    # Zod schemas
    ├── notion.ts         # Notion client
    └── resend.ts         # Email client
```

## 🚀 Rodando Localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build
npm run build
```

Acessar: http://localhost:3000

## ⚙️ Configuração

Criar `.env.local`:

```env
# Notion
NOTION_API_KEY=secret_xxxxx
NOTION_DATABASE_ID=xxxxx

# Email
RESEND_API_KEY=re_xxxxx

# Analytics (opcionais)
NEXT_PUBLIC_GA_ID=G-XXXXXXX
NEXT_PUBLIC_HOTJAR_ID=xxxxx

# App
NEXT_PUBLIC_SITE_URL=https://contratei.com.br
NEXT_PUBLIC_WHATSAPP=556292668427
NEXT_PUBLIC_COMPANY_NAME=CONTRATEI
```

## 📦 Deploy

```bash
# Deploy na Vercel
npx vercel
```

## 📝 License

Privado - CONTRATEI © 2026
