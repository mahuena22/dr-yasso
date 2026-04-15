import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/data'

const QUICK_LINKS = [
    { href: '/', label: 'Accueil' },
    { href: '/qui-sommes-nous', label: 'Qui sommes-nous ?' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/contact', label: 'Contact' },
    { href: '/nous-soutenir', label: 'Nous soutenir' },
]

const SOCIAL = [
    { label: 'Facebook', icon: 'f', href: SITE_CONFIG.social.facebook },
    { label: 'Twitter / X', icon: '𝕏', href: SITE_CONFIG.social.twitter },
    { label: 'Instagram', icon: '◉', href: SITE_CONFIG.social.instagram },
    { label: 'YouTube', icon: '▶', href: SITE_CONFIG.social.youtube },
]

export default function Footer() {
    return (
        <footer className="bg-[#081D3E] text-white">
            {/* Top CTA band */}
            <div className="bg-[#C89B3C] py-5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-display text-lg font-600 text-white text-center sm:text-left italic">
                        « Pour une 4e circonscription plus forte et plus unie. »
                    </p>
                    <Link
                        href="/nous-soutenir"
                        className="shrink-0 px-6 py-2.5 bg-[#0D2B5B] text-white font-body text-sm font-600 tracking-widest uppercase transition-all duration-300 hover:bg-[#081D3E]">
                        Rejoindre le mouvement
                    </Link>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 border-2 border-[#C89B3C] flex items-center justify-center">
                            <span className="text-[#C89B3C] font-display font-bold text-xl">
                                DY
                            </span>
                        </div>
                        <div>
                            <div className="font-display font-bold text-base leading-tight text-white">
                                Dr Désiré YASSO
                            </div>
                            <div className="text-[#C89B3C] font-body text-[10px] tracking-[0.2em] uppercase mt-0.5">
                                Atacora · Bénin
                            </div>
                        </div>
                    </div>
                    <p className="text-white/50 font-body text-sm leading-relaxed">
                        Engagé pour le développement de la 4e circonscription
                        électorale — Natitingou et Toucountouna.
                    </p>
                    {/* Social */}
                    <div className="flex gap-3 mt-6">
                        {SOCIAL.map(s => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all duration-300 text-sm font-bold">
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick links */}
                <div>
                    <h4 className="text-[#C89B3C] font-mono text-xs tracking-[0.2em] uppercase mb-5">
                        Navigation
                    </h4>
                    <ul className="space-y-3">
                        {QUICK_LINKS.map(l => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="text-white/60 hover:text-white font-body text-sm transition-colors duration-200 flex items-center gap-2 group">
                                    <span className="w-3 h-[1px] bg-[#C89B3C] transition-all duration-300 group-hover:w-5" />
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Zones */}
                <div>
                    <h4 className="text-[#C89B3C] font-mono text-xs tracking-[0.2em] uppercase mb-5">
                        Zones d&apos;action
                    </h4>
                    <ul className="space-y-2 text-white/60 font-body text-sm">
                        <li className="flex items-center gap-2">
                            <span className="text-[#6EC6FF]">◆</span> Natitingou
                            (Chef-lieu)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#6EC6FF]">◆</span>{' '}
                            Toucountouna
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#6EC6FF]">◆</span> Villages
                            périphériques
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#6EC6FF]">◆</span> Région de
                            l&apos;Atacora
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-[#C89B3C] font-mono text-xs tracking-[0.2em] uppercase mb-5">
                        Coordonnées
                    </h4>
                    <ul className="space-y-4 text-white/60 font-body text-sm">
                        <li>
                            <span className="block text-white/30 text-xs mb-1 uppercase tracking-wider">
                                Adresse
                            </span>
                            Natitingou, Atacora, Bénin
                        </li>
                        <li>
                            <span className="block text-white/30 text-xs mb-1 uppercase tracking-wider">
                                Email
                            </span>
                            <a
                                href={`mailto:${SITE_CONFIG.email}`}
                                className="hover:text-[#C89B3C] transition-colors">
                                {SITE_CONFIG.email}
                            </a>
                        </li>
                        <li>
                            <span className="block text-white/30 text-xs mb-1 uppercase tracking-wider">
                                Téléphone
                            </span>
                            {SITE_CONFIG.phone}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 px-6 py-5">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 font-body text-xs">
                    <p>
                        © {new Date().getFullYear()} Dr Désiré YASSO — Tous
                        droits réservés.
                    </p>
                    <p className="text-center">
                        4e Circonscription électorale · Natitingou &
                        Toucountouna · Atacora, Bénin
                    </p>
                </div>
            </div>
        </footer>
    )
}
