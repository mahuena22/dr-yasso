'use client'
import { useState, useEffect } from 'react'
import { IMAGES } from '@/lib/images'
import { ARTICLES, CATEGORIES } from '@/lib/data'
import { ArticleCard, SectionHeader } from '@/components/ui'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function ActualitesPage() {
    useScrollReveal()
    const [activeCategory, setActiveCategory] = useState('Tous')
    const [currentPage, setCurrentPage] = useState(1)
    const ARTICLES_PER_PAGE = 6

    const filtered =
        activeCategory === 'Tous'
            ? ARTICLES
            : ARTICLES.filter(a => a.category === activeCategory)

    const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE)
    const paginated = filtered.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    )

    const featured = ARTICLES.filter(a => a.featured).slice(0, 2)

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative pt-40 pb-24 px-6 bg-[#0D2B5B] overflow-hidden">
                <div className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={IMAGES.newsHero}
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-[#0D2B5B]/85" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-[#C89B3C]" />
                        <span className="font-mono text-xs text-[#C89B3C] tracking-[0.3em] uppercase">
                            Sur le terrain
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-900 text-white leading-tight">
                        Actualités
                    </h1>
                    <p className="font-body text-lg text-white/60 mt-4 max-w-xl">
                        Suivez toutes les actions, initiatives et événements de
                        Dr Désiré YASSO dans la 4e circonscription.
                    </p>
                </div>
            </section>

            {/* ── FEATURED ── */}
            <section className="py-16 px-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal">
                        <SectionHeader
                            label="À la une"
                            title="Articles en vedette"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {featured.map((article, i) => (
                            <div
                                key={article.id}
                                className={`reveal delay-${(i + 1) * 150}`}>
                                <ArticleCard {...article} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ALL ARTICLES ── */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mb-10 reveal">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat)
                                    setCurrentPage(1)
                                }}
                                className={`px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                                    activeCategory === cat
                                        ? 'bg-[#0D2B5B] text-white'
                                        : 'bg-white text-gray-500 border border-gray-200 hover:border-[#C89B3C] hover:text-[#C89B3C]'
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Results count */}
                    <p className="font-mono text-xs text-gray-400 tracking-wide mb-6">
                        {filtered.length} article
                        {filtered.length > 1 ? 's' : ''} trouvé
                        {filtered.length > 1 ? 's' : ''}
                    </p>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginated.map((article, i) => (
                            <div
                                key={article.id}
                                className={`reveal delay-${(i % 3) * 100}`}>
                                <ArticleCard {...article} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center gap-2 mt-12">
                            <button
                                onClick={() =>
                                    setCurrentPage(p => Math.max(1, p - 1))
                                }
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-white border border-gray-200 text-gray-500 font-mono text-xs disabled:opacity-30 hover:border-[#C89B3C] transition-colors">
                                ← Précédent
                            </button>
                            {Array.from(
                                { length: totalPages },
                                (_, i) => i + 1
                            ).map(p => (
                                <button
                                    key={p}
                                    onClick={() => setCurrentPage(p)}
                                    className={`w-10 h-10 font-mono text-xs transition-colors ${
                                        p === currentPage
                                            ? 'bg-[#0D2B5B] text-white'
                                            : 'bg-white border border-gray-200 text-gray-500 hover:border-[#C89B3C]'
                                    }`}>
                                    {p}
                                </button>
                            ))}
                            <button
                                onClick={() =>
                                    setCurrentPage(p =>
                                        Math.min(totalPages, p + 1)
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-white border border-gray-200 text-gray-500 font-mono text-xs disabled:opacity-30 hover:border-[#C89B3C] transition-colors">
                                Suivant →
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
