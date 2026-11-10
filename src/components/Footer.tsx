import React from 'react';
import { TabType } from '../App';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-white border-t border-pitanga-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-pitanga-border">
          
          <div className="md:col-span-4 space-y-4">
            <img src="/logotipo_pitanga.svg" alt="Pitanga" className="h-8 w-auto object-contain" />
            <p className="text-sm text-pitanga-dark/75 leading-relaxed max-w-sm">
              Sistema de software completo e descomplicado para bares, restaurantes e confeitarias. Uma marca que cresce com o seu negócio.
            </p>
            <div className="text-xs text-pitanga-dark/60">
              Cores oficiais: Verde Profundo, Verde Folha e Vermelho Pitanga.
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pitanga-dark">Produto</h4>
            <ul className="space-y-2 text-sm text-pitanga-dark/75">
              <li><button onClick={() => { setActiveTab('features'); window.scrollTo({ top: 0 }); }} className="hover:text-pitanga-red">Cardápio Digital</button></li>
              <li><button onClick={() => { setActiveTab('features'); window.scrollTo({ top: 0 }); }} className="hover:text-pitanga-red">KDS para Cozinha</button></li>
              <li><button onClick={() => { setActiveTab('features'); window.scrollTo({ top: 0 }); }} className="hover:text-pitanga-red">PDV & Fiscal</button></li>
              <li><button onClick={() => { setActiveTab('features'); window.scrollTo({ top: 0 }); }} className="hover:text-pitanga-red">Controle de Estoque</button></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pitanga-dark">Planos</h4>
            <ul className="space-y-2 text-sm text-pitanga-dark/75">
              <li><button onClick={() => { setActiveTab('pricing'); window.scrollTo({ top: 0 }); }} className="hover:text-pitanga-red">Essencial</button></li>
              <li><button onClick={() => { setActiveTab('pricing'); window.scrollTo({ top: 0 }); }} className="hover:text-pitanga-red">Profissional</button></li>
              <li><button onClick={() => { setActiveTab('pricing'); window.scrollTo({ top: 0 }); }} className="hover:text-pitanga-red">Franquias e Redes</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pitanga-dark">Identidade & Marca</h4>
            <p className="text-xs text-pitanga-dark/75">
              O manual oficial e os arquivos vetoriais estão disponíveis no repositório em <code>assets/brand/</code>.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0 }); }}
                className="text-xs font-semibold text-pitanga-red hover:underline"
              >
                Precisa de suporte ou integração? Fale com a gente →
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-pitanga-dark/60 gap-4">
          <p>© {new Date().getFullYear()} Pitanga Tecnologia para Food Service. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#termos" className="hover:text-pitanga-dark">Termos de Uso</a>
            <a href="#privacidade" className="hover:text-pitanga-dark">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
