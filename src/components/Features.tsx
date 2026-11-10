import React from 'react';
import { 
  QrCode, 
  ChefHat, 
  Receipt, 
  Smartphone, 
  BarChart3, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface FeaturesProps {
  showFullDetails?: boolean;
}

export default function Features({ showFullDetails = false }: FeaturesProps) {
  const featureList = [
    {
      icon: QrCode,
      title: 'Cardápio Digital com Pedidos',
      description: 'Cardápio interativo via QR Code na mesa ou link no WhatsApp. Fotos atrativas, combos e envio direto para a cozinha.',
      tag: 'Mais vendido',
    },
    {
      icon: ChefHat,
      title: 'KDS para Cozinha & Bar',
      description: 'Elimine comandas de papel. Telas sincronizadas por setor (fogão, montagem, bar) com contagem de tempo e alertas visuais.',
      tag: 'Agilidade',
    },
    {
      icon: Smartphone,
      title: 'Comanda Móvel para Garçons',
      description: 'Atendimento mais rápido diretamente do smartphone do garçom. Adicione observações, divida contas e feche mesas em segundos.',
      tag: 'Mobilidade',
    },
    {
      icon: Receipt,
      title: 'PDV & Fechamento Fiscal',
      description: 'Emissão descomplicada de NFC-e e SAT, integração com maquininhas de cartão e conciliação automática de pagamentos.',
      tag: 'Fiscal & Caixa',
    },
    {
      icon: MessageSquare,
      title: 'Atendente WhatsApp Automático',
      description: 'Receba pedidos no WhatsApp com inteligência que entende o cliente, confirma endereço e calcula taxa de entrega.',
      tag: 'Automação',
    },
    {
      icon: BarChart3,
      title: 'DRE & Controle de Estoque',
      description: 'Ficha técnica detalhada por prato. Baixa automática no estoque por ingrediente e relatórios claros de CMV e lucratividade.',
      tag: 'Gestão Financeira',
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-pitanga-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-pitanga-green font-semibold text-xs tracking-widest uppercase bg-pitanga-green/10 px-3 py-1 rounded-full">
            Tudo em um só lugar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-pitanga-dark tracking-tight">
            Tecnologia pensada para a rotina do restaurante
          </h2>
          <p className="text-base sm:text-lg text-pitanga-dark/75 leading-relaxed">
            Elimine a complexidade com um software leve, rápido e desenhado para quem vive a correria do salão e da cozinha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-pitanga-ivory/60 hover:bg-pitanga-ivory rounded-3xl p-8 border border-pitanga-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-pitanga-border text-pitanga-red flex items-center justify-center group-hover:bg-pitanga-red group-hover:text-white transition-colors shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-pitanga-border text-pitanga-dark/80">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-pitanga-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-pitanga-dark/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {showFullDetails && (
          <div className="mt-16 p-8 rounded-3xl bg-pitanga-dark text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Precisa de integração com seu ERP atual?</h3>
            <p className="text-white/80 max-w-2xl mx-auto text-sm mb-6">
              A Pitanga possui APIs abertas e conectores para os principais sistemas de gestão do mercado brasileiro.
            </p>
            <button className="bg-pitanga-red hover:bg-[#c93e32] text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors">
              Falar com nosso time técnico
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
