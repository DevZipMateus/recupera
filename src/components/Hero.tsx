
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, Shield, Clock, Award, Star } from 'lucide-react';

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 overflow-hidden px-4 sm:px-6"
      style={{
        backgroundImage: `url('/lovable-uploads/69a48e2b-d0fd-4b71-a842-abe00864f7fd.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay esmaecido para melhor contraste */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-7xl">
          
        {/* Badge de credibilidade */}
        <div 
          ref={el => elementsRef.current[0] = el}
          className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 lg:py-3 mb-4 sm:mb-6 lg:mb-8 opacity-0 shadow-lg"
        >
          <Award className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
          <span className="text-black font-medium text-xs sm:text-sm lg:text-base">Assistência Técnica de Confiança</span>
        </div>
        
        {/* Título principal */}
        <h1 
          ref={el => elementsRef.current[1] = el}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light mb-3 sm:mb-4 lg:mb-6 opacity-0 leading-tight tracking-tight px-2"
          style={{ 
            animationDelay: '200ms',
            color: '#ffffff',
            textShadow: '0 4px 30px rgba(0,0,0,0.9)',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
          }}
        >
          RECUPERA
          <br />
          <span 
            className="font-medium block mt-1 sm:mt-2"
            style={{
              color: '#ffffff',
              textShadow: '0 4px 40px rgba(255, 255, 255, 0.8)'
            }}
          >
            ASSISTÊNCIA TÉCNICA
          </span>
        </h1>
        
        {/* Subtítulo */}
        <p 
          ref={el => elementsRef.current[2] = el}
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto mb-4 sm:mb-6 lg:mb-8 font-light opacity-0 leading-relaxed tracking-wide px-2"
          style={{ 
            animationDelay: '400ms',
            textShadow: '0 2px 15px rgba(0,0,0,0.8)',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
          }}
        >
          Especialistas em <span className="text-gray-300 font-medium">Celulares, Computadores e Notebooks</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline mt-1 sm:mt-0"> Reparos • Vendas de Acessórios • Orçamento gratuito</span>
        </p>

        {/* Estatísticas de credibilidade */}
        <div 
          ref={el => elementsRef.current[3] = el}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 opacity-0 px-2"
          style={{ animationDelay: '600ms' }}
        >
          <div className="bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 border border-white/20">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-white mb-1">Qualidade</div>
            <div className="text-xs sm:text-sm text-white/90 font-light tracking-wide">Sempre Garantida</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-xs sm:text-sm text-white/90 font-light tracking-wide">Preço Acessível</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 lg:py-6 border border-white/20">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-white mb-1">Variedade</div>
            <div className="text-xs sm:text-sm text-white/90 font-light tracking-wide">Todas as Marcas</div>
          </div>
        </div>

        {/* Diferenciais principais */}
        <div 
          ref={el => elementsRef.current[4] = el}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 opacity-0 px-2"
          style={{ animationDelay: '800ms' }}
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-black/50 backdrop-blur-md rounded-full px-3 sm:px-4 lg:px-6 xl:px-8 py-2.5 sm:py-3 lg:py-4 border border-white/20">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-gray-300 flex-shrink-0" />
            <span className="text-white font-light tracking-wide text-xs sm:text-sm lg:text-base">Garantia Assegurada</span>
          </div>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-black/50 backdrop-blur-md rounded-full px-3 sm:px-4 lg:px-6 xl:px-8 py-2.5 sm:py-3 lg:py-4 border border-white/20">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-gray-300 flex-shrink-0" />
            <span className="text-white font-light tracking-wide text-xs sm:text-sm lg:text-base">Atendimento Rápido</span>
          </div>
        </div>
        
        {/* Call to Actions */}
        <div 
          ref={el => elementsRef.current[5] = el}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 opacity-0 px-2"
          style={{ animationDelay: '1000ms' }}
        >
          <a 
            href="https://wa.me/5561986649007?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento." 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-gray-500 hover:border-gray-400 tracking-wide text-center"
          >
            ORÇAMENTO GRATUITO AGORA
          </a>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/30 tracking-wide text-center"
          >
            CONHEÇA NOSSOS SERVIÇOS
          </button>
        </div>

        {/* Slogan */}
        <div 
          ref={el => elementsRef.current[6] = el}
          className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 opacity-0 px-2"
          style={{ animationDelay: '1200ms' }}
        >
          <p className="text-white/90 text-sm sm:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 lg:mb-6 font-light tracking-wide max-w-4xl mx-auto">
            "Comprometidos com a excelência: cada cliente, cada detalhe, sempre com qualidade."
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 lg:gap-x-8 xl:gap-x-12 gap-y-2 text-white/80 text-xs sm:text-sm font-light tracking-wide">
            <span>• Celulares</span>
            <span>• Computadores</span>
            <span>• Notebooks</span>
            <span>• Acessórios</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToServices}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
      </button>
    </section>
  );
};

export default Hero;
