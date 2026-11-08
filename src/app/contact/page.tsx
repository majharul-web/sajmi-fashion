'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import OrderMessageBuilder from '@/components/OrderMessageBuilder';
import { Phone, MessageCircle, MapPin, User, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-black text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
            {t('contact_page_tag')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-1">
            {t('contact_page_title')}
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            {t('contact_page_desc')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Store Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-gray-900 dark:text-white">
                {t('store_info_title')}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">
                      {t('c_owner_tag')}
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      {t('c_owner_val')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">
                      {t('c_phone_tag')}
                    </p>
                    <a
                      href="tel:01747615357"
                      className="text-sm font-bold text-emerald-600 hover:underline"
                    >
                      01747615357
                    </a>
                    <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      {t('c_phone_time')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    FB
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">
                      {t('c_fb_tag')}
                    </p>
                    <a
                      href="https://www.facebook.com/profile.php?id=100088521138103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-600 hover:underline"
                    >
                      SajMi Fashion Facebook Page
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">
                      {t('c_address_tag')}
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      {t('c_address_val')}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      রংপুর বিভাগ, বাংলাদেশ
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-slate-800">
                <a
                  href="https://wa.me/8801747615357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('btn_open_wa')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Builder */}
          <div className="lg:col-span-7">
            <OrderMessageBuilder />
          </div>
        </div>
      </div>
    </div>
  );
}

