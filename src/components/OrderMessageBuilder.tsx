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
          ? 'অনুগ্রহ করে আপনি যে পোশাক বা পণ্যটি নিতে চান তা লিখুন!'
          : 'Please specify which clothing or fashion item(s) you want to order!'
      );
      return;
    }

    const customerName = name.trim() || (language === 'bn' ? 'একজন সম্মানিত ক্রেতা' : 'A Valued Customer');
    const customerPhone = phone.trim() || 'N/A';
    const customerAddress = address.trim() || 'N/A';

    const text =
      language === 'bn'
        ? `*নতুন অর্ডার অনুসন্ধান - সাজমি ফ্যাশন*\n\n` +
          `👤 *ক্রেতার নাম:* ${customerName}\n` +
          `📞 *মোবাইল:* ${customerPhone}\n` +
          `📍 *ঠিকানা:* ${customerAddress}\n\n` +
          `🛍️ *অর্ডারের বিবরণ (পোশাক, সাইজ ও কালার):* \n${note}\n\n` +
          `-- সাজমি ফ্যাশন ওয়েবসাইট থেকে প্রেরিত --`
        : `*New Fashion Order Inquiry - SajMi Fashion*\n\n` +
          `👤 *Customer Name:* ${customerName}\n` +
          `📞 *Phone:* ${customerPhone}\n` +
          `📍 *Address:* ${customerAddress}\n\n` +
          `🛍️ *Order Details (Garments, Size & Color):* \n${note}\n\n` +
          `-- Sent via SajMi Fashion Website --`;

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
              placeholder={language === 'bn' ? 'যেমন: টুপির হাট, নবাবগঞ্জ, দিনাজপুর' : 'e.g. Tupir Hat, Nawabganj, Dinajpur'}
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
                ? 'পোশাকের নাম, সাইজ (M/L/XL), রঙ, পরিমাণ উল্লেখ করুন...'
                : 'Mention item names, preferred sizes (M/L/XL), colors, or quantity...'
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
