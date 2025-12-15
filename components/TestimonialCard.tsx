import React from 'react';
import { Star, CheckCircle2, User, Calendar, Bell, Target, Clock } from 'lucide-react';
import { TestimonialData } from '../types';

interface TestimonialCardProps {
  data: TestimonialData;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  // Helper to render specific icons based on the raw text tag
  const renderTagIcon = (tag: string) => {
    if (tag.includes('verificado')) return <CheckCircle2 className="w-3 h-3 text-blue-500" />;
    if (tag.includes('resultado')) return <Target className="w-3 h-3 text-red-500" />;
    if (tag.includes('bônus')) return <Bell className="w-3 h-3 text-yellow-500" />;
    if (tag.includes('comentário')) return <Clock className="w-3 h-3 text-gray-500" />;
    return <Calendar className="w-3 h-3 text-primary" />;
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-3">
        <div className="relative">
          <img 
            src={`https://picsum.photos/seed/${data.avatarId}/150/150`} 
            alt={data.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
          />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
            {renderTagIcon(data.tag)}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-text-main text-sm leading-tight">{data.name}</h4>
          <p className="text-xs text-primary font-medium mt-0.5 flex items-center gap-1 bg-primary/5 px-2 py-0.5 rounded-full w-fit">
            {data.tag}
          </p>
        </div>
      </div>

      <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow italic">
        "{data.content}"
      </p>

      <div className="flex gap-0.5 mt-auto">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < data.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
          />
        ))}
      </div>
    </div>
  );
};