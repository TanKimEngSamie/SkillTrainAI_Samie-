export type PageType =
  | 'home'
  | 'about'
  | 'solution'
  | 'features'
  | 'how-it-works'
  | 'industries'
  | 'pricing'
  | 'faqs'
  | 'contact';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface IndustryUseCase {
  id: string;
  industry: string;
  iconName: string;
  challenge: string;
  solution: string;
  impact: string;
  imageSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'security' | 'integration' | 'pricing';
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface DocumentSource {
  id: string;
  name: string;
  type: 'sop' | 'handbook' | 'faq' | 'policy';
  contentCount: string;
  lastUpdated: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  sources?: string[];
  confidence?: number;
}
