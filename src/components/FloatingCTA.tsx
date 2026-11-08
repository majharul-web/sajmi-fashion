'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <>
      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/8801747615357?text=Hello%20Md%20Majharul%20Islam%2C%20I%20want%20to%20order%20from%20SajMi%20Fashion"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl pulse-float shadow-xl transition-transform"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Floating Facebook Page Messenger */}
      <a
        href="https://www.facebook.com/profile.php?id=100088521138103"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-22 right-6 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-transform hover:scale-105"
        aria-label="Message on Facebook"
      >
        FB
      </a>
    </>
  );
}
