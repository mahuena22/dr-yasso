"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };
  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#081D3E] border-t-2 border-[#C89B3C] p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-body text-sm text-white/70 max-w-2xl">
          Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser l&apos;audience.
          En continuant, vous acceptez notre utilisation des cookies.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 border border-white/20 text-white/60 font-mono text-xs tracking-wider uppercase hover:border-white/40 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-[#C89B3C] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#9E7B2E] transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
