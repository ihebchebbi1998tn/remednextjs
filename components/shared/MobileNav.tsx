'use client';

import Cookies from 'js-cookie';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { ModeToggle } from '@/components/shared/mode-toggle';
import { SocialNetworksList } from '@/components/shared/SocialNetworksList';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/components/LanguageProvider';
import type { SettingsPayload } from '@/types';

import { FontResizer } from './FontResizer';

const fontSizes = ['text-xs', 'text-sm', 'text-base', 'text-lg'];

interface NavbarProps {
  data: SettingsPayload;
}

export function MobileNav(props: NavbarProps) {
  const { data } = props;
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const menuItems = data?.menuItems || [];
  const socialNetworks = data?.socialNetworks?.fields || [];

  const textSizeIndexCookie = Cookies.get('textSizeIndex') || 2;
  const [textSizeIndex, setTextSizeIndex] = useState<number>(Number(textSizeIndexCookie));
  const { setTheme, theme } = useTheme();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    document.documentElement.className = `${theme} ${fontSizes[textSizeIndex]}`;
  }, [textSizeIndex, theme]);

  const onIncrease = useCallback(() => {
    setTextSizeIndex((prev) => {
      const value = Math.min(fontSizes.length - 1, prev + 1);
      Cookies.set('textSizeIndex', value.toString());
      return value;
    });
  }, [setTextSizeIndex]);

  const onDecrease = useCallback(() => {
    setTextSizeIndex((prev) => {
      const value = Math.max(0, prev - 1);
      Cookies.set('textSizeIndex', value.toString());
      return value;
    });
  }, [setTextSizeIndex]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : language === 'ar' ? 'fr' : language === 'fr' ? 'it' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger>
        <Button
          className="p-2 rounded-full md:hidden"
          aria-label="Open menu"
          variant="ghost"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu className="text-foreground" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerClose aria-label="Close menu" />
        </DrawerHeader>
        <DrawerDescription className="container flex flex-col justify-center">
          {menuItems
            .filter((item) => item?._type !== 'home')
            .map((item, key) => {
              const href = item?._type === 'home' ? '/' : `/${item?.slug}`;
              return (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    'py-2 text-lg font-bold text-center transition-colors hover:text-foreground',
                    pathname === href ? 'text-foreground' : 'text-foreground/60'
                  )}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
          <Link href="/tenders" className="inline-block text-center">
            <Button
              onClick={() => setIsDrawerOpen(false)}
              className="px-8 font-bold text-white bg-green-500 border-2 border-transparent hover:bg-transparent hover:text-green-500 hover:border-green-500"
            >
             Opportunities
            </Button>
          </Link>
        </DrawerDescription>
        <DrawerFooter>
          <div className="flex flex-col gap-y-4">
            <SocialNetworksList socialNetworks={socialNetworks} />
            <div className="flex justify-between items-center gap-4">
              <FontResizer
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                textSizeIndex={textSizeIndex}
                fontSizes={fontSizes}
                setTextSizeIndex={setTextSizeIndex}
              />
              <ModeToggle />
              {/* Language toggle button with flag images */}
              <button onClick={toggleLanguage} className="flex items-center gap-2">
                <Image
                  src={
                    language === 'en'
                      ? '/images/en.png'
                      : language === 'ar'
                      ? '/images/ar.png'
                      : language === 'fr'
                      ? '/images/fr.png'
                      : '/images/it.png' // Italian flag
                  }
                  alt="Language"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
