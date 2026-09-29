"use client";

import { useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { Phone, MapPin, Clock, ArrowUpRight, ShieldCheck, FileText, Calculator, Video } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const hubColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Animação de entrada dos cards de contato
      if (cardsColRef.current) {
        const contactCards = cardsColRef.current.querySelectorAll(".contact-info-card");
        if (contactCards.length > 0) {
          gsap.fromTo(
            contactCards,
            { x: -35, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsColRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Animação de revelação suave do Hub Digital
      if (hubColRef.current) {
        gsap.fromTo(
          hubColRef.current,
          { scale: 0.94, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: hubColRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                07 / Canais Oficiais de Atendimento
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Contato & Consultoria
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atendimento presencial sob agendamento em Maringá/PR e assessoria jurídica digital ágil para clientes em todo o Paraná, Brasil e exterior.
          </p>
        </div>

        {/* Grid: Informações à Esquerda + Hub Visual de Consultoria à Direita */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coluna 1: Informações e Ações (5 colunas) */}
          <div ref={cardsColRef} className="lg:col-span-5 flex flex-col justify-between space-y-4 will-change-transform">
            <div className="space-y-3.5">
              {/* Card WhatsApp & Telefone */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/40 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs font-bold">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    WhatsApp & Telefone
                  </span>
                  <a
                    href={OFFICE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-lg font-bold text-[var(--text-main)] hover:underline"
                  >
                    {OFFICE_INFO.phone}
                  </a>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento ágil para esclarecimento inicial de dúvidas e orientações preliminares.
                  </p>
                </div>
              </div>

              {/* Card Cidade-Base / Atendimento */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Sede & Abrangência
                  </span>
                  <p className="font-body text-sm font-semibold text-[var(--text-main)]">
                    Maringá - Paraná
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento presencial sob agendamento em Maringá/PR e consultoria digital completa para todo o Brasil.
                  </p>
                </div>
              </div>

              {/* Card Horário de Funcionamento */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Horário de Atendimento
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-semibold">
                    {OFFICE_INFO.schedule.weekdays}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    Sábado: {OFFICE_INFO.schedule.saturday} • Domingo: {OFFICE_INFO.schedule.sunday}
                  </p>
                </div>
              </div>

              {/* Card Instagram Oficial */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Instagram Oficial
                  </span>
                  <a
                    href={OFFICE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5 mt-1"
                  >
                    <span>{OFFICE_INFO.instagramHandle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                  </a>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Acompanhe atualizações sobre direitos trabalhistas, dicas do INSS e informativos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.35)] text-sm sm:text-base cursor-pointer hover-lift transition-all flex items-center justify-center font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Falar com um advogado no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Hub Visual de Consultoria Online Humanizada (7 colunas - Padrão C15 / Provimento 205 OAB) */}
          <div ref={hubColRef} className="lg:col-span-7 flex flex-col justify-between will-change-transform">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-lg flex flex-col justify-between relative overflow-hidden">
              {/* Linha decorativa de topo */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D2B474] via-[#E5E7EB] to-[#D2B474]" />

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]/20 mb-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-heading font-semibold text-[var(--accent)]">
                    <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                    <span>Hub de Consultoria Segura & Humanizada</span>
                  </div>
                  <span className="text-[0.6875rem] font-heading uppercase tracking-wider text-[var(--text-muted)] hidden sm:inline">
                    Maringá/PR • Todo o Brasil
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-3 leading-tight">
                  Como Funciona Nosso Atendimento
                </h3>
                <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-8">
                  Combinamos o acolhimento do atendimento presencial em Maringá/PR com a rapidez da consultoria digital, oferecendo suporte jurídico de alto nível onde você estiver.
                </p>

                {/* As 3 Etapas Estruturadas */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/30">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 shadow-2xs">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm text-[var(--text-main)] block mb-1">
                        1. Envio Seguro de Documentos
                      </span>
                      <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                        Envie fotos ou PDFs da carteira de trabalho, extrato CNIS, holerites ou laudos médicos diretamente pelo WhatsApp com sigilo absoluto.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/30">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 shadow-2xs">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm text-[var(--text-main)] block mb-1">
                        2. Análise Técnica e Cálculos de Precisão
                      </span>
                      <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                        Auditamos detalhadamente as verbas trabalhistas não pagas ou o melhor momento para o benefício do INSS com base na legislação atual.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/30">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 shadow-2xs">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm text-[var(--text-main)] block mb-1">
                        3. Consulta Estratégica & Acompanhamento
                      </span>
                      <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                        Conversa direta com a Dra. Nuria Bedin por WhatsApp, chamada de vídeo ou presencialmente em Maringá/PR, com clareza em todas as etapas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão de Ação do Hub */}
              <div className="pt-8 mt-8 border-t border-[var(--border-subtle)]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[var(--text-muted)] font-body text-center sm:text-left">
                  Atendimento em estrita conformidade com o Provimento 205/2021 da OAB
                </span>
                <a
                  href={OFFICE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#D2B474] hover:bg-[#C2A260] text-[#111111] font-bold text-xs sm:text-sm py-3 px-6 gap-2 shadow-sm hover-lift transition-all cursor-pointer flex items-center justify-center flex-shrink-0 w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                  <span>Iniciar Atendimento com Advogado</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}