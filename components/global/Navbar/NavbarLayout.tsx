'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MobileNav } from "@/components/shared/MobileNav";
import { PopoverSettings } from "@/components/shared/PopoverSettings";
import { Button } from "@/components/ui/button";
import type { SettingsPayload } from "@/types";
import { MainNav } from "./main-nav";
import { useTranslation } from 'next-i18next'; 
import { useLanguage } from "@/components/LanguageProvider";

interface NavbarProps {
  data: SettingsPayload;
}

export default function Navbar({ data }: NavbarProps) {
  const menuItems = data?.menuItems || [];
  const socialNetworks = data?.socialNetworks;
  const homeItem = menuItems.find((item) => item?._type === "home");
  const { language, setLanguage } = useLanguage();  

  const { t, i18n } = useTranslation();  

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleLanguage = () => {
    const newLocale = language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLocale); 
    setLanguage(newLocale); 
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 gap-x-8 max-w-screen-2xl">
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            className="w-14"
            src="/images/logo.svg"
            alt={`Logo for ${homeItem?.title}`}
            width={48}
            height={48}
          />
          <span className="inline-block mr-8 text-sm font-bold md:hidden lg:inline-block md:text-md min-w-fit">
            {homeItem?.title}
          </span>
        </Link>
        <MainNav menuItems={menuItems} className="hidden md:flex" />

        <MobileNav data={data} />
        <div className="items-center justify-between flex-1 hidden md:flex gap-x-2 md:justify-end">
          <Link href="/tenders" className="hidden md:block">
            <Button className="px-8 font-bold text-white bg-green-500 border-2 border-transparent hover:bg-transparent hover:text-green-500 hover:border-green-500">
              Opportunities
            </Button>
          </Link>
          <nav className="flex items-center w-auto gap-1 md:gap-2">
            <PopoverSettings socialNetworks={socialNetworks} />
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2"
              aria-label="Toggle Language"
            >
              <Image
                src={i18n.language === "en" ? "/images/en.png" : "/images/ar.png"}
                alt={i18n.language === "en" ? "Switch to Arabic" : "Switch to English"}
                width={24}
                height={24}
              />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}