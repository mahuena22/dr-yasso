'use client'
import { useEffect } from 'react'
import { IMAGES } from '@/lib/images'
import { TIMELINE, VALUES } from '@/lib/data'
import { SectionHeader, ValueCard } from '@/components/ui'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function BiographiePage() {
    useScrollReveal()

    return (
        <>
            {/* ── PAGE HERO ── */}
            <section className="relative pt-32 pb-20 px-6 bg-[#0D2B5B] overflow-hidden">
                <div className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={IMAGES.bioPortrait}
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B5B] via-[#0D2B5B]/90 to-[#0D2B5B]/70" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-[#C89B3C]" />
                        <span className="font-mono text-xs text-[#C89B3C] tracking-[0.3em] uppercase">
                            Parcours
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-900 text-white leading-tight mb-4">
                        Qui est Dr Désiré
                        <br />
                        <span className="text-shimmer">YASSO ?</span>
                    </h1>
                    <p className="font-body text-lg text-white/60 max-w-xl">
                        De Cotonou à la gouvernance internationale —
                        l&apos;itinéraire d&apos;un expert au service de la
                        transparence publique.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div className="reveal-left">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/image/img2.jpeg"
                            alt="Dr Désiré YASSO portrait"
                            className="w-full object-cover shadow-2xl"
                        />
                    </div>
                    <div className="reveal-right">
                        <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C89B3C]">
                            Biographie
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-700 text-[#0D2B5B] mt-2 mb-6 leading-tight">
                            Un expert en gouvernance au service public
                        </h2>
                        <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                            <p>
                                Dr Désiré YASSO est né le 16 avril 1983 à
                                Cotonou, Bénin. Depuis ses études, il s&apos;est
                                attaché à maîtriser les mécanismes de la
                                gouvernance publique et de l&apos;audit,
                                domaines qui structurent la transparence et
                                l&apos;efficacité administrative.
                            </p>
                            <p>
                                Titulaire d&apos;un Doctorat en Sciences de
                                Gestion de l&apos;Université Paris 1
                                Panthéon-Sorbonne (2014), spécialisé en
                                gouvernance d&apos;entreprise et audit-contrôle,
                                Dr YASSO apporte 18 années d&apos;expérience
                                cumulée dans l&apos;audit, le contrôle de
                                gestion et la gouvernance. Il est notamment
                                Inspecteur Général du Ministère des Affaires
                                Étrangères du Bénin depuis juillet 2017.
                            </p>
                            <p>
                                Directeur du Groupe Interdisciplinaire de
                                Recherches sur les Organisations (GIRO Bénin),
                                chercheur affilié à Paris 1 Panthéon-Sorbonne et
                                auteur de plusieurs publications scientifiques
                                sur la gouvernance publique, la corruption et
                                l&apos;efficacité administrative en Afrique, il
                                combine engagement académique et expertise
                                pratique au gouvernement.
                            </p>
                            <p>
                                Spécialiste en gouvernance d&apos;entreprise,
                                audit comptable-financier, audit de performance,
                                audit social, contrôle de gestion publique
                                (audit, vérification, inspection) et gestion des
                                ressources humaines publiques, il incarne une
                                nouvelle génération de leaders africains au
                                service de l&apos;intégrité publique.
                            </p>
                        </div>

                        {/* Responsabilités Actuelles */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {[
                                {
                                    title: 'Inspecteur Général',
                                    sub: 'MAE, depuis 14 juillet 2017',
                                },
                                {
                                    title: 'Docteur en Sciences de Gestion',
                                    sub: 'Paris 1 Panthéon-Sorbonne, 2014',
                                },
                                {
                                    title: 'Directeur du GIRO Bénin',
                                    sub: 'Depuis décembre 2015',
                                },
                                {
                                    title: 'Conseiller Communal Kouarfa',
                                    sub: 'Atakora, 2026-2033',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="border-l-2 border-[#C89B3C] pl-4 py-2">
                                    <div className="font-body font-600 text-[#0D2B5B] text-sm">
                                        {item.title}
                                    </div>
                                    <div className="font-body text-xs text-gray-400 mt-0.5">
                                        {item.sub}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIMELINE ── */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center reveal">
                        <SectionHeader
                            label="Chronologie"
                            title="Son parcours, étape par étape"
                            subtitle="De l'enfance à Natitingou jusqu'à la scène nationale — chaque étape a forgé l'homme qu'il est aujourd'hui."
                            centered
                        />
                    </div>
                    <div className="mt-12 relative">
                        {/* Central vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C89B3C] via-[#C89B3C]/50 to-transparent hidden md:block" />

                        <div className="space-y-8">
                            {TIMELINE.map((item, i) => (
                                <div
                                    key={i}
                                    className={`reveal flex gap-8 delay-${Math.min(i * 100, 500)}`}>
                                    {/* Year marker */}
                                    <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                                        <div className="w-16 h-16 bg-[#0D2B5B] border-2 border-[#C89B3C] flex items-center justify-center z-10">
                                            <span className="font-mono text-[#C89B3C] text-xs font-500 tracking-wide">
                                                {item.year}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-white p-6 shadow-sm border border-gray-100 hover:border-[#C89B3C]/30 hover:shadow-md transition-all duration-300">
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <div>
                                                <span className="inline-block md:hidden font-mono text-[#C89B3C] text-xs tracking-wider mb-1">
                                                    {item.year}
                                                </span>
                                                <h3 className="font-display text-xl font-700 text-[#0D2B5B]">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            {item.location && (
                                                <span className="font-mono text-xs text-gray-400 tracking-wide bg-gray-50 px-3 py-1 border border-gray-200">
                                                    📍 {item.location}
                                                </span>
                                            )}
                                        </div>
                                        <p className="font-body text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VALEURS ── */}
            <section className="py-24 px-6 bg-[#081D3E]">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal">
                        <SectionHeader
                            label="Ses convictions"
                            title="Les valeurs qui le guident"
                            light
                        />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {VALUES.map((v, i) => (
                            <ValueCard key={i} {...v} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VISION ── */}
            <section className="py-20 px-6 bg-[#C89B3C]">
                <div className="max-w-4xl mx-auto text-center reveal">
                    <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">
                        Sa vision
                    </span>
                    <blockquote className="font-display text-3xl md:text-4xl font-700 text-white leading-tight italic">
                        « La gouvernance d&apos;entreprise et la transparence de
                        la gestion publique ne sont pas des options — ce sont
                        des obligations envers les citoyens. Mon engagement est
                        d&apos;assurer que chaque franc public est bien utilisé
                        et que l&apos;audit rigoureux guide les décisions
                        stratégiques. »
                    </blockquote>
                    <div className="mt-6 font-body text-white/70 text-sm tracking-wide">
                        — Dr Désiré YASSO
                    </div>
                </div>
            </section>
        </>
    )
}
