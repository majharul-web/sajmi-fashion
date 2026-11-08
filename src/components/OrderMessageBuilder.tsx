'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle, Send } from 'lucide-react';

export default function OrderMessageBuilder() {
  const { language, t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const handleSend = (target: 'whatsapp' | 'facebook') => {
    if (!note.trim()) {
      alert(
        language === 'bn'
          ? 'অনুগ্রহ করে আপনি যে পণ্যগুলো নিতে চান তা লিখুন!'
          : 'Please write down which product(s) or items you want to order!'
      );
      return;
    }

    const customerName = name.trim() || (language === 'bn' ? 'একজন সম্মানিত ক্রেতা' : 'A Valued Customer');
    const customerPhone = phone.trim() || 'N/A';
    const customerAddress = address.trim() || 'N/A';

    const text =
      language === 'bn'
        ? `*নতুন অর্ডার অনুসন্ধান - সাজমি স্টোর*\n\n` +
          `👤 *ক্রেতার নাম:* ${customerName}\n` +
          `📞 *মোবাইল:* ${customerPhone}\n` +
          `📍 *ঠিকানা:* ${customerAddress}\n\n` +
          `🛍️ *পণ্যের বিবরণ:* \n${note}\n\n` +
          `-- সাজমি স্টোর ওয়েবসাইট (Next.js 16.4.5) থেকে প্রেরিত --`
        : `*New Order Inquiry - Sajmi Store*\n\n` +
          `👤 *Customer Name:* ${customerName}\n` +
          `📞 *Phone:* ${customerPhone}\n` +
          `📍 *Address:* ${customerAddress}\n\n` +
          `🛍️ *Order Details:* \n${note}\n\n` +
          `-- Sent via Sajmi Store Website (Next.js 16.4.5) --`;

    if (target === 'whatsapp') {
      const url = `https://wa.me/8801747615357?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    } else {
      window.open('https://www.facebook.com/profile.php?id=100088521138103', '_blank');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
        {t('form_title')}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
        {t('form_desc')}
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
            {t('f_name_label')}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={language === 'bn' ? 'যেমন: তানভীর আহমেদ' : 'e.g. Tanvir Ahmed'}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
              {t('f_phone_label')}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01XXXXXXXXX"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
              {t('f_addr_label')}
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={language === 'bn' ? 'যেমন: নবাবগঞ্জ, দিনাজপুর' : 'e.g. Nawabganj, Dinajpur'}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
            {t('f_note_label')}
          </label>
          <textarea
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={
              language === 'bn'
                ? 'পণ্যের নাম, রঙ, পরিমাণ বা সাইজ উল্লেখ করুন...'
                : 'Mention item names, quantity, or specific colors you need...'
            }
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none resize-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => handleSend('whatsapp')}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('btn_send_wa')}</span>
          </button>
          <button
            onClick={() => handleSend('facebook')}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>{t('btn_send_fb')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

