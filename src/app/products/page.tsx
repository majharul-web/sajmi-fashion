'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { productsData } from '@/data/products';
import { Category } from '@/types';
import ProductCard from '@/components/ProductCard';
import { Search, MessageCircle } from 'lucide-react';

function ProductsCatalogContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as Category) || 'All';

  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('category') as Category;
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories: { key: Category; label: string }[] = [
    { key: 'All', label: t('cat_all') },
    { key: 'Men', label: t('cat_men') },
    { key: 'Women', label: t('cat_women') },
    { key: 'Traditional', label: t('cat_traditional') },
    { key: 'Kids', label: t('cat_kids') },
    { key: 'Accessories', label: t('cat_accessories') },
  ];

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.nameBn.toLowerCase().includes(query) ||
      p.nameEn.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Catalog Header */}
      <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black">
              {t('catalog_header_title')}
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              {t('catalog_header_desc')}
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">{t('how_order_badge_title')}</p>
              <p className="text-gray-300">{t('how_order_badge_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all whitespace-nowrap ${
                    isSelected
                      ? 'border-brand-500 bg-brand-500 text-white shadow-md shadow-brand-500/20'
                      : 'border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:border-brand-500'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search_placeholder')}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
            />
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-gray-400 mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-white">
              {t('no_item_title')}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {t('no_item_desc')}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-brand-600 text-white text-xs font-bold"
            >
              {t('show_all_btn')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm">Loading catalog...</div>}>
      <ProductsCatalogContent />
    </Suspense>
  );
}
