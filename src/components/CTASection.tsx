import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-pitanga-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-pitanga-dark rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle background decoration */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-pitanga-green/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 top-10 opacity-10 hidden lg:block">
            <img src="/icone_pitanga.svg" alt="" className="w-64 h-64 filter invert" />
          </div>

          <div className="max-w-2xl relative z-10 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-pitanga-green bg-white/10 px-3 py-1 rounded-full">
              Comece hoje mesmo
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              A tecnologia que o seu restaurante precisa, sem a complicação que ninguém quer.
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Junte-se a centenas de negócios que aumentaram a velocidade da operação e o controle do lucro com a Pitanga.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a 
                href="#demo"
                onClick={(e) => { e.preventDefault(); alert('Solicitação recebida! Em instantes entraremos em contato.'); }}
                className="inline-flex justify-center items-center gap-2 bg-pitanga-red hover:bg-[#c93e32] text-white font-medium px-8 py-4 rounded-xl shadow-lg transition-all text-sm"
              >
                <span>Criar conta gratuita por 14 dias</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
