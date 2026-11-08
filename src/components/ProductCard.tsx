'use client';

import React from 'react';
import { Product } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import {
  Shirt,
  Sparkles,
  Smile,
  Headphones,
  BatteryCharging,
  Cable,
  Utensils,
  Droplet,
  Coffee,
  Heart,
  ShoppingBag,
  Flashlight,
  Package,
  MessageCircle,
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  const displayName = language === 'bn' ? product.nameBn : product.nameEn;

  const orderMessage =
    language === 'bn'
      ? `হ্যালো মোঃ মাজহারুল ইসলাম, আমি সাজমি স্টোর থেকে "${displayName}" (৳${product.price}) অর্ডার করতে চাই।`
      : `Hello Md Majharul Islam, I want to order "${displayName}" (৳${product.price}) from Sajmi Store.`;

  const whatsappUrl = `https://wa.me/8801747615357?text=${encodeURIComponent(orderMessage)}`;
  const fbUrl = 'https://www.facebook.com/profile.php?id=100088521138103';

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-14 h-14' };
    switch (iconName) {
      case 'shirt':
        return <Shirt {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'smile':
        return <Smile {...props} />;
      case 'headphones':
        return <Headphones {...props} />;
      case 'battery-charging':
        return <BatteryCharging {...props} />;
      case 'cable':
        return <Cable {...props} />;
      case 'utensils':
        return <Utensils {...props} />;
      case 'droplet':
        return <Droplet {...props} />;
      case 'coffee':
        return <Coffee {...props} />;
      case 'heart':
        return <Heart {...props} />;
      case 'shopping-bag':
        return <ShoppingBag {...props} />;
      case 'flashlight':
        return <Flashlight {...props} />;
      default:
        return <Package {...props} />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
      <div>
        {/* Visual Box */}
        <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-brand-50 to-amber-50 dark:from-slate-800 dark:to-slate-850 flex items-center justify-center text-brand-600 dark:text-brand-400 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
          {renderIcon(product.icon)}
          <span className="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
          <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            -{discount}% {t('off')}
          </span>
        </div>

        {/* Title & Price */}
        <h4 className="font-bold text-sm text-gray-900 dark:text-white mt-4 line-clamp-2 leading-snug">
          {displayName}
        </h4>

        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-xl font-black text-brand-600 dark:text-brand-500">
            ৳{product.price}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ৳{product.originalPrice}
          </span>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold ml-auto">
            {t('in_stock')}
          </span>
        </div>
      </div>

      {/* Direct Order Actions */}
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href={fbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
        >
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}

