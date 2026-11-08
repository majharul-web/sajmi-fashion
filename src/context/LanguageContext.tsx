'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/types';
import { translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.bn) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default language is Bangla ('bn')
  const [language, setLanguageState] = useState<Language>('bn');

  useEffect(() => {
    const saved = localStorage.getItem('sajmi_lang') as Language | null;
    const initial: Language = saved === 'en' ? 'en' : 'bn';
    setLanguageState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('sajmi_lang', lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const next: Language = language === 'bn' ? 'en' : 'bn';
    setLanguage(next);
  };

  const t = (key: keyof typeof translations.bn): string => {
    const dict = translations[language];
    return dict[key] || translations.bn[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
