import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { TabType } from '../App';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; tab: TabType }[] = [
    { label: 'Início', tab: 'home' },
    { label: 'Recursos', tab: 'features' },
    { label: 'Planos', tab: 'pricing' },
    { label: 'Contato', tab: 'contact' },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-pitanga-ivory/95 backdrop-blur-md border-b border-pitanga-border/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 focus:outline-none group text-left"
        >
          <img 
            src="/logotipo_pitanga.svg" 
            alt="Pitanga" 
            className="h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.tab}
              onClick={() => handleNavClick(link.tab)}
              className={`text-sm font-medium transition-colors ${
                activeTab === link.tab
                  ? 'text-pitanga-red font-semibold'
                  : 'text-pitanga-dark hover:text-pitanga-green'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('contact')}
            className="text-sm font-medium text-pitanga-dark hover:text-pitanga-green px-4 py-2"
          >
            Entrar
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-pitanga-red hover:bg-[#c93e32] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            <span>Experimente grátis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-pitanga-dark focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-pitanga-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.tab}
              onClick={() => handleNavClick(link.tab)}
              className={`block w-full text-left py-2 text-base font-medium ${
                activeTab === link.tab ? 'text-pitanga-red font-semibold' : 'text-pitanga-dark'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-pitanga-border flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center py-2.5 text-sm font-medium text-pitanga-dark border border-pitanga-border rounded-xl"
            >
              Entrar
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center py-3 text-sm font-medium text-white bg-pitanga-red rounded-xl shadow"
            >
              Começar agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
