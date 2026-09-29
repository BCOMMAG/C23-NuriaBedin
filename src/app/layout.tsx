import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const krub = Krub({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://nuriabedin.pages.dev";
const ogImageUrl = `${siteUrl}/og-image_optimized_300.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nuria Bedin Advocacia | Direito Trabalhista e Previdenciário",
    template: "%s | Nuria Bedin Advocacia",
  },
  description:
    "Escritório de advocacia especializado em Direito Trabalhista e Previdenciário liderado pela Dra. Nuria Bedin. Atuação combativa e humanizada em rescisões, horas extras, auxílio-doença, aposentadorias do INSS e planejamento previdenciário. Atendimento presencial sob agendamento em Maringá/PR e digital para todo o Brasil e exterior.",
  keywords: [
    "dra nuria bedin",
    "nuria bedin advocacia",
    "advogada trabalhista maringa",
    "advogado previdenciario maringa",
    "rescisao indireta",
    "calculos rescisorios horas extras",
    "aposentadoria inss regras de transicao",
    "auxilio-doenca alta programada",
    "auxilio-acidente vitalicio",
    "bpc loas idoso deficiencia",
    "planejamento previdenciario",
    "advocacia humanizada maringa",
    "consultoria juridica online brasil e exterior",
  ],
  authors: [{ name: "Dra. Nuria Bedin" }],
  creator: "Dra. Nuria Bedin",
  publisher: "Nuria Bedin Advocacia e Consultoria Jurídica",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Nuria Bedin Advocacia | Direito Trabalhista e Previdenciário",
    description:
      "Defesa combativa, estratégica e humanizada dos seus direitos trabalhistas e previdenciários. Dra. Nuria Bedin — atendimento em Maringá/PR e para todo o Brasil e exterior.",
    siteName: "Nuria Bedin Advocacia",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Nuria Bedin Advocacia e Consultoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuria Bedin Advocacia | Direito Trabalhista e Previdenciário",
    description:
      "Defesa combativa, estratégica e humanizada dos seus direitos trabalhistas e previdenciários. Dra. Nuria Bedin — atendimento em Maringá/PR e para todo o Brasil e exterior.",
    images: [ogImageUrl],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${krub.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-apple-touch-icon180x180.png" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nuria Bedin Advocacia" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[#D2B474] selection:text-[#111111]">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}