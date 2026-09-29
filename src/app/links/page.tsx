"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import {
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  Calculator,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "WhatsApp Oficial com Advogado",
      subtitle: "Atendimento imediato e orientações preliminares",
      href: OFFICE_INFO.whatsappUrl,
      icon: WhatsAppIcon,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Institucional",
      subtitle: "Conheça nossa estrutura, áreas e diferenciais",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "trabalhista",
      title: "Direito do Trabalho & Rescisões",
      subtitle: "Rescisão indireta, horas extras, pejotização e verbas",
      href: `https://wa.me/${OFFICE_INFO.phoneRaw}?text=${encodeURIComponent(
        "Olá, Dra. Nuria Bedin! Gostaria de consultoria jurídica sobre Direito do Trabalho e Rescisões."
      )}`,
      icon: Briefcase,
      highlight: false,
    },
    {
      id: "previdenciario",
      title: "Benefícios do INSS & Auxílio-Doença",
      subtitle: "Reversão de alta programada, auxílio-doença e BPC/LOAS",
      href: `https://wa.me/${OFFICE_INFO.phoneRaw}?text=${encodeURIComponent(
        "Olá, Dra. Nuria Bedin! Gostaria de consultoria jurídica sobre Benefícios do INSS e Auxílio-Doença."
      )}`,
      icon: Scale,
      highlight: false,
    },
    {
      id: "acidentes",
      title: "Acidentes & Doenças Ocupacionais",
      subtitle: "Auxílio-acidente, estabilidade de 12 meses e reparações",
      href: `https://wa.me/${OFFICE_INFO.phoneRaw}?text=${encodeURIComponent(
        "Olá, Dra. Nuria Bedin! Gostaria de consultoria sobre Acidentes de Trabalho e Doenças Ocupacionais."
      )}`,
      icon: ShieldAlert,
      highlight: false,
    },
    {
      id: "planejamento",
      title: "Aposentadorias & Planejamento",
      subtitle: "Simulação de regras de transição e cálculo de maior benefício",
      href: `https://wa.me/${OFFICE_INFO.phoneRaw}?text=${encodeURIComponent(
        "Olá, Dra. Nuria Bedin! Gostaria de uma análise para Planejamento Previdenciário e Aposentadoria."
      )}`,
      icon: Calculator,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Institucional",
      subtitle: `${OFFICE_INFO.instagramHandle} • Conteúdo jurídico e direitos`,
      href: OFFICE_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito do Trabalho",
    "Rescisão Indireta",
    "Horas Extras & Verbas",
    "Benefícios do INSS",
    "Auxílio-Acidente",
    "Planejamento Previdenciário",
    "BPC / LOAS",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FAFAFA] text-[#111111]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll - Estilo C08-Sloane) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo DOBRADA e Identidade Visual */}
        <div className="relative bg-[#0A0A0A] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#D2B474]/20">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D2B474" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#D2B474" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D2B474]/40 bg-[#161616]/90 backdrop-blur-md text-xs font-heading tracking-wider text-[#D2B474]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D2B474]" />
              <span>Advocacia Trabalhista & Previdenciária</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#D2B474]">
              Maringá/PR • Atendimento Nacional
            </span>
          </div>

          {/* Logo Dobrada no Lado Esquerdo com Dimensões Explícitas */}
          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <Link
              href="/"
              className="relative block w-full max-w-[560px] xl:max-w-[650px] h-60 xl:h-72 mx-auto cursor-pointer group focus:outline-none mb-4"
              aria-label="Ir para a página inicial"
            >
              <Image
                src="/logo_sem_fundo_usarnomodoescuro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-center drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1280px) 650px, 560px"
              />
            </Link>

            <div className="h-0.5 w-16 bg-[#D2B474]/60 mb-4" />

            <h1 className="font-heading text-lg xl:text-xl font-semibold max-w-md leading-snug text-white">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-gray-300 max-w-sm mt-3 leading-relaxed">
              Atuação jurídica técnica, combativa e acolhedora em Direito Trabalhista e Previdenciário perante a Justiça do Trabalho, INSS e Justiça Federal.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-gray-400 font-body pt-3 border-t border-white/10">
            <p>{OFFICE_INFO.addressShort}</p>
            <p className="text-[0.6875rem] text-[#D2B474]/80">Provimento 205/2021 CFOAB</p>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Logo Institucional + Canais de Atendimento */}
        <div className="bg-[#FAFAFA] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-2.5 xl:space-y-3 py-3">
            
            {/* Header com Logo no Lado Direito */}
            <div className="flex flex-col items-center text-center w-full">
              <Link
                href="/"
                className="relative block w-full max-w-[440px] xl:max-w-[500px] h-36 xl:h-44 mx-auto cursor-pointer group focus:outline-none mb-1.5"
                aria-label="Ir para a página inicial"
              >
                <Image
                  src="/logo_sem_fundo_usarnomodoclaro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1280px) 500px, 440px"
                />
              </Link>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#D2B474] block mb-0.5 font-bold">
                Acesso Imediato
              </span>
              <h2 className="font-heading text-xl xl:text-2xl font-bold text-[#111111]">
                Canais Oficiais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-600 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com nossa equipe jurídica.
              </p>
            </div>

            {/* Lista de Links */}
            <div className="space-y-1.5">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-2.5 xl:p-3 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#25D366] hover:bg-[#20ba59] text-white border-transparent shadow-sm hover:shadow-md"
                    : "bg-white text-[#111111] border-[#6B7280]/25 hover:border-[#D2B474] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/20 text-white" : "bg-[#F3F4F6] text-[#D2B474]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-xs sm:text-sm font-bold block leading-tight">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block truncate max-w-[260px] ${
                            item.highlight ? "text-white/90" : "text-gray-500"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white" : "text-[#D2B474] group-hover:text-[#111111]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Caixa de Especialidades */}
            <div className="p-2.5 rounded-xl border border-[#6B7280]/25 bg-white/70">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#111111] font-bold mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#D2B474]" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-[#F3F4F6] text-[#111111] border border-[#6B7280]/20 font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-gray-200">
            {OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll + Logo Centralizada - h-[100dvh] overflow-hidden) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 py-3 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FAFAFA] to-[#F3F4F6]">
        {/* Linhas Geométricas Sutis de Fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="-15%" y1="15%" x2="115%" y2="40%" stroke="#D2B474" strokeOpacity="0.12" strokeWidth="1" />
            <line x1="-15%" y1="80%" x2="115%" y2="55%" stroke="#D2B474" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="90%" cy="15%" r="70" fill="none" stroke="#D2B474" strokeWidth="0.75" strokeOpacity="0.15" strokeDasharray="3 3" />
            <circle cx="10%" cy="85%" r="80" fill="none" stroke="#D2B474" strokeWidth="0.75" strokeOpacity="0.15" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Topo Mobile - Logo com o dobro do tamanho centralizada */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-1 pb-1">
          <Link
            href="/"
            className="relative block w-[92vw] max-w-[360px] h-32 sm:h-36 mx-auto cursor-pointer group focus:outline-none"
            aria-label="Ir para a página inicial"
          >
            <Image
              src="/logo_sem_fundo_usarnomodoclaro.png"
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain object-center drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 360px, 320px"
            />
          </Link>

          {/* Linha compacta com as Áreas em pílulas */}
          <div className="flex items-center justify-center gap-1.5 mt-1 flex-wrap">
            <span className="text-[0.625rem] px-2 py-0.5 rounded-full bg-[#111111] text-[#D2B474] font-heading font-medium">
              Direito Trabalhista
            </span>
            <span className="text-[0.625rem] px-2 py-0.5 rounded-full bg-[#111111] text-[#D2B474] font-heading font-medium">
              Direito Previdenciário
            </span>
            <span className="text-[0.625rem] px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#111111] border border-[#6B7280]/20 font-heading font-medium">
              Maringá & Online
            </span>
          </div>
        </div>

        {/* Links Rápidos Mobile - 100% Fit Sem Barra de Rolagem */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-between max-w-md mx-auto py-1 px-0.5">
          {quickLinks.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isInternal = item.href.startsWith("/");
            const buttonClasses = `group flex items-center justify-between px-3.5 py-2 sm:py-2.5 rounded-xl border transition-all duration-200 active:scale-[0.98] ${
              item.highlight
                ? "bg-[#25D366] text-white border-transparent shadow-[0_3px_12px_rgba(37,211,102,0.3)]"
                : "bg-white/95 backdrop-blur-xs hover:bg-white border-[#6B7280]/25 text-[#111111] shadow-2xs hover:border-[#D2B474]"
            }`;

            const content = (
              <>
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/20 text-white" : "bg-[#F3F4F6] border border-[#6B7280]/20 text-[#D2B474]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-xs sm:text-sm leading-tight truncate">{item.title}</h2>
                    <p
                      className={`text-[0.6875rem] font-body truncate ${
                        item.highlight ? "text-white/90" : "text-gray-500"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-current flex-shrink-0 ml-1.5" />
              </>
            );

            return isInternal ? (
              <Link key={item.id} href={item.href} className={buttonClasses}>
                {content}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {content}
              </a>
            );
          })}

          {/* Linha com Redes Sociais no Mobile */}
          <div className="pt-1">
            <a
              href={OFFICE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/95 border border-[#6B7280]/25 text-[#111111] hover:border-[#D2B474] transition-all text-xs font-heading font-semibold shadow-2xs w-full"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#D2B474]" />
              <span>Instagram Oficial ({OFFICE_INFO.instagramHandle})</span>
              <ArrowUpRight className="w-3 h-3 text-[#D2B474]" />
            </a>
          </div>
        </div>

        {/* Rodapé Mobile Compacto (Sem caixa duplicada de especialidades) */}
        <div className="relative z-10 text-center text-[0.625rem] sm:text-[0.6875rem] text-gray-500 font-body pt-1 pb-1">
          <p>{OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}</p>
        </div>
      </div>
    </main>
  );
}