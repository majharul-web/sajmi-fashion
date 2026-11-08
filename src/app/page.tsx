'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { productsData } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import {
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  ShoppingBag,
  DollarSign,
  UserCheck,
  Zap,
  Shirt,
  Smile,
  Crown,
  Watch,
} from 'lucide-react';

export default function HomePage() {
  const { language, t } = useLanguage();
  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 4);

  const categories = [
    {
      key: 'Men',
      icon: Shirt,
      label: t('cat_men'),
      sub: t('cat_men_sub'),
      color: 'text-orange-600 bg-orange-100 dark:bg-orange-950/50',
    },
    {
      key: 'Women',
      icon: Sparkles,
      label: t('cat_women'),
      sub: t('cat_women_sub'),
      color: 'text-pink-600 bg-pink-100 dark:bg-pink-950/50',
    },
    {
      key: 'Traditional',
      icon: Crown,
      label: t('cat_traditional'),
      sub: t('cat_traditional_sub'),
      color: 'text-amber-600 bg-amber-100 dark:bg-amber-950/50',
    },
    {
      key: 'Kids',
      icon: Smile,
      label: t('cat_kids'),
      sub: t('cat_kids_sub'),
      color: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-950/50',
    },
    {
      key: 'Accessories',
      icon: Watch,
      label: t('cat_accessories'),
      sub: t('cat_accessories_sub'),
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-950/50',
    },
  ];

  const waOrderText =
    language === 'bn'
      ? 'হ্যালো মোঃ মাজহারুল ইসলাম, আমি সাজমি ফ্যাশন থেকে অর্ডার করতে চাই।'
      : 'Hello Md Majharul Islam, I want to order from SajMi Fashion.';
  const waUrl = `https://wa.me/8801747615357?text=${encodeURIComponent(waOrderText)}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                {t('hero_badge')}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                <span>{t('hero_title_1')}</span> <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-amber-500">
                  {t('hero_title_2')}
                </span>
              </h1>

              <p
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('hero_desc') }}
              />

              {/* Order Channels Alert Notice */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">{t('hero_notice_title')}</span>
                  <p className="text-xs sm:text-sm mt-0.5 opacity-90">
                    {t('hero_notice_desc')}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  href="/products"
                  className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t('btn_browse_products')}</span>
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>01747615357 (WhatsApp)</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100088521138103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>{t('btn_fb_page')}</span>
                </a>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-slate-800">
                <div>
                  <p className="text-2xl font-black text-brand-600 dark:text-brand-500">100%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{t('stat_1')}</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900 dark:text-white">{t('stat_2_title')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{t('stat_2')}</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-amber-500">2026</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{t('stat_3')}</p>
                </div>
              </div>
            </div>

            {/* Hero Interactive Order Card */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-slate-800 relative">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-amber-500 text-white flex items-center justify-center font-black text-xl">
                      S
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        SajMi Fashion (সাজমি ফ্যাশন)
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t('owner_address')}
                      </p>
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="py-6 space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {t('how_order_fast')}
                  </p>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">
                          {t('channel_wa_title')}
                        </p>
                        <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                          01747615357
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100088521138103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        FB
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">
                          {t('channel_fb_title')}
                        </p>
                        <p className="text-[11px] text-blue-700 dark:text-blue-400">
                          {t('channel_fb_sub')}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="tel:01747615357"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">
                          {t('channel_phone_title')}
                        </p>
                        <p className="text-[11px] text-amber-700 dark:text-amber-400">
                          01747615357
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t('onsite_visit')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1">
            {t('sec_cat_tag')}
          </h2>
          <p className="text-3xl font-black text-gray-900 dark:text-white">
            {t('sec_cat_title')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {t('sec_cat_desc')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.key}
                href={`/products?category=${cat.key}`}
                className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 shadow-sm hover:shadow-md transition-all text-center block"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-3 rounded-2xl ${cat.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-sm text-gray-800 dark:text-gray-100">
                  {cat.label}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">{cat.sub}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-12 bg-gray-100/70 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                {t('featured_title')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {t('featured_sub')}
              </p>
            </div>
            <Link
              href="/products"
              className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
            >
              <span>{t('view_all')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SajMi Fashion */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 text-center sm:text-left">
            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-950 text-brand-600 rounded-2xl flex items-center justify-center text-xl mb-4 mx-auto sm:mx-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {t('why_1_title')}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('why_1_desc')}
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 text-center sm:text-left">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-2xl flex items-center justify-center text-xl mb-4 mx-auto sm:mx-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {t('why_2_title')}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('why_2_desc')}
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 text-center sm:text-left">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 text-blue-600 rounded-2xl flex items-center justify-center text-xl mb-4 mx-auto sm:mx-0">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {t('why_3_title')}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('why_3_desc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
