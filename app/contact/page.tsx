'use client'
import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '@/lib/data'
import { useScrollReveal } from '@/lib/useScrollReveal'

interface FormData {
    nom: string
    prenom: string
    email: string
    telephone: string
    sujet: string
    message: string
}

interface FormErrors {
    [key: string]: string
}

export default function ContactPage() {
    useScrollReveal()
    const [formData, setFormData] = useState<FormData>({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const validate = (): boolean => {
        const newErrors: FormErrors = {}
        if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis.'
        if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis.'
        if (!formData.email.trim()) newErrors.email = "L'email est requis."
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Email invalide.'
        if (!formData.sujet.trim()) newErrors.sujet = 'Le sujet est requis.'
        if (!formData.message.trim())
            newErrors.message = 'Le message est requis.'
        else if (formData.message.trim().length < 20)
            newErrors.message = 'Message trop court (min. 20 caractères).'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setSubmitting(true)
        await new Promise(r => setTimeout(r, 1500))
        setSubmitting(false)
        setSubmitted(true)
    }

    const inputClass = (field: string) =>
        `w-full px-4 py-3 bg-gray-50 border font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/30 transition-all duration-200 ${
            errors[field]
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 focus:border-[#C89B3C]'
        }`

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative pt-32 pb-20 px-6 bg-[#0D2B5B] overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23C89B3C fill-opacity=0.04%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
                <div className="relative max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-[#C89B3C]" />
                        <span className="font-mono text-xs text-[#C89B3C] tracking-[0.3em] uppercase">
                            Nous écrire
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-900 text-white leading-tight">
                        Contact
                    </h1>
                    <p className="font-body text-lg text-white/60 mt-4 max-w-xl">
                        Vous avez une question, une suggestion ou souhaitez nous
                        rencontrer ? Écrivez-nous.
                    </p>
                </div>
            </section>

            {/* ── MAIN ── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
                    {/* Info sidebar */}
                    <div className="lg:col-span-1 space-y-6 reveal-left">
                        <div>
                            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C89B3C]">
                                Coordonnées
                            </span>
                            <h2 className="font-display text-2xl font-700 text-[#0D2B5B] mt-2 mb-4">
                                Restons connectés
                            </h2>
                            <div className="w-10 h-[2px] bg-[#C89B3C]" />
                        </div>

                        {[
                            {
                                icon: '📍',
                                label: 'Adresse',
                                value: SITE_CONFIG.address,
                            },
                            {
                                icon: '📧',
                                label: 'Email',
                                value: SITE_CONFIG.email,
                            },
                            {
                                icon: '📞',
                                label: 'Téléphone',
                                value: SITE_CONFIG.phone,
                            },
                            {
                                icon: '🕐',
                                label: 'Disponibilité',
                                value: 'Lun – Ven, 8h – 17h (heure locale)',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-4 p-4 border border-gray-100 hover:border-[#C89B3C]/30 transition-all duration-200">
                                <span className="text-2xl flex-shrink-0">
                                    {item.icon}
                                </span>
                                <div>
                                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">
                                        {item.label}
                                    </div>
                                    <div className="font-body text-sm text-gray-700">
                                        {item.value}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Zones */}
                        <div className="bg-[#0D2B5B] p-6">
                            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C89B3C] mb-3">
                                Domaines d'expertise
                            </div>
                            <p className="font-body text-sm text-white/70 leading-relaxed">
                                <strong className="text-white">Audit</strong> •{' '}
                                <strong className="text-white">
                                    Gouvernance
                                </strong>{' '}
                                •{' '}
                                <strong className="text-white">
                                    Contrôle Financier
                                </strong>{' '}
                                •{' '}
                                <strong className="text-white">
                                    Affaires Publiques
                                </strong>{' '}
                                •{' '}
                                <strong className="text-white">
                                    Recherche
                                </strong>
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 reveal-right">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="text-6xl mb-6">✅</div>
                                <h3 className="font-display text-3xl font-700 text-[#0D2B5B] mb-3">
                                    Message envoyé !
                                </h3>
                                <div className="w-12 h-[2px] bg-[#C89B3C] mx-auto mb-4" />
                                <p className="font-body text-gray-500 max-w-md">
                                    Merci pour votre message. L&apos;équipe de
                                    Dr Désiré YASSO vous répondra dans les
                                    meilleurs délais.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false)
                                        setFormData({
                                            nom: '',
                                            prenom: '',
                                            email: '',
                                            telephone: '',
                                            sujet: '',
                                            message: '',
                                        })
                                    }}
                                    className="mt-8 btn-primary">
                                    <span>Envoyer un nouveau message</span>
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                                            Nom *
                                        </label>
                                        <input
                                            type="text"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            className={inputClass('nom')}
                                            placeholder="Votre nom"
                                        />
                                        {errors.nom && (
                                            <p className="mt-1 text-red-500 text-xs">
                                                {errors.nom}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                                            Prénom *
                                        </label>
                                        <input
                                            type="text"
                                            name="prenom"
                                            value={formData.prenom}
                                            onChange={handleChange}
                                            className={inputClass('prenom')}
                                            placeholder="Votre prénom"
                                        />
                                        {errors.prenom && (
                                            <p className="mt-1 text-red-500 text-xs">
                                                {errors.prenom}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={inputClass('email')}
                                            placeholder="votre@email.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-red-500 text-xs">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            name="telephone"
                                            value={formData.telephone}
                                            onChange={handleChange}
                                            className={inputClass('telephone')}
                                            placeholder="+229 XX XX XX XX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                                        Sujet *
                                    </label>
                                    <select
                                        name="sujet"
                                        value={formData.sujet}
                                        onChange={handleChange}
                                        className={inputClass('sujet')}>
                                        <option value="">
                                            Choisir un sujet
                                        </option>
                                        <option>Question générale</option>
                                        <option>
                                            Proposition de partenariat
                                        </option>
                                        <option>
                                            Demande d&apos;intervention
                                        </option>
                                        <option>
                                            Demande d&apos;entretien
                                        </option>
                                        <option>Collaboration scientifique</option>
                                        <option>Média / Presse</option>
                                        <option>Autre</option>
                                    </select>
                                    {errors.sujet && (
                                        <p className="mt-1 text-red-500 text-xs">
                                            {errors.sujet}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className={
                                            inputClass('message') +
                                            ' resize-none'
                                        }
                                        placeholder="Décrivez votre demande en détail…"
                                    />
                                    <div className="flex justify-between mt-1">
                                        {errors.message ? (
                                            <p className="text-red-500 text-xs">
                                                {errors.message}
                                            </p>
                                        ) : (
                                            <span />
                                        )}
                                        <span className="font-mono text-[10px] text-gray-300">
                                            {formData.message.length} caractères
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-4 bg-[#0D2B5B] text-white font-body font-600 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#C89B3C] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                                    {submitting ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Envoi en cours…</span>
                                        </>
                                    ) : (
                                        <span>Envoyer le message →</span>
                                    )}
                                </button>

                                <p className="font-mono text-[10px] text-gray-300 text-center tracking-wide">
                                    * Champs obligatoires. Vos données ne seront
                                    jamais partagées avec des tiers.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
