'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

export default function HeroSection() {
    const [loaded, setLoaded] = useState(false)
    const [parallax, setParallax] = useState(0)

    useEffect(() => {
        setLoaded(true)
        const onScroll = () => setParallax(window.scrollY * 0.35)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#081D3E]">
            {/* Background image with parallax */}
            <div
                className="absolute inset-0 will-change-transform"
                style={{ transform: `translateY(${parallax}px)` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={IMAGES.heroBackground}
                    alt="Atacora landscape"
                    className="w-full h-full object-cover scale-110"
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#081D3E]/95 via-[#0D2B5B]/80 to-[#0D2B5B]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081D3E]/70 via-transparent to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C89B3C]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-[#6EC6FF]/5 blur-3xl pointer-events-none" />

            {/* Gold vertical accent line */}
            <div className="absolute left-[10%] top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-[#C89B3C]/60 to-transparent hidden xl:block" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
                <div className="max-w-3xl">
                    {/* Label */}
                    <div
                        className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                            loaded
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: '0.1s' }}>
                        <div className="w-8 h-[2px] bg-[#C89B3C]" />
                        <span className="font-mono text-xs text-[#C89B3C] tracking-[0.3em] uppercase"></span>
                    </div>

                    {/* Main title */}
                    <h1
                        className={`font-display text-5xl md:text-7xl font-900 text-white leading-[1.05] mb-6 transition-all duration-800 ${
                            loaded
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '0.25s' }}>
                        Désiré
                        <span className="text-shimmer"> YASSO</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`font-body text-xl md:text-2xl text-white/70 leading-relaxed mb-4 max-w-xl transition-all duration-700 ${
                            loaded
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.4s' }}>
                        Docteur en science de gestion-Expert en gouvernance et
                        audit .
                    </p>
                    <p
                        className={`font-body text-base text-white/50 leading-relaxed mb-10 max-w-lg transition-all duration-700 ${
                            loaded
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.5s' }}>
                        plusieurs années d&apos;expérience en audit, gouvernance
                        d&apos;entreprise et contrôle de gestion publique.
                        Doctorat en Science de Gestion. Engagé pour le
                        developpement culturel et sociaux économique du Bénin
                    </p>

                    {/* CTAs */}
                    <div
                        className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                            loaded
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.65s' }}>
                        <Link
                            href="/qui-sommes-nous"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C89B3C] text-white font-body font-600 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#9E7B2E] hover:shadow-2xl hover:shadow-[#C89B3C]/30 group">
                            <span>Découvrir son parcours</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                        <Link
                            href="/nous-soutenir"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-body font-600 text-sm tracking-widest uppercase transition-all duration-300 hover:border-[#C89B3C] hover:text-[#C89B3C]">
                            <span>Partenariats</span>
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
                        loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: '1s' }}>
                    <span className="font-mono text-[10px] text-white/30 tracking-[0.3em] uppercase">
                        Défiler
                    </span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#C89B3C]/60 to-transparent animate-pulse" />
                </div>
            </div>

            {/* Bottom info band */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#C89B3C]/90 backdrop-blur-sm py-3 px-6 hidden md:block">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="text-white/80 font-mono text-xs tracking-[0.2em] uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            Ministère des Affaires Étrangères
                        </div>
                        <div className="w-px h-4 bg-white/30" />
                        <div className="text-white/80 font-mono text-xs tracking-[0.2em] uppercase">
                            Cotonou, Bénin
                        </div>
                    </div>
                    <div className="text-white font-display italic text-sm">
                        « Transparence et excellence administrative. »
                    </div>
                </div>
            </div>
        </section>
    )
}
