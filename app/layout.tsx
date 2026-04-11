import type { Metadata } from 'next'
import '@/styles/globals.css'
import { IMAGES } from '@/lib/images'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import CookieBanner from '@/components/ui/CookieBanner'

export const metadata: Metadata = {
    title: {
        default:
            'Dr Désiré YASSO — Inspecteur Général, Audit & Gouvernance | Bénin',
        template: '%s — Dr Désiré YASSO',
    },
    description:
        "Site officiel de Dr Désiré YASSO, Inspecteur Général du Ministère des Affaires Étrangères du Bénin. Expert en audit, gouvernance d'entreprise et contrôle de gestion public.",
    keywords: [
        'Dr Désiré YASSO',
        'Audit',
        'Gouvernance',
        'Bénin',
        'Inspecteur Général',
        'Ministère des Affaires Étrangères',
        'Contrôle de gestion',
        'Expert',
        'Affaires publiques',
    ],
    openGraph: {
        title: 'Dr Désiré YASSO — Expert en Gouvernance & Audit',
        description:
            'Inspecteur Général du Ministère des Affaires Étrangères du Bénin. Expertise en audit, gouvernance et contrôle de gestion.',
        type: 'website',
        locale: 'fr_FR',
        siteName: 'Dr Désiré YASSO',
        images: [
            {
                url: IMAGES.metadataImage,
                width: 1200,
                height: 630,
                alt: 'Dr Désiré YASSO',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dr Désiré YASSO — Inspecteur Général',
        description: 'Expert en audit et gouvernance au service du Bénin.',
    },
    robots: { index: true, follow: true },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Raleway:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <ScrollToTop />
                <CookieBanner />
            </body>
        </html>
    )
}
