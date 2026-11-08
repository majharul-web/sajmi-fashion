export type Category = 'All' | 'Men' | 'Women' | 'Kids' | 'Traditional' | 'Accessories';

export interface Product {
  id: number;
  nameBn: string;
  nameEn: string;
  category: 'Men' | 'Women' | 'Kids' | 'Traditional' | 'Accessories';
  price: number;
  originalPrice: number;
  icon: string;
  inStock: boolean;
  featured?: boolean;
}

export type Language = 'bn' | 'en';
export type Theme = 'light' | 'dark';
