"use client";  // Ensure this component runs on the client

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';  // Import usePathname from next/navigation

interface LanguageContextProps {
  locale: string;
  setLocale: (locale: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children, initialLocale }: { children: ReactNode; initialLocale: string }) => {
  const [locale, setLocaleState] = useState(initialLocale);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();  // Use usePathname from next/navigation for the current path
  const router = useRouter();  // Use useRouter for programmatic navigation

  // Ensure the code runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    if (router) {
      router.push(pathname, undefined, { locale: newLocale }); // Use pathname for navigation
    }
  };

  // If it's not client-side, we don't render anything yet
  if (!isClient) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
