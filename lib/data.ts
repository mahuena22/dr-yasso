import { title } from 'process'

// ─── Types ──────────────────────────────────────────────────────────────────
export interface Article {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    category: string
    date: string
    readTime: number
    image: string
    featured?: boolean
}

export interface Value {
    icon: string
    title: string
    description: string
}

export interface TimelineItem {
    year: string
    title: string
    description: string
    location?: string
}

// ─── Data ───────────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
    name: 'Dr Désiré YASSO',
    tagline: 'Inspecteur Général du Ministère des Affaires Étrangères du Bénin',
    position: 'Inspecteur Général',
    organization:
        'Ministère des Affaires Étrangères et de la Coopération du Bénin',
    region: 'Bénin',
    email: 'dyasso@gouv.bj',
    phone: '+229 01 66 54 76 09',
    address: 'S/C Dossia 01 BP 3155, Cotonou, Bénin',
    social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        youtube: '#',
    },
}

export const TIMELINE: TimelineItem[] = [
    {
        year: '1983',
        title: 'Naissance à Kouarfa, Bénin',
        description:
            'Dr Désiré YASSO naît le 16 avril 1983 à Kouarfa, Bénin. Il grandit dans une famille structurée qui lui inculque les valeurs de travail, de rigueur et de service public.',
        location: 'Kouarfa, Bénin',
    },
    {
        year: '2003',
        title: 'Baccalauréat Série D, Mention Assez Bien',
        description:
            'Diplômé du baccalauréat série D avec la mention Assez Bien. Poursuit ses études supérieures avec détermination.',
        location: 'Bénin',
    },
    {
        year: '2006',
        title: 'BTS Comptabilité-Gestion',
        description:
            'Obtient son BTS en Comptabilité et Gestion, ouvrant la voie à une spécialisation en audit et contrôle.',
        location: 'Bénin',
    },
    {
        year: '2007',
        title: 'Diplôme Supérieur de Spécialité Audit & Contrôle',
        description:
            'Diplômé de Pigier Bénin avec un Diplôme Supérieur de Spécialité en Audit et Contrôle de Gestion, spécialisation qui deviendra sa marque professionnelle.',
        location: 'Pigier Bénin',
    },
    {
        year: '2008-2012',
        title: "D'Assistant à Chef de Mission chez Deloitte Bénin",
        description:
            "Débute sa carrière professionnelle chez Deloitte Bénin, où il progresse d'assistant à chef de mission d'audit. Auditeur de nombreuses grandes entreprises du secteur public et privé béninois.",
        location: 'Deloitte Bénin',
    },

    {
        year: '2010',
        title: 'Master en Management (BAC+5)',
        description:
            'Diplômé du CNAM-Paris avec un Master en Management, enrichissant sa formation par une perspective internationale.',
        location: 'CNAM-Paris',
    },
    {
        year: '2011-2014',
        title: 'Doctorat en Sciences de Gestion',
        description:
            "Docteur en Science de Gestion avec mention Management spécialité Gouvernance d'entreprise - Audit et Contrôle' à l'Université Paris 1 Panthéon-Sorbonne. Thèse soutenue le 28 janvier 2014. Chercheur au sein du GREGOR Paris.",
        location: 'Université Paris 1 Panthéon-Sorbonne',
    },
    {
        year: '2015-2017',
        title: 'Inspecteur Général Adjoint',
        description:
            "Nommé Inspecteur Général Adjoint du Ministère des Affaires étrangères et de la Coopération du Bénin. Chargé de l'audit de la gestion administrative, comptable et financière du Ministère, y compris tous les postes diplomatiques et consulaires. Auditeur responsable de tous les Ambassades et Consulats généraux du Bénin à l'étranger.",
        location: 'MAE Bénin',
    },
    {
        year: "2017-Aujourd'hui",
        title: 'Inspecteur Général (depuis 14 juillet 2017)',
        description:
            "Promu Inspecteur Général du Ministère des Affaires étrangères du Bénin. Plusieurs années d'expérience cumulée en audit, guide les décisions stratégiques, et gouvernance d'entreprise. Expert en gouvernance publique, audit social et stratégie d'entreprise.",
        location: 'MAE Bénin, Cotonou',
    },
    {
        year: "2015-Aujourd'hui",
        title: 'Directeur du GIRO Bénin (depuis décembre 2015)',
        description:
            'Directeur du Groupe Interdisciplinaire de Recherches sur les Organisations (GIRO Bénin), promouvant la recherche scientifique en gestion et gouvernance.',
        location: 'Bénin',
    },
    {
        year: '2026-2033',
        title: 'Conseiller Communal de Kouarfa',
        description:
            "Élu Conseiller Communal de l'Arrondissement de Kouarfa, poursuivant son engagement au service du développement local.",
        location: 'Kouarfa, Atakora',
    },
]

export const VALUES: Value[] = [
    {
        icon: '⚖️',
        title: 'intégrité ',
        description:
            " Engagement inébranlable envers l'intégrité, la transparence et l'éthique dans toutes les actions professionnelles et publiques.",
    },
    {
        icon: '📊',
        title: 'Compétence',
        description:
            ' Expertise reconnue en audit, gouvernance publique et gestion organisationnelle, avec plusieurs années dexpérience  dans des contextes complexes.',
    },
    {
        icon: '📚',
        title: 'Rigueur',
        description:
            " Approche méthodique et rigoureuse dans l'analyse, la recherche et la prise de décision, assurant des résultats fiables et de haute qualité.",
    },
    {
        icon: '🏛️',
        title: 'Loyauté',
        description:
            ' Loyauté indéfectible envers les institutions publiques béninoises, avec un engagement profond pour le service public et le développement national.',
    },
    {
        icon: '🤝',
        title: 'Action',
        description:
            " Engagé dans l'action concrète pour le développement du Bénin, contribuant activement à la mise en œuvre de politiques publiques efficaces.",
    },
]

export const ARTICLES: Article[] = [
    {
        id: '1',
        slug: ' installation-conseil-communal-toucountouna',
        title: 'Installation du Conseil Communal de Toucountouna',
        excerpt:
            "Dr Désiré YASSO participe à l'installation du Conseil Communal de Toucountouna, marquant une étape importante dans la gouvernance locale et le développement de la 4e circonscription électorale.",
        content: ' Installation du Conseil Communal de Toucountouna...',
        category: ' Gouvernance',
        date: '13 février 2026',
        readTime: 4,
        image: '/image/Article5.jpeg',
    },
    {
        id: '2',
        slug: "installation-coordination-d'arrondissement",
        title: "Installation de la coordination  d'arrondissement de campagne",
        excerpt:
            "Dr Désiré YASSO a procédé à l'installation de la coordination d'arrondissement de campagne du DUO WADAGNI-TALATA à Kouarfa, commune de Toucountouna",
        content:
            "Dr Désiré YASSO a procédé à l'installation de la coordination d'arrondissement de campagne du DUO WADAGNI-TALATA à Kouarfa, commune de Toucountouna...",
        category: ' Gouvernance',
        date: '26 mars 2026',
        readTime: 5,
        image: '/image/article6.jpeg',
    },
    {
        id: '3',
        slug: 'audit-ambassades-bj',
        title: 'Parainage de la fete des tamtams à Kokokou dans la commune de thoucountoumin',
        excerpt:
            ' Dr Désiré YASSO parraine la fête des tamtams à Kokokou, commune de Thoucountoumin, célébrant la culture locale et renforçant les liens communautaires dans la 4e circonscription électorale.',
        content: ' Parainage de la fete des tamtams à Kokokou...',
        category: ' Audit',
        date: '15 mars 2026',
        readTime: 5,
        image: '/image/img1.jpeg',
        featured: true,
    },
    {
        id: '4',
        slug: ' conseil-communal-thoucountoumin',
        title: 'Participation au premier conseil communale de la commune de thoucountoumin',
        excerpt:
            "Dr Désiré YASSO participe activement au premier conseil communal de la commune de thoucountoumin en tant que conseiller communal, contribuant à l'élaboration de politiques locales pour le développement de la 4e circonscription électorale.",
        content: ' Participation active...',
        category: 'Gouvernance',
        date: '28 février 2026',
        readTime: 6,
        image: '/image/img2.jpeg',
        featured: true,
    },
    {
        id: '5',
        slug: ' election-conseiller-thoucountoumin',
        title: 'Election comme conseiller à la mairie de thoucountoumin .',
        excerpt:
            ' Dr Désiré YASSO élu conseiller communal à la mairie de Thoucountoumin, renforçant son engagement local pour le développement de la 4e circonscription électorale.',
        content: 'Publications scientifiques...',
        category: ' Gouvernance',
        date: '11 janvier 2026',
        readTime: 4,
        image: '/image/img3.jpeg',
    },
    {
        id: '6',
        slug: 'mouvement-jeunes-union-progressiste-atacora',
        title: 'Lancement du mouvement départemental des jeunes de l&apos;union progressiste de l&apos;Atacora',
        excerpt:
            ' Dr Désiré YASSO lance le mouvement départemental des jeunes de l&apos;Union Progressiste de l&apos;Atacora, mobilisant la jeunesse pour un engagement politique actif et le développement de la région.',
        content:
            ' Lancement du mouvement départemental des jeunes de l&apos;union progressiste de l&apos;Atacora...',
        category: 'Gouvernance',
        date: '22 janvier 2026',
        readTime: 5,
        image: '/image/img4.jpeg',
    },
]

export const CATEGORIES = [
    'Tous',
    'Audit',
    'Gouvernance',
    'Recherche',
    'Formation',
    'Diplomatie',
]

export const STATS = [
    { number: '18+', label: "Années d'expérience en audit", icon: '📊' },
    { number: '30+', label: 'Entreprises & ministères auditées', icon: '✅' },
    { number: '30+', label: 'Ambassade & Consulat supervisés', icon: '🌍' },
    { number: '1', label: 'Doctorat', icon: '🎓' },
]
