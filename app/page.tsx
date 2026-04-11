'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'
import HeroSection from '@/components/sections/HeroSection'
import {
    SectionHeader,
    StatCard,
    ArticleCard,
    ValueCard,
} from '@/components/ui'
import { STATS, VALUES, ARTICLES } from '@/lib/data'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function HomePage() {
    useScrollReveal()

    return (
        <>
            {/* ── 1. HERO ── */}
            <HeroSection />

            {/* ── 2. PRÉSENTATION ── */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="relative reveal-left">
                        <div className="aspect-[4/5] overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={IMAGES.homePresentation}
                                alt="Dr Désiré YASSO"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative gold frame */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C89B3C] -z-10" />
                        {/* Badge */}
                        <div className="absolute bottom-6 left-6 bg-[#0D2B5B] text-white px-5 py-4">
                            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C89B3C] mb-1">
                                Inspecteur Général
                            </div>
                            <div className="font-display font-700 text-lg">
                                Dr Désiré YASSO
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="reveal-right">
                        <div className="w-16 h-[3px] bg-[#C89B3C] mb-6" />
                        <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C89B3C]">
                            Qui est-il ?
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-700 text-[#0D2B5B] leading-tight mt-3 mb-6">
                            Expert en gouvernance
                            <br />
                            <span className="text-[#C89B3C]">
                                au service du Bénin
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 font-body text-base leading-relaxed">
                            <p>
                                Dr Désiré YASSO est Inspecteur Général du
                                Ministère des Affaires Étrangères et de la
                                Coopération du Bénin depuis juillet 2017.
                                Titulaire d&apos;un Doctorat en Sciences de
                                Gestion de l&apos;Université Paris 1
                                Panthéon-Sorbonne, il apporte 18 ans
                                d&apos;expérience en audit, contrôle de gestion
                                et gouvernance d&apos;entreprise.
                            </p>
                            <p>
                                Fort d&apos;une expertise reconnue dans le
                                secteur public et privé, il supervise
                                l&apos;audit de la gestion administrative,
                                comptable et financière du Ministère, y compris
                                toutes les Ambassades et Consulats généraux du
                                Bénin à l&apos;étranger.
                            </p>
                            <p>
                                Directeur du Groupe Interdisciplinaire de
                                Recherches sur les Organisations (GIRO Bénin),
                                il s&apos;engage aussi dans la recherche
                                scientifique et la formation des futurs leaders
                                africains en gouvernance et gestion publique.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/qui-est-dr-yasso"
                                className="btn-primary">
                                <span>Découvrir sa biographie</span>
                            </Link>
                            <Link href="/contact" className="btn-outline">
                                <span>Le contacter</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. STATS ── */}
            <section className="py-20 px-6 bg-[#0D2B5B] relative overflow-hidden noise-overlay">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23C89B3C fill-opacity=0.04%3E%3Cpath d=M0 0h40v40H0z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-12 reveal">
                        <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C89B3C]">
                            En chiffres
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-700 text-white mt-2">
                            Des actions concrètes, des résultats mesurables
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        {STATS.map((stat, i) => (
                            <div
                                key={i}
                                className={`reveal delay-${(i + 1) * 100}`}>
                                <StatCard {...stat} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. DOMAINES D'EXPERTISE ── */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center reveal">
                        <SectionHeader
                            label="Domaines d'expertise"
                            title="Audit & Gouvernance"
                            subtitle="18 ans d'expérience au service du secteur public et privé, garantissant la transparence, l'intégrité et la performance."
                            centered
                        />
                    </div>
                    <div className="mt-10 grid md:grid-cols-2 gap-6">
                        {/* Audit & Contrôle */}
                        <div className="relative overflow-hidden group reveal-left">
                            <div className="aspect-[16/10] overflow-hidden bg-[#0D2B5B]">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-6xl">📊</div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B5B]/90 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="font-display text-3xl font-700 text-white mb-2">
                                    Audit & Contrôle
                                </h3>
                                <p className="font-body text-sm text-white/70">
                                    Audit comptable, financier et de performance.
                                    Auditeur de 30+ grandes entreprises et organismes
                                    gouvernementaux. Expert certifié en contrôle de
                                    gestion.
                                </p>
                            </div>
                        </div>

                        {/* Gouvernance & Diplomatie */}
                        <div className="relative overflow-hidden group reveal-right">
                            <div className="aspect-[16/10] overflow-hidden bg-[#0D2B5B]">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-6xl">🏛️</div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B5B]/90 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="font-display text-3xl font-700 text-white mb-2">
                                    Gouvernance
                                </h3>
                                <p className="font-body text-sm text-white/70">
                                    Expert en gouvernance d'entreprise et gestion
                                    publique. Inspecteur Général au Ministère des
                                    Affaires Étrangères depuis 2017. Superviseur de 9
                                    Ambassades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. VALEURS ── */}
            <section className="py-24 px-6 bg-[#081D3E]">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal">
                        <SectionHeader
                            label="Ses engagements"
                            title="Ce en quoi il croit"
                            subtitle="Six piliers fondamentaux qui guident chaque action, chaque décision et chaque combat de Dr Désiré YASSO."
                            light
                        />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {VALUES.map((v, i) => (
                            <ValueCard key={i} {...v} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. ACTUALITÉS ── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
                        <SectionHeader
                            label="Sur le terrain"
                            title="Dernières actualités"
                        />
                        <Link
                            href="/actualites"
                            className="btn-outline mb-12 self-start md:self-auto">
                            <span>Toutes les actualités</span>
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ARTICLES.slice(0, 3).map((article, i) => (
                            <div
                                key={article.id}
                                className={`reveal delay-${(i + 1) * 100}`}>
                                <ArticleCard {...article} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. APPEL À L'ACTION ── */}
            <section className="py-24 px-6 bg-[#C89B3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0D2B5B] rounded-full translate-x-1/3 translate-y-1/3" />
                </div>
                <div className="relative max-w-4xl mx-auto text-center reveal">
                    <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">
                        Collaborer & Progresser
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl font-900 text-white leading-tight mb-6">
                        Transparence & Excellence
                    </h2>
                    <div className="w-16 h-[3px] bg-white/50 mx-auto mb-6" />
                    <p className="font-body text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Dr Désiré YASSO met son expertise au service de la bonne
                        gouvernance et de la transparence dans la gestion publique.
                        Pour plus d&apos;informations ou pour collaborer, contactez-le.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#0D2B5B] text-white font-body font-600 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#081D3E] hover:shadow-2xl group">
                            <span>Nous Contacter</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                        <Link
                            href="/qui-est-dr-yasso"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-body font-600 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#C89B3C]">
                            <span>Découvrir son parcours</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
