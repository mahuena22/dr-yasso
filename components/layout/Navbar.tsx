'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
    { href: '/', label: 'Accueil' },
    { href: '/qui-sommes-nous', label: 'Qui sommes-nous ?' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href)

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled || menuOpen
                        ? 'bg-[#0D2B5B] shadow-2xl py-3'
                        : 'bg-transparent py-5'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 border-2 border-[#C89B3C] flex items-center justify-center">
                            <span className="text-[#C89B3C] font-display font-bold text-lg leading-none">
                                DY
                            </span>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-white font-display font-bold text-base leading-tight tracking-wide">
                                Site web officiel de Dr Désiré YASSO
                            </div>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 font-body text-sm font-500 tracking-wide transition-colors duration-200 group ${
                                    isActive(link.href)
                                        ? 'text-[#C89B3C]'
                                        : 'text-white/80 hover:text-white'
                                }`}>
                                {link.label}
                                <span
                                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#C89B3C] transition-transform duration-300 origin-left ${
                                        isActive(link.href)
                                            ? 'scale-x-100'
                                            : 'scale-x-0 group-hover:scale-x-100'
                                    }`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + hamburger */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/nous-soutenir"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#C89B3C] text-white font-body text-sm font-600 tracking-wider uppercase transition-all duration-300 hover:bg-[#9E7B2E] hover:shadow-lg animate-pulse-gold">
                            <span>Nous soutenir</span>
                        </Link>

                        <button
                            onClick={() => setMenuOpen(v => !v)}
                            className={`lg:hidden flex flex-col gap-1.5 p-2 ${menuOpen ? 'hamburger-open' : ''}`}
                            aria-label="Menu">
                            <span
                                className={`hamburger-line text-white ${menuOpen ? 'line-1' : ''}`}
                            />
                            <span
                                className={`hamburger-line text-white ${menuOpen ? 'line-2' : ''}`}
                            />
                            <span
                                className={`hamburger-line text-white ${menuOpen ? 'line-3' : ''}`}
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-40 bg-[#081D3E] flex flex-col justify-center px-8 transition-all duration-500 ${
                    menuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}>
                <nav className="flex flex-col gap-2">
                    {NAV_LINKS.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-display text-3xl font-700 py-3 border-b border-white/10 transition-all duration-300 ${
                                isActive(link.href)
                                    ? 'text-[#C89B3C]'
                                    : 'text-white/70 hover:text-white'
                            }`}
                            style={{ animationDelay: `${i * 80}ms` }}>
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/nous-soutenir"
                        className="mt-6 text-center py-4 bg-[#C89B3C] text-white font-body font-600 text-base tracking-widest uppercase">
                        Nous soutenir
                    </Link>
                </nav>
                <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white/30 font-mono text-xs tracking-widest text-center uppercase">
                        Pour une 4e circonscription plus forte et plus unie.
                    </p>
                </div>
            </div>
        </>
    )
}
