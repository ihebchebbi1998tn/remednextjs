'use client';

import '@/styles/index.css';
import { Inter as FontSans } from 'next/font/google';
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <InnerRootLayout>{children}</InnerRootLayout>
    </LanguageProvider>
  );
}

// Separate Inner Component to use `useLanguage` within `LanguageProvider`
function InnerRootLayout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage } = useLanguage();

  // Load Google Translate script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
      setTimeout(removeGoogleTranslateElements, 500); // Delay to ensure elements are loaded
    };
  }, []);

  // Function to remove Google Translate iframe and toolbar
  const removeGoogleTranslateElements = () => {
    const translateFrame = document.querySelector('iframe.skiptranslate');
    if (translateFrame) {
      translateFrame.remove();
    }

    const banner = document.querySelector('.goog-te-banner-frame.skiptranslate');
    if (banner) {
      banner.remove();
    }
  };

  // Function to trigger language translation
  const translateLanguage = (languageCode: string) => {
    const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = languageCode;
      select.dispatchEvent(new Event('change'));
    }
  };

  // Trigger Google Translate when `language` changes
  useEffect(() => {
    if (language === 'en' || language === 'ar') {
      translateLanguage(language);
    }

    // Change page direction based on language
    const htmlElement = document.documentElement;
    if (language === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  return (
    <html lang={language} suppressHydrationWarning className="text-inherit">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <style jsx global>{`
          /* Hide Google Translate elements */
          div#goog-gt-tt,
          div.goog-te-banner-frame.skiptranslate,
          iframe.skiptranslate,
          .goog-te-menu-value {
            display: none !important;
          }
          body {
            top: 0px !important; /* Fixes any offset caused by the translate bar */
          }
        `}</style>
        <div className="relative flex flex-col min-h-screen bg-background">
          <div id="google_translate_element" style={{ display: 'none' }}></div>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
