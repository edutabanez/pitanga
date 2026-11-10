import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Utensils, Clock } from 'lucide-react';
import { TabType } from '../App';

interface HeroProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background soft accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pitanga-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pitanga-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pitanga-green/10 border border-pitanga-green/20 text-pitanga-green text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SISTEMA VISUAL & OPERACIONAL PITANGA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pitanga-dark tracking-tight leading-[1.12]">
              Uma marca que cresce com o seu <span className="text-pitanga-red">restaurante</span>.
            </h1>

            <p className="text-lg md:text-xl text-pitanga-dark/80 font-normal leading-relaxed max-w-2xl">
              Plataforma completa para food service: pedidos ágeis, cardápio digital integrado, gestão de cozinha e controle financeiro claro e direto.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setActiveTab('contact')}
                className="inline-flex justify-center items-center gap-2 bg-pitanga-red hover:bg-[#c93e32] text-white font-medium px-8 py-4 rounded-2xl shadow-lg shadow-pitanga-red/20 hover:shadow-xl transition-all text-base"
              >
                <span>Começar teste gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setActiveTab('features')}
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-pitanga-light text-pitanga-dark font-medium px-7 py-4 rounded-2xl border border-pitanga-border transition-all text-base"
              >
                <span>Conhecer recursos</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-pitanga-dark/70 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pitanga-green" />
                <span>Sem taxa de adesão</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pitanga-green" />
                <span>Suporte humanizado em português</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pitanga-green" />
                <span>Funciona no celular, tablet e computador</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive App Preview Mock */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-xl border border-pitanga-border">
              {/* Header card preview */}
              <div className="flex items-center justify-between pb-4 border-b border-pitanga-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pitanga-ivory border border-pitanga-border flex items-center justify-center p-1.5">
                    <img src="/icone_pitanga.svg" alt="Pitanga" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-pitanga-dark">Bistrô Pitanga</h4>
                    <span className="text-xs text-pitanga-green font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-pitanga-green animate-pulse" />
                      Operação ativa
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-pitanga-ivory text-pitanga-dark border border-pitanga-border">
                  Mesa 08
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="p-3.5 rounded-2xl bg-pitanga-ivory border border-pitanga-border/60">
                  <div className="flex items-center gap-1.5 text-xs text-pitanga-dark/70 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-pitanga-green" />
                    <span>Faturamento Hoje</span>
                  </div>
                  <span className="text-xl font-bold text-pitanga-dark">R$ 4.820</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-pitanga-ivory border border-pitanga-border/60">
                  <div className="flex items-center gap-1.5 text-xs text-pitanga-dark/70 mb-1">
                    <Clock className="w-3.5 h-3.5 text-pitanga-red" />
                    <span>Tempo Médio KDS</span>
                  </div>
                  <span className="text-xl font-bold text-pitanga-dark">11 min</span>
                </div>
              </div>

              {/* Live orders preview */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold text-pitanga-dark uppercase tracking-wider">
                  Pedidos Recentes
                </div>

                <div className="p-3 rounded-xl bg-white border border-pitanga-border flex items-center justify-between hover:border-pitanga-green transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pitanga-green/10 text-pitanga-green flex items-center justify-center">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-pitanga-dark">Risoto de Camarão</p>
                      <p className="text-[10px] text-pitanga-dark/60">Mesa 04 • Garçom Lucas</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-pitanga-dark">R$ 78,00</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-pitanga-border flex items-center justify-between hover:border-pitanga-green transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pitanga-red/10 text-pitanga-red flex items-center justify-center">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-pitanga-dark">Suco de Pitanga 500ml</p>
                      <p className="text-[10px] text-pitanga-dark/60">Balcão • Pedido #128</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-pitanga-dark">R$ 16,00</span>
                </div>
              </div>

              {/* Quick action bar */}
              <div className="mt-5 pt-4 border-t border-pitanga-border flex items-center justify-between text-xs">
                <span className="text-pitanga-dark/70">18 mesas ocupadas</span>
                <span className="text-pitanga-red font-semibold hover:underline cursor-pointer">
                  Ver mapa de salão →
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
