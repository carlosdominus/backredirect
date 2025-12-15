import React, { useEffect, useState } from 'react';
import { AlertTriangle, Lock, ShieldCheck, Zap } from 'lucide-react';
import { Button } from './components/Button';
import { Timer } from './components/Timer';
import { TestimonialCard } from './components/TestimonialCard';
import { WinnersCarousel } from './components/WinnersCarousel'; // Import added
import { TestimonialData } from './types';

// Data from user prompt
const testimonials: TestimonialData[] = [
  {
    avatarId: 101,
    avatarLabel: "Avatar Ana",
    name: "Marcos S, RJ",
    tag: "👏 Usuário desde Jan", 
    content: "O LotoApp mudou meu jeito de jogar — comecei a ter muito mais acertos. Simples de usar e rápido. Recomendo!",
    rating: 5,
    gender: 'female' 
  },
  {
    avatarId: 102,
    avatarLabel: "Avatar Marcos",
    name: "Ana P, SP",
    tag: "🕒 último comentário: 2h",
    content: "Peguei sequência de acertos que nunca tive antes — o gerador é impressionante. Usei as opções rápidas e funcionou.",
    rating: 5,
    gender: 'male'
  },
  {
    avatarId: 103,
    avatarLabel: "Avatar Juliana",
    name: "Juliana R., BA",
    tag: "✔️ verificado",
    content: "Rápido, prático e com sugestões muito melhores do que eu fazia antes. Já recuperei o valor do app nas 2 primeiras semanas.",
    rating: 4,
    gender: 'female'
  },
  {
    avatarId: 104,
    avatarLabel: "Avatar Felipe",
    name: "Felipe M., PR",
    tag: "🎯 resultado recente",
    content: "Testei várias combinações e o gerador entrega números consistentes. Me surpreendeu a praticidade.",
    rating: 5,
    gender: 'male'
  },
  {
    avatarId: 105,
    avatarLabel: "Avatar Rosa",
    name: "Rosa L., MG",
    tag: "📅 usuária 1 mês",
    content: "Eu recomendo para quem quer organizar jogos sem estresse. Dá pra ajustar nível de risco e salvar combinações.",
    rating: 4,
    gender: 'female'
  },
  {
    avatarId: 106,
    avatarLabel: "Avatar Ricardo",
    name: "Ricardo F., PE",
    tag: "🔔 ganhou bônus",
    content: "Funciona como organizador de palpites — a assertividade varia, mas melhorou meus resultados em relação ao que eu fazia.",
    rating: 5,
    gender: 'male'
  }
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => {
    // Placeholder for actual checkout logic
    console.log("Redirecting to checkout...");
  };

  return (
    <div className="min-h-screen bg-secondary pb-24 md:pb-12 font-sans selection:bg-primary/20">
      
      {/* Top Notification Bar - Made slimmer */}
      <div className="bg-primary-dark text-white py-1.5 px-4 text-center text-xs md:text-sm font-medium animate-fade-in-down sticky top-0 z-50 shadow-md">
        <span className="inline-flex items-center gap-2">
          <Zap className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
          58 pessoas investiram no App nas últimas 2 horas.
        </span>
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-4">
        
        {/* Main Offer Container */}
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center mb-6">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
             <div className="inline-block bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase border border-red-200">
              Última Chance
            </div>
            <h2 className="text-text-muted font-medium text-xs md:text-sm">
              Normalmente quem sai agora se arrepende depois.
            </h2>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-text-main mb-4 leading-tight">
            ⚠️ Espera! Não Saia Ainda...
          </h1>

          {/* Core Offer Card - Compacted padding */}
          <div className="w-full bg-white rounded-xl shadow-floating border border-gray-100 p-4 md:p-6 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-red-500 to-primary"></div>

            <div className="space-y-3 md:space-y-4">
              {/* Warning Box - Text restored */}
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-100 text-left flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-orange-800 text-sm leading-tight">
                    Esta condição especial não estará disponível novamente.
                  </p>
                  <p className="text-orange-800/90 text-xs leading-snug">
                    Liberamos uma última chance para você garantir agora — antes que expire.
                  </p>
                </div>
              </div>

              {/* Price Section - Text restored */}
              <div className="py-3 border-t border-b border-gray-100">
                <p className="text-sm md:text-base text-text-main leading-snug">
                  ⚠️ Oferta relâmpago: de <span className="line-through text-text-muted">R$197</span> por apenas <span className="font-bold text-green-600 text-xl">R$97,00</span> — exclusivo SOMENTE se você clicar no botão abaixo agora.
                </p>
              </div>

              <Timer initialMinutes={3} initialSeconds={35} />

              <div className="space-y-3">
                <Button onClick={handleCTA} fullWidth pulse className="text-lg md:text-xl py-4 shadow-primary/30">
                  Quero Garantir por R$97,00
                </Button>
                
                {/* Trust Seals Section - Colors Restored */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-2">
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4 text-green-600" />
                     <span className="text-xs text-text-muted font-medium">Ambiente Seguro</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://i.ibb.co/zH6rRHBg/google.png" 
                      alt="Google Safe Browsing" 
                      className="h-6 w-auto object-contain"
                    />
                    <img 
                      src="https://i.ibb.co/1Y27fWg9/Selo-de-Garantia-de-30-Dias-PNG-Transparente-Sem-Fundo.png" 
                      alt="Garantia 30 Dias" 
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <p className="text-xs text-text-muted bg-gray-50 p-2 rounded-lg mt-2">
                Últimas 24h: <span className="font-bold text-text-main">312 pessoas</span> ativaram essa condição.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Winners Carousel Section */}
      <WinnersCarousel />

      <main className="max-w-4xl mx-auto px-4 md:px-6 pb-4">
        {/* Social Proof Section */}
        <div className="mt-4 md:mt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-text-main mb-2">
              O que as pessoas estão dizendo sobre o LotoApp
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} data={t} />
            ))}
          </div>

          <p className="text-center text-xs text-text-muted mt-8 italic opacity-70">
            *Depoimentos reais. Os Resultados individuais podem variar.*
          </p>
        </div>

        {/* Second CTA Section */}
        <div className="mt-12 flex justify-center pb-8">
           <Button onClick={handleCTA} className="px-12 py-4 text-lg">
             Quero Garantir por R$97,00
           </Button>
        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)] transition-transform duration-300 z-50`}>
        <Button onClick={handleCTA} fullWidth className="py-3 text-base">
          Quero Garantir por R$97,00
        </Button>
      </div>

    </div>
  );
};

export default App;