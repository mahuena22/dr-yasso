import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#081D3E] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C89B3C]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#6EC6FF]/5 blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-xl">
        {/* 404 number */}
        <div className="font-display text-[160px] md:text-[220px] font-900 leading-none text-shimmer select-none">
          404
        </div>

        {/* Gold line */}
        <div className="w-16 h-[3px] bg-[#C89B3C] mx-auto -mt-6 mb-6" />

        <h1 className="font-display text-3xl md:text-4xl font-700 text-white mb-4">
          Page introuvable
        </h1>
        <p className="font-body text-white/50 leading-relaxed mb-10">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Retournez à l&apos;accueil pour continuer votre navigation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C89B3C] text-white font-body font-600 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#9E7B2E] group"
          >
            <span>← Retour à l&apos;accueil</span>
          </Link>
          <Link
            href="/actualites"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white/70 font-body font-600 text-sm tracking-widest uppercase transition-all duration-300 hover:border-[#C89B3C] hover:text-[#C89B3C]"
          >
            <span>Voir les actualités</span>
          </Link>
        </div>

        {/* Tagline */}
        <p className="mt-14 font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">
          Pour une 4e circonscription plus forte et plus unie.
        </p>
      </div>
    </section>
  );
}
