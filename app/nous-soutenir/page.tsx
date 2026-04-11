"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { useScrollReveal } from "@/lib/useScrollReveal";

const SUPPORT_WAYS = [
  {
    icon: "🤝",
    title: "Partenariats Professionnels",
    description:
      "Institutions publiques, organisations privées, universités. Explorons ensemble les opportunités de collaboration en audit, gouvernance et recherche académique.",
    action: "Nous contacter",
    color: "bg-[#0D2B5B]",
    href: "/contact",
  },
  {
    icon: "📚",
    title: "Recherche & Publications",
    description:
      "Collaborations académiques, publications scientifiques, séminaires et conférences. Contribuez à l'avancement des connaissances en gouvernance publique.",
    action: "En savoir plus",
    color: "bg-[#C89B3C]",
    href: "/contact",
  },
  {
    icon: "🏫",
    title: "Formations & Ateliers",
    description:
      "Programmes de formation en audit, contrôle de gestion et gouvernance. Renforcez les capacités de vos équipes avec un expert reconnu.",
    action: "Demander une formation",
    color: "bg-[#F28C28]",
    href: "/contact",
  },
  {
    icon: "💼",
    title: "Expertise & Conseil",
    description:
      "Services d'audit et de conseil en gouvernance. Bénéficiez d'une expérience de 18 ans en amélioration de la gestion publique et privée.",
    action: "Nous contacter",
    color: "bg-[#081D3E]",
    href: "/contact",
  },
];

const AMOUNTS = [1000, 2500, 5000, 10000, 25000, 50000];

export default function NousSoutenirPage() {
  useScrollReveal();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({ nom: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = selectedAmount ?? (customAmount ? parseInt(customAmount, 10) : null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!finalAmount || !donorInfo.nom || !donorInfo.email) return;
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 bg-[#0D2B5B] overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.partnershipHero}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0D2B5B]/80" />
        </div>
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[#C89B3C]/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#C89B3C]" />
            <span className="font-mono text-xs text-[#C89B3C] tracking-[0.3em] uppercase">Collaborations</span>
            <div className="w-8 h-[2px] bg-[#C89B3C]" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-900 text-white leading-tight mb-6">
            Partenariats & Collaborations
          </h1>
          <div className="w-16 h-[3px] bg-[#C89B3C] mx-auto mb-6" />
          <p className="font-body text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Travaillons ensemble pour améliorer la gouvernance, renforcer l&apos;audit publique
            et avancer la recherche scientifique en gestion.
          </p>
        </div>
      </section>

      {/* ── 4 WAYS TO SUPPORT ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center reveal">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C89B3C]">Comment collaborer ?</span>
            <h2 className="font-display text-4xl font-700 text-[#0D2B5B] mt-2 mb-4">
              4 axes de partenariat
            </h2>
            <div className="w-12 h-[2px] bg-[#C89B3C] mx-auto" />
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SUPPORT_WAYS.map((way, i) => (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} group bg-white border border-gray-100 p-7 flex flex-col card-hover`}
              >
                <div className="text-5xl mb-4">{way.icon}</div>
                <h3 className="font-display text-xl font-700 text-[#0D2B5B] mb-3 group-hover:text-[#C89B3C] transition-colors duration-200">
                  {way.title}
                </h3>
                <div className="w-8 h-[2px] bg-[#C89B3C] mb-4" />
                <p className="font-body text-sm text-gray-500 leading-relaxed flex-1 mb-6">
                  {way.description}
                </p>
                <Link
                  href={way.href}
                  className={`${way.color} text-white text-center py-3 font-body text-xs font-600 tracking-widest uppercase transition-all duration-200 hover:opacity-90`}
                >
                  {way.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLABORATION INFO ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C89B3C]">Nos domaines</span>
            <h2 className="font-display text-4xl font-700 text-[#0D2B5B] mt-2 mb-4">
              Nos domaines de collaboration
            </h2>
            <div className="w-12 h-[2px] bg-[#C89B3C] mx-auto mb-8" />

            <div className="space-y-6 font-body text-gray-600 leading-relaxed">
              <p>
                Dr Désiré YASSO met son expertise au service d&apos;institutions et d&apos;organisations
                engagées dans la transparence, la bonne gouvernance et l&apos;efficacité administratif.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-[#C89B3C] pl-6">
                  <h3 className="font-display text-lg font-700 text-[#0D2B5B] mb-2">Audit & Contrôle</h3>
                  <p className="text-sm">Audits comptables, financiers et de performance pour institutions publiques et privées.</p>
                </div>
                <div className="border-l-4 border-[#C89B3C] pl-6">
                  <h3 className="font-display text-lg font-700 text-[#0D2B5B] mb-2">Gouvernance</h3>
                  <p className="text-sm">Conseils en gouvernance d&apos;entreprise et amélioration de la gestion administrative.</p>
                </div>
                <div className="border-l-4 border-[#C89B3C] pl-6">
                  <h3 className="font-display text-lg font-700 text-[#0D2B5B] mb-2">Formation</h3>
                  <p className="text-sm">Programmes de formation pour auditeurs, agents publics et managers d&apos;organisations.</p>
                </div>
                <div className="border-l-4 border-[#C89B3C] pl-6">
                  <h3 className="font-display text-lg font-700 text-[#0D2B5B] mb-2">Recherche</h3>
                  <p className="text-sm">Collaborations académiques et publications scientifiques en sciences de gestion.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                <span>Nous contacter pour collaborer</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL / QUOTE ── */}
      <section className="py-20 px-6 bg-[#081D3E]">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="text-[#C89B3C] text-6xl font-display mb-4">&ldquo;</div>
          <blockquote className="font-display text-2xl md:text-3xl font-700 text-white leading-relaxed italic">
            La transparence est le fondement de la confiance publique. Travaillons ensemble pour des institutions
            plus fortes, plus efficaces et plus responsables envers les citoyens.
          </blockquote>
          <div className="mt-6 font-body text-[#C89B3C] text-sm tracking-wide">
            — Dr Désiré YASSO
          </div>
        </div>
      </section>
    </>
  );
}
