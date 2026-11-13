"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Rocket } from "lucide-react";

export default function TopNotice() {
  const { t } = useLanguage();

  return (
    <div className='hidden md:block bg-gradient-to-r from-brand-600 via-orange-600 to-amber-600 text-white text-xs sm:text-sm py-2 px-4 font-medium shadow-inner'>
      <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
          <span className='bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider'>
            {t("top_badge")}
          </span>
          <span className='flex items-center gap-1'>
            <MapPin className='w-3.5 h-3.5 inline' />
            {t("top_address")}
          </span>
        </div>
        <div className='flex items-center gap-4 text-xs'>
          <span className='hidden sm:inline text-white/90'>
            <Rocket className='w-3.5 h-3.5 inline mr-1' />
            {t("top_future")}
          </span>
          <a
            href='tel:01747615357'
            className='hover:underline font-bold flex items-center gap-1 text-white bg-black/10 px-2.5 py-1 rounded-md'
          >
            <Phone className='w-3 h-3' />
            01747615357
          </a>
        </div>
      </div>
    </div>
  );
}
