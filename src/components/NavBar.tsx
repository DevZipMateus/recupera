import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Como Funciona', id: 'how-it-works' },
    { name: 'Avaliações', id: 'reviews' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md shadow-lg",
        scrolled 
          ? "py-2 sm:py-3" 
          : "py-3 sm:py-4"
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#home" 
            className="flex items-center space-x-2 sm:space-x-3 font-display font-bold text-base sm:text-lg lg:text-xl xl:text-2xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <img 
              src="/lovable-uploads/5d3ab6d7-376c-4bcb-a236-ea9456f031e3.png" 
              alt="Recupera Logo" 
              className="h-6 w-auto sm:h-8 lg:h-10 xl:h-12 flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="hidden xs:inline leading-none transition-colors duration-300 text-sm sm:text-base lg:text-lg xl:text-xl text-black">
                RECUPERA
              </span>
              <span className="hidden sm:inline text-xs lg:text-sm leading-none transition-colors duration-300 text-gray-600">
                Assistência Técnica
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-6 2xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-medium relative group transition-colors duration-300 text-sm xl:text-base py-2 px-1 text-black hover:text-gray-600"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation with Sheet component */}
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className="lg:hidden p-2 rounded-md transition-colors touch-manipulation text-black hover:bg-gray-100"
              aria-label="Open menu"
            >
              <Menu size={18} className="sm:w-5 sm:h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[80%] p-0 bg-gradient-to-br from-white to-gray-50 border-l-4 border-black">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2 sm:space-x-3 font-display font-bold text-base sm:text-lg text-black">
                  <img 
                    src="/lovable-uploads/5d3ab6d7-376c-4bcb-a236-ea9456f031e3.png" 
                    alt="Recupera Logo" 
                    className="h-5 w-auto sm:h-6 lg:h-8 flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-black leading-none text-sm sm:text-base">RECUPERA</span>
                    <span className="text-xs text-gray-600 leading-none">Assistência Técnica</span>
                  </div>
                </div>
                <SheetClose className="p-2 rounded-full hover:bg-gray-100 transition-all touch-manipulation">
                  <X className="text-black" size={16} />
                </SheetClose>
              </div>
              <nav className="flex flex-col items-stretch justify-start flex-1 mt-2 sm:mt-4">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={cn(
                      "text-black text-sm sm:text-base font-medium hover:bg-gray-100 transition-all w-full text-center py-3 sm:py-4 px-4 flex items-center justify-center touch-manipulation",
                      "relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-1/3"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      setTimeout(() => scrollToSection(link.id), 100);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="p-4 sm:p-6 border-t border-gray-200 mt-auto">
                <div className="text-gray-600 text-xs text-center leading-relaxed">
                  © 2024 Recupera Assistência Técnica<br />
                  Todos os direitos reservados
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
