import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { TabType } from '../App';

interface PricingProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Pricing({ setActiveTab }: PricingProps) {
  const plans = [
    {
      name: 'Essencial',
      price: 'R$ 149',
      period: '/mês',
      description: 'Ideal para cafeterias, confeitarias e pequenas operações de balcão.',
      features: [
        'Até 10 mesas ou balcão',
        'PDV rápido e controle de caixa',
        'Cardápio digital via QR Code',
        'Emissão de NFC-e',
        'Suporte por WhatsApp',
      ],
      highlight: false,
      cta: 'Começar com Essencial',
    },
    {
      name: 'Profissional',
      price: 'R$ 289',
      period: '/mês',
      description: 'A solução mais completa para restaurantes, bares e pizzarias.',
      features: [
        'Mesas ilimitadas + comanda eletrônica',
        'KDS para cozinha com telas por setor',
        'Gestão de estoque com ficha técnica',
        'Integração com iFood e WhatsApp',
        'Relatórios de CMV e DRE em tempo real',
        'Suporte prioritário 7 dias por semana',
      ],
      highlight: true,
      tag: 'Mais Escolhido',
      cta: 'Experimentar 14 dias grátis',
    },
    {
      name: 'Multi-unidades',
      price: 'Personalizado',
      period: '',
      description: 'Para redes, franquias e grupos com mais de 3 unidades.',
      features: [
        'Painel central multi-loja',
        'Gestão de compras corporativa',
        'API dedicada de integração',
        'Gerente de conta exclusivo',
        'Treinamento presencial ou remoto',
      ],
      highlight: false,
      cta: 'Falar com Consultor',
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-pitanga-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-pitanga-red font-semibold text-xs tracking-widest uppercase">
            Planos Transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-pitanga-dark">
            Escolha o plano que acompanha seu crescimento
          </h2>
          <p className="text-pitanga-dark/75 text-base">
            Sem contratos longos ou multas. Altere ou cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`rounded-3xl p-8 flex flex-col justify-between border transition-all ${
                p.highlight 
                  ? 'bg-pitanga-dark text-white border-pitanga-dark shadow-xl ring-2 ring-pitanga-red/40 relative' 
                  : 'bg-pitanga-ivory border-pitanga-border text-pitanga-dark'
              }`}
            >
              {p.highlight && p.tag && (
                <span className="absolute -top-3.5 right-8 bg-pitanga-red text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {p.tag}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className={`text-xs mb-6 ${p.highlight ? 'text-white/80' : 'text-pitanga-dark/70'}`}>
                  {p.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className={`text-sm ${p.highlight ? 'text-white/70' : 'text-pitanga-dark/60'}`}>{p.period}</span>
                </div>

                <div className={`pt-6 border-t ${p.highlight ? 'border-white/10' : 'border-pitanga-border'} space-y-3 mb-8`}>
                  {p.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.highlight ? 'text-pitanga-green' : 'text-pitanga-green'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveTab('contact')}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                  p.highlight
                    ? 'bg-pitanga-red hover:bg-[#c93e32] text-white shadow-md'
                    : 'bg-white border border-pitanga-border hover:bg-pitanga-light text-pitanga-dark'
                }`}
              >
                <span>{p.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
