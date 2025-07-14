
import React from 'react';
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/95 backdrop-blur-md text-white pt-14 pb-8 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/5d3ab6d7-376c-4bcb-a236-ea9456f031e3.png" 
                alt="Recupera Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  RECUPERA
                </h3>
                <p className="text-xs text-gray-300">Assistência Técnica</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-sm">
              Comprometidos com a excelência: cada cliente, cada detalhe, sempre com qualidade. Recuperamos seus equipamentos com dedicação e profissionalismo.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('how-it-works');
                  }}
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contato
            </h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>Quadra 03, Conjunto 12, Casa 01</p>
              <p>Brasília - DF</p>
              <p>+55 (61) 98664-9007</p>
              <p>recuperaassistencia@gmail.com</p>
              <a 
                href="https://www.instagram.com/recuperaassistencia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 block"
              >
                @recuperaassistencia
              </a>
            </address>
          </div>
        </div>
        
        <hr className="border-white/20 mb-8" />
        
        <div className="text-center text-white/80 text-sm">
          <p>&copy; {currentYear} Recupera Assistência Técnica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
