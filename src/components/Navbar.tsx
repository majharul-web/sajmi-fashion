'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Languages, Menu, X, MessageCircle, Phone, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/products', label: t('nav_products') },
    { href: '/how-to-order', label: t('nav_how') },
    { href: '/about', label: t('nav_about') },
    { href: '/contact', label: t('nav_contact') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3.5">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-tr from-brand-600 to-amber-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-2xl tracking-tighter">S</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                  Sajmi
                </span>
                <span className="text-2xl font-black tracking-tight text-brand-600 dark:text-brand-500">
                  {language === 'bn' ? 'স্টোর' : 'Store'}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium -mt-1">
                {t('brand_sub')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-brand-600 dark:hover:text-brand-400 relative py-1 ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 font-bold after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[3px] after:bg-brand-600 after:rounded-full'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language, Theme, Order CTA, Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle Language"
              className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-600 dark:text-amber-400 transition-all shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-gray-700" />
              )}
            </button>

            {/* Direct WhatsApp Order CTA */}
            <a
              href="https://wa.me/8801747615357?text=Hello%20Md%20Majharul%20Islam%2C%20I%20want%20to%20order%20from%20Sajmi%20Store"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('btn_wa_order')}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-brand-50 dark:hover:bg-slate-800 text-gray-800 dark:text-gray-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-200 dark:border-slate-800 grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/8801747615357"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs font-bold py-2.5 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100088521138103"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white text-xs font-bold py-2.5 rounded-lg"
            >
              Facebook Page
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

