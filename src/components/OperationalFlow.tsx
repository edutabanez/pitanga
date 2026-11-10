import React from 'react';
import { Smartphone, ChefHat, CheckCircle2 } from 'lucide-react';

export default function OperationalFlow() {
  const steps = [
    {
      number: '01',
      title: 'Cliente faz o pedido',
      desc: 'Via comanda do garçom, tablet na mesa ou QR Code direto no próprio celular.',
      icon: Smartphone,
    },
    {
      number: '02',
      title: 'Cozinha prepara sem erros',
      desc: 'O KDS divide os itens automaticamente entre as praças com tempo estimado de preparo.',
      icon: ChefHat,
    },
    {
      number: '03',
      title: 'Conta e saída sem filas',
      desc: 'Fechamento ágil com divisão de conta por cliente, Pix dinâmico e emissão fiscal.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 bg-pitanga-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-pitanga-red font-semibold text-xs tracking-widest uppercase">
            Fluxo Integrado
          </span>
          <h2 className="text-3xl font-bold text-pitanga-dark mt-2">
            Do primeiro pedido ao fechamento da conta
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative bg-white rounded-3xl p-8 border border-pitanga-border shadow-sm">
                <span className="text-4xl font-extrabold text-pitanga-green/20 mb-4 block">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-pitanga-green/10 text-pitanga-green flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-pitanga-dark mb-2">{step.title}</h3>
                <p className="text-sm text-pitanga-dark/75 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
