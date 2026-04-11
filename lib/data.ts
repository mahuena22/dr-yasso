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
        title: 'Naissance à Cotonou',
        description:
            'Dr Désiré YASSO naît le 16 avril 1983 à Cotonou, Bénin. Il grandit dans une famille structurée qui lui inculque les valeurs de travail, de rigueur et de service public.',
        location: 'Cotonou, Bénin',
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
        year: '2009',
        title: 'Master 1 en Audit et Contrôle de Gestion',
        description:
            'Obtient un Master 1 en Audit et Contrôle de Gestion de Pigier Bénin, approfondissant ses expertise en gouvernance administrative.',
        location: 'Pigier Bénin',
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
            "Doctorant puis Docteur en Sciences de Gestion avec mention 'Management' et spécialité 'Gouvernance d'entreprise - Audit et Contrôle' à l'Université Paris 1 Panthéon-Sorbonne. Thèse soutenue le 28 janvier 2014. Chercheur au sein du GREGOR et HEC-IAE Paris.",
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
            "Promu Inspecteur Général du Ministère des Affaires étrangères du Bénin. 18 ans d'expérience cumulée en audit, contrôle de gestion et gouvernance d'entreprise. Expert en gouvernance publique, audit social et stratégie d'entreprise.",
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
        title: "Gouvernance d'Entreprise",
        description:
            "Expert en gouvernance d'entreprise, audit et contrôle. Garantir la transparence, l'intégrité et la responsabilité dans la gestion publique et privée.",
    },
    {
        icon: '📊',
        title: 'Audit & Contrôle',
        description:
            "18 ans d'expertise en audit comptable, financier et de performance. Auditeur de plus de 30 grandes entreprises africaines et ministères gouvernementaux.",
    },
    {
        icon: '📚',
        title: 'Recherche Scientifique',
        description:
            "Directeur du GIRO Bénin, chercheur à Paris 1 Panthéon-Sorbonne. Publications scientifiques sur la gouvernance publique, la corruption et l'efficacité administrative.",
    },
    {
        icon: '🏛️',
        title: 'Gestion Publique',
        description:
            "Inspecteur Général chargé de l'audit de la gestion administrative et financière de tous les postes diplomatiques et consulaires béninois à l'étranger.",
    },
    {
        icon: '🤝',
        title: 'Développement Organisationnel',
        description:
            "Expert en gestion des ressources humaines publiques, climat social et développement organisationnel. Engagement envers l'excellence administrative.",
    },
    {
        icon: '🌍',
        title: 'Affaires Étrangères',
        description:
            'Expertise en politique étrangère, diplomatie et coopération internationale. Au cœur de la ministère en charge des relations extérieures du Bénin.',
    },
]

export const ARTICLES: Article[] = [
    {
        id: '1',
        slug: 'audit-ambassades-bj',
        title: 'Audit de conformité financière des Ambassades du Bénin',
        excerpt:
            "L'Inspecteur Général Désiré YASSO supervise un audit complet de la gestion administrative et financière de toutes les Ambassades et Consulats généraux du Bénin à l'étranger, garantissant la transparence et la conformité aux normes internationales.",
        content: 'Audit complet...',
        category: 'Audit',
        date: '15 mars 2026',
        readTime: 5,
        image: '/image/img1.jpeg',
        featured: true,
    },
    {
        id: '2',
        slug: 'gouvernance-entreprises-publiques',
        title: 'Amélioration de la gouvernance des entreprises publiques béninoises',
        excerpt:
            "Dr YASSO préside des réunions de session sur la gouvernance d'entreprise visant à renforcer le contrôle interne et la performance des institutions publiques béninoises, conformément aux standards internationaux.",
        content: 'Gouvernance publique...',
        category: 'Gouvernance',
        date: '28 février 2026',
        readTime: 6,
        image: '/image/img2.jpeg',
        featured: true,
    },
    {
        id: '3',
        slug: 'publications-scientifiques-gouvernance',
        title: 'Nouvelles publications scientifiques sur la gouvernance en Afrique',
        excerpt:
            "Dr Désiré YASSO et ses collègues du GIRO Bénin publient des travaux de recherche sur la gouvernance publique, l'audit et le contrôle en contexte africain, contribuant au débat académique international.",
        content: 'Publications scientifiques...',
        category: 'Recherche',
        date: '10 février 2026',
        readTime: 4,
        image: '/image/img3.jpeg',
    },
    {
        id: '4',
        slug: 'formation-auditeurs-diplomates',
        title: 'Programme de formation pour auditeurs et diplomates',
        excerpt:
            "L'Inspecteur Général dirige un programme de formation accrédité pour renforcer les compétences des auditeurs internes et des diplomates béninois en audit, contrôle de gestion et gestion financière.",
        content: 'Formation professionnelle...',
        category: 'Formation',
        date: '22 janvier 2026',
        readTime: 5,
        image: '/image/img4.jpeg',
    },
    {
        id: '5',
        slug: 'audit-postes-diplomatiques',
        title: 'Audit complet des opérations aux postes diplomatiques',
        excerpt:
            'Supervisé par Dr YASSO, un audit complet des opérations financières et administratives des postes diplomatiques et consulaires du Bénin assure la conformité budgétaire et la transparence.',
        content: 'Audit diplomatique...',
        category: 'Audit',
        date: '5 janvier 2026',
        readTime: 4,
        image: '/image/img5.jpeg',
    },
    {
        id: '6',
        slug: 'giro-initiative-recherche',
        title: 'GIRO Bénin : Une initiative pour la recherche organizational',
        excerpt:
            'En tant que Directeur du GIRO Bénin, Dr YASSO promeut la recherche interdisciplinaire sur les organisations, contribuant à la formation des leaders africains en gouvernance et gestion.',
        content: 'Recherche interdisciplinaire...',
        category: 'Recherche',
        date: '18 décembre 2025',
        readTime: 5,
        image: '/image/img6.jpeg',
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
    { number: '9', label: 'Ambassades & Consulats supervisés', icon: '🌍' },
    { number: '3', label: 'Diplômes avancés (Master+Doctorat)', icon: '🎓' },
]
