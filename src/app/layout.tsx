import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import TopNotice from '@/components/TopNotice';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata: Metadata = {
  title: 'SajMi Fashion | সাজমি ফ্যাশন – টুপির হাট, নবাবগঞ্জ, দিনাজপুর',
  description:
    'SajMi Fashion - Trendy clothing & stylish apparel collection at Tupir Hat, Nawabganj. Owned by Md Majharul Islam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-300 font-sans flex flex-col min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            <TopNotice />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingCTA />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
