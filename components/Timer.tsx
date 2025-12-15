import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface TimerProps {
  initialMinutes: number;
  initialSeconds: number;
}

export const Timer: React.FC<TimerProps> = ({ initialMinutes, initialSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60 + initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="flex flex-col items-center justify-center space-y-1 my-3">
      <span className="text-text-muted text-xs font-medium uppercase tracking-wide">
        Tempo restante para garantir esse preço
      </span>
      <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg border border-red-100 shadow-sm animate-pulse">
        <TimerIcon className="w-5 h-5" />
        <span className="text-3xl font-mono font-bold tracking-wider">
          {formattedTime}
        </span>
      </div>
    </div>
  );
};