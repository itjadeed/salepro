export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  currentPrice: number;
  targetPrice: number;
  monthlySales: number;
  targetSales: number;
  marketingSpend: number;
  profitMargin: number;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SalesData {
  month: string;
  sales: number;
  revenue: number;
  units: number;
}

export interface MarketingChannel {
  name: string;
  spend: number;
  conversions: number;
  roi: number;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  avatar: string;
  bio: string;
  successStories: number;
  yearsExperience: number;
  isVerified: boolean;
}

export interface Consultation {
  id: string;
  expertId: string;
  productId: string;
  scheduledAt: Date;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Recommendation {
  id: string;
  productId: string;
  expertId: string;
  category: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedImpact: string;
  timeToImplement: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  avatar?: string;
}