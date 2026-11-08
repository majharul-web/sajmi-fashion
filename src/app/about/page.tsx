'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, MessageCircle, User } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-700 via-orange-800 to-amber-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
            {t('about_tag')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-1">
            {t('about_title')}
          </h1>
          <p className="text-sm sm:text-base text-orange-100 mt-2">
            {t('about_desc')}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Owner Profile Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-slate-800 shadow-xl grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center">
            <div className="w-36 h-36 mx-auto rounded-3xl bg-gradient-to-tr from-brand-600 via-orange-500 to-amber-400 text-white flex items-center justify-center text-6xl shadow-xl shadow-brand-500/20 mb-4">
              <span className="font-black text-5xl">M</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white">
              {t('owner_name')}
            </h3>
            <p className="text-xs font-bold text-brand-600 dark:text-brand-400">
              {t('owner_role')}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {t('owner_loc')}
            </p>

            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100088521138103"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://wa.me/8801747615357"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:01747615357"
                className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center text-sm hover:scale-110 transition-transform"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold">
              {t('owner_words_tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              {t('owner_quote')}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('owner_story_1')}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('owner_story_2')}
            </p>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-400">
              {t('roadmap_tag')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-1">
              {t('roadmap_title')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              {t('roadmap_desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 relative">
              <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                {t('phase1_badge')}
              </span>
              <h4 className="text-base font-bold mt-3">{t('phase1_title')}</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                {t('phase1_desc')}
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 relative">
              <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                {t('phase2_badge')}
              </span>
              <h4 className="text-base font-bold mt-3">{t('phase2_title')}</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                {t('phase2_desc')}
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-brand-500/40 relative">
              <span className="bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                {t('phase3_badge')}
              </span>
              <h4 className="text-base font-bold mt-3">{t('phase3_title')}</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                {t('phase3_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
