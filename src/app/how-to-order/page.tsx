'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle, Phone } from 'lucide-react';

export default function HowToOrderPage() {
  const { language, t } = useLanguage();

  const waOrderText =
    language === 'bn'
      ? 'হ্যালো মোঃ মাজহারুল ইসলাম, আমি সাজমি ফ্যাশন থেকে অর্ডার করতে চাই।'
      : 'Hello Md Majharul Islam, I want to order from SajMi Fashion.';
  const waUrl = `https://wa.me/8801747615357?text=${encodeURIComponent(waOrderText)}`;

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-black">
            {t('how_page_title')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 mt-3 max-w-2xl mx-auto">
            {t('how_page_desc')}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Step by step */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-brand-500 text-white font-black text-xl rounded-2xl flex items-center justify-center mx-auto mb-4">
              ১
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {t('step1_title')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {t('step1_desc')}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-emerald-600 text-white font-black text-xl rounded-2xl flex items-center justify-center mx-auto mb-4">
              ২
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {t('step2_title')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {t('step2_desc')}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-blue-600 text-white font-black text-xl rounded-2xl flex items-center justify-center mx-auto mb-4">
              ৩
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {t('step3_title')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {t('step3_desc')}
            </p>
          </div>
        </div>

        {/* 3 Channels */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white text-center">
            {t('order_channels_title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t('channel_wa_name')}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  {t('channel_wa_desc')}
                </p>
                <p className="text-sm font-black text-emerald-700 dark:text-emerald-400 mt-4">
                  +880 1747-615357
                </p>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors block"
              >
                {t('btn_open_wa')}
              </a>
            </div>

            {/* Facebook */}
            <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  FB
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t('channel_fb_name')}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  {t('channel_fb_desc')}
                </p>
                <p className="text-sm font-black text-blue-700 dark:text-blue-400 mt-4">
                  SajMi Fashion Facebook
                </p>
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=100088521138103"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors block"
              >
                {t('btn_open_fb')}
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-2xl mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t('channel_phone_name')}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  {t('channel_phone_desc')}
                </p>
                <p className="text-sm font-black text-amber-700 dark:text-amber-400 mt-4">
                  01747-615357
                </p>
              </div>
              <a
                href="tel:01747615357"
                className="mt-6 w-full text-center py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors block"
              >
                {t('btn_call_now')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
