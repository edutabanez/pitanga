import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import OperationalFlow from './components/OperationalFlow';
import Pricing from './components/Pricing';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export type TabType = 'home' | 'features' | 'pricing' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="min-h-screen flex flex-col bg-pitanga-ivory">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <Features />
            <OperationalFlow />
            <Pricing setActiveTab={setActiveTab} />
            <CTASection />
          </>
        )}

        {activeTab === 'features' && (
          <div className="py-12">
            <Features showFullDetails />
            <OperationalFlow />
            <CTASection />
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="py-12">
            <Pricing setActiveTab={setActiveTab} />
            <CTASection />
          </div>
        )}

        {activeTab === 'contact' && (
          <section className="py-20 px-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-pitanga-border">
              <span className="text-pitanga-red font-semibold text-sm tracking-wider uppercase">Fale com a Pitanga</span>
              <h2 className="text-3xl md:text-4xl font-bold text-pitanga-dark mt-2 mb-4">
                Pronto para transformar sua operação?
              </h2>
              <p className="text-pitanga-dark/80 mb-8">
                Preencha os campos abaixo e nosso time de especialistas entrará em contato em até 1 hora.
              </p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Obrigado! Entraremos em contato em breve.'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-pitanga-dark mb-1">Nome completo</label>
                    <input type="text" required placeholder="Seu nome" className="w-full px-4 py-3 rounded-xl border border-pitanga-border focus:ring-2 focus:ring-pitanga-green focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pitanga-dark mb-1">E-mail corporativo</label>
                    <input type="email" required placeholder="seu@restaurante.com.br" className="w-full px-4 py-3 rounded-xl border border-pitanga-border focus:ring-2 focus:ring-pitanga-green focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-pitanga-dark mb-1">Nome do Estabelecimento</label>
                    <input type="text" required placeholder="Ex: Café das Flores" className="w-full px-4 py-3 rounded-xl border border-pitanga-border focus:ring-2 focus:ring-pitanga-green focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pitanga-dark mb-1">WhatsApp / Telefone</label>
                    <input type="tel" required placeholder="(11) 99999-9999" className="w-full px-4 py-3 rounded-xl border border-pitanga-border focus:ring-2 focus:ring-pitanga-green focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-pitanga-dark mb-1">Tipo de Operação</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-pitanga-border focus:ring-2 focus:ring-pitanga-green focus:outline-none bg-white">
                    <option>Restaurante à la carte</option>
                    <option>Cafeteria ou Confeitaria</option>
                    <option>Bar ou Hamburgueria</option>
                    <option>Dark Kitchen / Delivery</option>
                    <option>Rede / Franquia</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-pitanga-red text-white font-semibold py-4 rounded-xl hover:bg-opacity-95 transition-all shadow-md"
                >
                  Solicitar Demonstração Gratuita
                </button>
              </form>
            </div>
          </section>
        )}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
