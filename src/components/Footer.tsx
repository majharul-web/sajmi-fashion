'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Store Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
                S
              </div>
              <span className="text-xl font-black text-white">Sajmi Store</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('footer_desc')}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/profile.php?id=100088521138103"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                aria-label="Facebook Page"
              >
                FB
              </a>
              <a
                href="https://wa.me/8801747615357"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center text-sm transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:01747615357"
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-brand-600 text-gray-300 hover:text-white flex items-center justify-center text-sm transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase mb-4">
              {t('footer_pages_title')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-brand-400 transition-colors">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-400 transition-colors">
                  {t('nav_products')}
                </Link>
              </li>
              <li>
                <Link href="/how-to-order" className="hover:text-brand-400 transition-colors">
                  {t('nav_how')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-400 transition-colors">
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">
                  {t('nav_contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Ordering Channels */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase mb-4">
              {t('footer_order_channels')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://wa.me/8801747615357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp: 01747615357
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100088521138103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center gap-2"
                >
                  Facebook Page Messenger
                </a>
              </li>
              <li>
                <a href="tel:01747615357" className="hover:text-amber-400 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-500" /> Call: 01747615357
                </a>
              </li>
              <li className="text-gray-500 text-[11px] pt-1">
                {t('footer_future_note')}
              </li>
            </ul>
          </div>

          {/* Location & Owner */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase mb-4">
              {t('footer_owner_title')}
            </h4>
            <div className="text-xs space-y-2 text-gray-400">
              <p>
                <strong className="text-white">{t('f_owner_lbl')}</strong>{' '}
                {t('c_owner_val')}
              </p>
              <p>
                <strong className="text-white">{t('f_loc_lbl')}</strong>{' '}
                {t('c_address_val')}
              </p>
              <p>
                <strong className="text-white">{t('f_phone_lbl')}</strong> 01747615357
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Sajmi Store (সাজমি স্টোর). All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>{t('f_sub_loc')}</span>
            <span>•</span>
            <span className="text-brand-400 font-semibold">{t('f_sub_future')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

