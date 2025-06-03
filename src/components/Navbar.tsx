'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo central */}
          <Link href="/" className="text-2xl font-bold text-white mb-2">
            <span className="text-[#FEAC0E]">DEPS</span> MODELS
          </Link>
          
          {/* Links de navegação em desktop */}
          <div className="hidden md:flex justify-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#portfolio">Portfólio</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#about">Sobre Nós</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </div>
          
          {/* Menu mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menu mobile expandido */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 px-4 flex flex-col items-center space-y-4">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</NavLink>
            <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>Sobre Nós</NavLink>
            <NavLink href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-[#FEAC0E] transition-colors duration-200 font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}