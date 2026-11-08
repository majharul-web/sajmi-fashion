export type Category = 'All' | 'Clothing' | 'Electronics' | 'Home' | 'Cosmetics' | 'Groceries';

export interface Product {
  id: number;
  nameBn: string;
  nameEn: string;
  category: 'Clothing' | 'Electronics' | 'Home' | 'Cosmetics' | 'Groceries';
  price: number;
  originalPrice: number;
  icon: string;
  inStock: boolean;
  featured?: boolean;
}

export type Language = 'bn' | 'en';
export type Theme = 'light' | 'dark';

