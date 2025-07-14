
import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Award } from 'lucide-react';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              elementsRef.current.forEach((el, index) => {
                if (el) {
                  setTimeout(() => {
                    el.classList.add('animate-slide-up');
                  }, index * 100);
                }
              });
            }
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      subtitle: "Resposta rápida",
      info: "(61) 98664-9007",
      description: "Atendimento instantâneo pelo WhatsApp. Envie fotos do problema e receba diagnóstico preliminar.",
      action: "Solicitar Orçamento",
      link: "https://wa.me/5561986649007?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento.",
      bgColor: "bg-green-600 hover:bg-green-700",
      popular: true
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Instagram",
      subtitle: "Redes sociais",
      info: "@recuperaassistencia",
      description: "Siga-nos no Instagram para dicas, novidades e promoções especiais.",
      action: "Seguir Instagram",
      link: "https://www.instagram.com/recuperaassistencia",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      popular: false
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 14:00" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-24 relative min-h-screen"
      style={{
        backgroundImage: `url('/lovable-uploads/69a48e2b-d0fd-4b71-a842-abe00864f7fd.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 opacity-0"
          >
            CONTATO
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl font-black text-white mb-6 opacity-0"
          >
            Solicite Seu Orçamento
            <br />
            <span className="text-gray-300">Sem Compromisso</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-xl text-white/90 max-w-3xl mx-auto opacity-0"
          >
            Entre em contato conosco através de diversos canais e receba um orçamento personalizado 
            para o reparo do seu equipamento.
          </p>
        </div>

        {/* Métodos de contato */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center opacity-0 hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-200"
            >
              {method.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MAIS RÁPIDO
                </div>
              )}

              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-black shadow-lg">
                {method.icon}
              </div>
              
              <h3 className="text-black font-bold text-xl mb-2">
                {method.title}
              </h3>
              
              <p className="text-gray-600 font-semibold text-sm mb-4">
                {method.subtitle}
              </p>

              <div className="text-2xl font-bold text-black mb-4">
                {method.info}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {method.description}
              </p>
              
              <a 
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-block w-full py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 ${method.bgColor}`}
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Localização e horários */}
          <div 
            ref={el => elementsRef.current[5] = el}
            className="opacity-0"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Localização & Horários</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-black mb-2">Endereço</h4>
                  <p className="text-gray-700">
                    Quadra 03, Conjunto 12, Casa 01<br />
                    Brasília - DF
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/EVqkUXFPEhWt5TDF9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 font-semibold text-sm mt-2 inline-block"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-6 w-6 text-black" />
                  <h4 className="font-bold text-black">Horário de Funcionamento</h4>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-semibold text-black">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    ⚡ Orçamentos via WhatsApp disponíveis 24h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div 
            ref={el => elementsRef.current[6] = el}
            className="opacity-0"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Como Chegar</h3>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d-47.8828!3d-15.7797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ2JzQ3LjAiUyA0N8KwNTInNTguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Recupera Assistência Técnica"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Garantias e benefícios */}
        <div 
          ref={el => elementsRef.current[7] = el}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 text-center mt-20 opacity-0"
        >
          <Award className="h-12 w-12 text-black mx-auto mb-6" />
          <h3 className="text-black text-3xl font-bold mb-4">
            Por Que Nos Escolher?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-black mb-2">Qualidade</div>
              <div className="text-black font-semibold mb-2">Sempre Garantida</div>
              <div className="text-gray-600 text-sm">Comprometidos com a excelência em cada serviço</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">Preço</div>
              <div className="text-black font-semibold mb-2">Sempre Justo</div>
              <div className="text-gray-600 text-sm">Alta qualidade por um preço acessível</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">Variedade</div>
              <div className="text-black font-semibold mb-2">Todas as Marcas</div>
              <div className="text-gray-600 text-sm">Trabalhamos com a maior variedade de marcas e modelos</div>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://wa.me/5561986649007?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado%20para%20meus%20equipamentos." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              SOLICITAR ORÇAMENTO PERSONALIZADO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
