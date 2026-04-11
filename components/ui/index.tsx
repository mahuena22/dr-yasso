import Link from 'next/link'
import { ReactNode } from 'react'

// ── SectionHeader ────────────────────────────────────────────────
interface SectionHeaderProps {
    label?: string
    title: string
    subtitle?: string
    light?: boolean
    centered?: boolean
}

export function SectionHeader({
    label,
    title,
    subtitle,
    light,
    centered,
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {label && (
                <span
                    className={`font-mono text-xs tracking-[0.25em] uppercase ${light ? 'text-[#E2B96A]' : 'text-[#C89B3C]'}`}>
                    {label}
                </span>
            )}
            <h2
                className={`font-display text-4xl md:text-5xl font-700 leading-tight mt-2 ${
                    light ? 'text-white' : 'text-[#0D2B5B]'
                }`}>
                {title}
            </h2>
            <div
                className={`w-16 h-[3px] bg-[#C89B3C] mt-4 ${centered ? 'mx-auto' : ''}`}
            />
            {subtitle && (
                <p
                    className={`mt-5 font-body text-lg leading-relaxed max-w-2xl ${
                        light ? 'text-white/70' : 'text-gray-500'
                    } ${centered ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </div>
    )
}

// ── GoldButton ────────────────────────────────────────────────────
interface GoldButtonProps {
    href?: string
    onClick?: () => void
    children: ReactNode
    variant?: 'filled' | 'outline'
    className?: string
}

export function GoldButton({
    href,
    onClick,
    children,
    variant = 'filled',
    className = '',
}: GoldButtonProps) {
    const cls = `${variant === 'filled' ? 'btn-primary' : 'btn-outline'} ${className}`

    if (href) {
        return (
            <Link href={href} className={cls}>
                <span>{children}</span>
            </Link>
        )
    }
    return (
        <button onClick={onClick} className={cls}>
            <span>{children}</span>
        </button>
    )
}

// ── StatCard ──────────────────────────────────────────────────────
interface StatCardProps {
    number: string
    label: string
    icon: string
}

export function StatCard({ number, label, icon }: StatCardProps) {
    return (
        <div className="text-center group">
            <div className="text-3xl mb-2">{icon}</div>
            <div className="font-display text-4xl md:text-5xl font-900 text-[#C89B3C] leading-none">
                {number}
            </div>
            <div className="mt-2 font-body text-sm text-white/60 tracking-wide">
                {label}
            </div>
        </div>
    )
}

// ── ArticleCard ───────────────────────────────────────────────────
interface ArticleCardProps {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: number
    image: string
}

export function ArticleCard({
    slug,
    title,
    excerpt,
    category,
    date,
    readTime,
    image,
}: ArticleCardProps) {
    return (
        <Link
            href={`/actualites/${slug}`}
            className="group block bg-white border border-gray-100 card-hover overflow-hidden">
            <div className="relative overflow-hidden aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B5B]/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#C89B3C] text-white font-mono text-xs tracking-wider uppercase">
                    {category}
                </span>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-3 text-gray-400 font-mono text-xs mb-3">
                    <span>{date}</span>
                    <span>·</span>
                    <span>{readTime} min de lecture</span>
                </div>
                <h3 className="font-display text-lg font-700 text-[#0D2B5B] leading-snug mb-3 group-hover:text-[#C89B3C] transition-colors duration-200">
                    {title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[#C89B3C] font-body text-sm font-600 tracking-wide">
                    <span>Lire l&apos;article</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </div>
        </Link>
    )
}

// ── ValueCard ─────────────────────────────────────────────────────
interface ValueCardProps {
    icon: string
    title: string
    description: string
    index?: number
}

export function ValueCard({
    icon,
    title,
    description,
    index = 0,
}: ValueCardProps) {
    return (
        <div
            className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group reveal"
            style={{ transitionDelay: `${index * 80}ms` }}>
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="font-display text-xl font-700 text-white mb-3 group-hover:text-[#C89B3C] transition-colors duration-200">
                {title}
            </h3>
            <div className="w-8 h-[2px] bg-[#C89B3C] mb-4" />
            <p className="font-body text-sm text-white/60 leading-relaxed">
                {description}
            </p>
        </div>
    )
}
