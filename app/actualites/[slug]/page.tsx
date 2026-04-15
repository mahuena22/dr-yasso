import { ARTICLES } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArticleCard } from '@/components/ui'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return ARTICLES.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = ARTICLES.find(a => a.slug === slug)
    if (!article) return {}
    return {
        title: `${article.title} — Dr Désiré YASSO`,
        description: article.excerpt,
    }
}

export default async function ArticleDetailPage({ params }: Props) {
    const { slug } = await params
    const article = ARTICLES.find(a => a.slug === slug)
    if (!article) notFound()

    const related = ARTICLES.filter(
        a => a.id !== article.id && a.category === article.category
    ).slice(0, 3)

    const others = ARTICLES.filter(a => a.id !== article.id).slice(
        0,
        3 - related.length
    )
    const suggestions = [...related, ...others].slice(0, 3)

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative pt-28 pb-0 overflow-hidden bg-[#0D2B5B]">
                <div className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0D2B5B]/90 via-[#0D2B5B]/80 to-[#0D2B5B]" />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 py-16">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 font-mono text-xs text-white/40 mb-6">
                        <Link
                            href="/"
                            className="hover:text-[#C89B3C] transition-colors">
                            Accueil
                        </Link>
                        <span>/</span>
                        <Link
                            href="/actualites"
                            className="hover:text-[#C89B3C] transition-colors">
                            Actualités
                        </Link>
                        <span>/</span>
                        <span className="text-white/60 truncate max-w-[200px]">
                            {article.title}
                        </span>
                    </nav>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#C89B3C] text-white font-mono text-xs tracking-wider uppercase">
                            {article.category}
                        </span>
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl font-900 text-white leading-tight mb-5">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-4 text-white/40 font-mono text-xs">
                        <span>📅 {article.date}</span>
                        <span>·</span>
                        <span>⏱ {article.readTime} min de lecture</span>
                        <span>·</span>
                        <span>✍️ Dr Désiré YASSO</span>
                    </div>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
                    {/* Article body */}
                    <article className="lg:col-span-2 prose prose-lg max-w-none">
                        {/* Lead image */}
                        <div className="mb-8 overflow-hidden shadow-xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full object-cover aspect-video"
                            />
                        </div>

                        {/* Lead paragraph */}
                        <p className="font-body text-xl text-[#0D2B5B] leading-relaxed font-500 mb-6 border-l-4 border-[#C89B3C] pl-5">
                            {article.excerpt}
                        </p>

                        {/* Generated article content */}
                        <div className="space-y-5 font-body text-gray-700 leading-relaxed text-base">
                            <p>
                                Cette initiative marque une étape importante
                                dans l&apos;engagement de Dr Désiré YASSO pour
                                le développement de la 4e circonscription
                                électorale. Depuis plusieurs mois, son équipe
                                travaille en étroite collaboration avec les
                                autorités locales, les organisations de la
                                société civile et les partenaires au
                                développement pour concrétiser ce projet.
                            </p>
                            <h2 className="font-display text-2xl font-700 text-[#0D2B5B] mt-8 mb-3">
                                Un impact direct sur les populations
                            </h2>
                            <p>
                                Les bénéficiaires de cette action sont au cœur
                                des préoccupations de Dr YASSO. Pour lui, chaque
                                projet doit répondre à un besoin réel, exprimé
                                par les communautés elles-mêmes. C&apos;est
                                pourquoi une consultation préalable a été
                                organisée dans les villages concernés,
                                permettant de recueillir les attentes et
                                d&apos;affiner les modalités de mise en œuvre.
                            </p>
                            <p>
                                « Nous ne faisons pas les choses pour les gens,
                                nous les faisons avec les gens », a-t-il rappelé
                                lors de la cérémonie. Cette philosophie
                                participative est au cœur de sa démarche
                                politique et sociale.
                            </p>
                            <h2 className="font-display text-2xl font-700 text-[#0D2B5B] mt-8 mb-3">
                                Des perspectives prometteuses
                            </h2>
                            <p>
                                Au-delà de l&apos;impact immédiat, cette
                                initiative s&apos;inscrit dans une vision à long
                                terme pour la 4e circonscription. Dr YASSO a
                                présenté une feuille de route ambitieuse
                                prévoyant plusieurs phases complémentaires, dont
                                la formation des bénéficiaires, le suivi
                                régulier des résultats et l&apos;extension
                                progressive aux zones encore non couvertes.
                            </p>
                            <p>
                                Les partenaires impliqués ont salué la qualité
                                de l&apos;organisation et l&apos;engagement
                                personnel de Dr YASSO, qui n&apos;a pas ménagé
                                ses efforts pour mobiliser les ressources
                                nécessaires à la réalisation de ce projet.
                            </p>
                            <div className="my-8 bg-[#0D2B5B] p-6">
                                <p className="font-display text-xl text-white italic leading-relaxed">
                                    « Chaque action que nous posons
                                    aujourd&apos;hui est une graine plantée pour
                                    l&apos;avenir de nos enfants et de nos
                                    petits-enfants. »
                                </p>
                                <p className="mt-3 font-mono text-[#C89B3C] text-xs tracking-wider">
                                    — Dr Désiré YASSO
                                </p>
                            </div>
                            <h2 className="font-display text-2xl font-700 text-[#0D2B5B] mt-8 mb-3">
                                Prochaines étapes
                            </h2>
                            <p>
                                Suite à cette réussite, de nouvelles actions
                                sont d&apos;ores et déjà programmées. Dr YASSO a
                                annoncé qu&apos;une deuxième phase sera lancée
                                prochainement, avec des ambitions encore plus
                                larges. Les habitants de Natitingou et
                                Toucountouna peuvent se réjouir : leur champion
                                n&apos;a pas l&apos;intention de s&apos;arrêter
                                là.
                            </p>
                            <p>
                                Pour rester informé de toutes les prochaines
                                initiatives, suivez Dr Désiré YASSO sur les
                                réseaux sociaux et abonnez-vous aux
                                notifications de ce site.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-10 flex flex-wrap gap-2">
                            {[
                                article.category,
                                'Atacora',
                                'Natitingou',
                                'Développement',
                            ].map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 text-gray-500 font-mono text-xs tracking-wide">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Share */}
                        <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
                            <span className="font-mono text-xs text-gray-400 tracking-wider uppercase">
                                Partager :
                            </span>
                            {[
                                'Facebook',
                                'Twitter / X',
                                'WhatsApp',
                                'Copier le lien',
                            ].map(s => (
                                <button
                                    key={s}
                                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-500 font-mono text-xs hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all duration-200">
                                    {s}
                                </button>
                            ))}
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-6">
                        {/* Author card */}
                        <div className="bg-[#0D2B5B] p-6">
                            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C89B3C] mb-4">
                                À propos de l&apos;auteur
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#C89B3C] flex items-center justify-center">
                                    <span className="font-display font-bold text-white text-lg">
                                        DY
                                    </span>
                                </div>
                                <div>
                                    <div className="font-display font-700 text-white text-sm">
                                        Dr Désiré YASSO
                                    </div>
                                    <div className="font-mono text-[10px] text-white/50 mt-0.5">
                                        Docteur en Droit Public
                                    </div>
                                </div>
                            </div>
                            <p className="font-body text-xs text-white/60 leading-relaxed mb-4">
                                Enseignant-chercheur, conseiller municipal,
                                candidat à l&apos;Assemblée Nationale pour la 4e
                                circonscription de l&apos;Atacora.
                            </p>
                            <Link
                                href="/qui-sommes-nous"
                                className="block text-center py-2.5 border border-[#C89B3C] text-[#C89B3C] font-mono text-xs tracking-wider uppercase hover:bg-[#C89B3C] hover:text-white transition-all duration-200">
                                Voir sa biographie
                            </Link>
                        </div>

                        {/* Categories */}
                        <div className="bg-gray-50 border border-gray-100 p-5">
                            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C89B3C] mb-4">
                                Catégories
                            </div>
                            {[
                                'Santé',
                                'Éducation',
                                'Jeunesse',
                                'Infrastructures',
                                'International',
                                'Femmes & Développement',
                            ].map(cat => (
                                <Link
                                    key={cat}
                                    href={`/actualites`}
                                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 text-gray-500 font-body text-sm hover:text-[#C89B3C] transition-colors group">
                                    <span className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {cat}
                                    </span>
                                    <span className="font-mono text-xs text-gray-300">
                                        →
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div className="bg-[#C89B3C] p-6">
                            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/70 mb-3">
                                Restez informé
                            </div>
                            <h4 className="font-display text-lg font-700 text-white mb-3">
                                Newsletter de la 4e circonscription
                            </h4>
                            <p className="font-body text-xs text-white/80 mb-4 leading-relaxed">
                                Recevez les actualités directement dans votre
                                boîte mail.
                            </p>
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full px-3 py-2.5 bg-white/20 border border-white/40 text-white placeholder-white/60 font-body text-sm focus:outline-none focus:border-white mb-3"
                            />
                            <button className="w-full py-2.5 bg-[#0D2B5B] text-white font-mono text-xs tracking-widest uppercase hover:bg-[#081D3E] transition-colors">
                                S&apos;abonner
                            </button>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ── RELATED ARTICLES ── */}
            {suggestions.length > 0 && (
                <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C89B3C]">
                                    Continuer la lecture
                                </span>
                                <h2 className="font-display text-3xl font-700 text-[#0D2B5B] mt-1">
                                    Autres articles
                                </h2>
                            </div>
                            <Link
                                href="/actualites"
                                className="hidden sm:flex items-center gap-2 text-[#C89B3C] font-body text-sm font-600 hover:gap-3 transition-all">
                                Toutes les actualités <span>→</span>
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {suggestions.map(a => (
                                <ArticleCard key={a.id} {...a} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
