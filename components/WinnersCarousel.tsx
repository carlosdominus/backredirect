import React, { useState, useEffect } from 'react';
import { Trophy, CalendarCheck, Wallet } from 'lucide-react';
import { WinnerData } from '../types';

const winners: WinnerData[] = [
  { id: 1, name: "Roberto S.", location: "Campinas, SP", prize: "R$ 4.230,00", lottery: "Lotofácil (14 pts)", date: "Ontem" },
  { id: 2, name: "Marta L.", location: "Belo Horizonte, MG", prize: "R$ 1.890,00", lottery: "Quina (Quadra)", date: "Hoje" },
  { id: 3, name: "Carlos D.", location: "Porto Alegre, RS", prize: "R$ 890,00", lottery: "Lotofácil", date: "Há 2 horas" },
  { id: 4, name: "Fernanda P.", location: "Niterói, RJ", prize: "R$ 3.150,00", lottery: "Lotomania", date: "Ontem" },
  { id: 5, name: "Paulo H.", location: "Salvador, BA", prize: "R$ 12.500,00", lottery: "Bolão Quina", date: "3 dias atrás" },
];

export const WinnersCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % winners.length);
    }, 3500); // 3.5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-4 bg-green-50/40 border-y border-green-100 mb-8">
      <div className="max-w-md mx-auto px-6"> {/* max-w-md keeps it compact/small on desktop */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Trophy className="w-4 h-4 text-yellow-600 fill-yellow-600" />
          <h3 className="text-xs font-bold text-primary uppercase tracking-wide text-center">
            Últimos Ganhadores
          </h3>
        </div>
        
        {/* Carousel Window */}
        <div className="relative overflow-hidden rounded-xl shadow-sm border border-gray-100 bg-white">
          <div 
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {winners.map((winner) => (
              <div 
                key={winner.id} 
                className="w-full flex-shrink-0 p-3 flex items-center justify-between gap-3"
              >
                {/* Left Side: Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-primary bg-primary/5 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      {winner.lottery}
                    </span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-0.5 whitespace-nowrap">
                      <CalendarCheck className="w-2.5 h-2.5" /> {winner.date}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-text-main truncate leading-tight">{winner.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{winner.location}</p>
                </div>

                {/* Right Side: Prize */}
                <div className="text-right flex-shrink-0 bg-green-50 pl-3 pr-2 py-1 rounded-l-lg -mr-3 border-l-2 border-green-200">
                  <div className="flex items-center justify-end gap-1 mb-0.5">
                    <Wallet className="w-3 h-3 text-green-700" />
                    <span className="text-[9px] text-green-800 font-bold uppercase">Sacado</span>
                  </div>
                  <p className="text-base font-bold text-green-700 leading-none">{winner.prize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators (Dots) */}
        <div className="flex justify-center gap-1.5 mt-3">
          {winners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-4 bg-primary' 
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};