export interface TestimonialData {
  avatarId: number;
  avatarLabel: string; // Used for alt text or internal logic based on prompt
  name: string;
  tag: string;
  tagIcon?: string;
  content: string;
  rating: number;
  gender: 'male' | 'female';
}

export interface WinnerData {
  id: number;
  name: string;
  location: string;
  prize: string;
  lottery: string;
  date: string;
}

export interface TimerProps {
  initialSeconds: number;
}