"use client";

import Cookies from "js-cookie";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { SocialNetworksList } from "@/components/shared/SocialNetworksList";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import type { SettingsPayload } from "@/types";

import { FontResizer } from "./FontResizer";

const fontSizes = ["text-xs", "text-sm", "text-base", "text-lg"];

interface NavbarProps {
  data: SettingsPayload;
}

export function MobileNav(props: NavbarProps) {
  const { data } = props;
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const menuItems = data?.menuItems || [];
  const socialNetworks = data?.socialNetworks?.fields || [];

  const textSizeIndexCookie = Cookies.get("textSizeIndex") || 2;
  const [textSizeIndex, setTextSizeIndex] = useState<number>(
    Number(textSizeIndexCookie)
  );
  const { setTheme, theme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.className = `${theme} ${fontSizes[textSizeIndex]}`;
  }, [textSizeIndex, theme]);

  const onIncrease = useCallback(() => {
    setTextSizeIndex((prev) => {
      const value = Math.min(fontSizes.length - 1, prev + 1);
      Cookies.set("textSizeIndex", value.toString());
      return value;
    });
  }, [setTextSizeIndex]);

  const onDecrease = useCallback(() => {
    setTextSizeIndex((prev) => {
      const value = Math.max(0, prev - 1);
      Cookies.set("textSizeIndex", value.toString());
      return value;
    });
  }, [setTextSizeIndex]);

  const toggleLanguageDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setLanguage(langCode);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const languageOptions = [
    { code: "en", label: "English", icon: "/images/en.png" },
    { code: "ar", label: "Arabic", icon: "/images/ar.png" },
    { code: "fr", label: "French", icon: "/images/fr.png" },
    { code: "it", label: "Italian", icon: "/images/it.png" },
  ];

  const currentLanguage = languageOptions.find(
    (lang) => lang.code === i18n.language
  );

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
            .filter((item) => item?._type !== "home")
            .map((item, key) => {
              const href = item?._type === "home" ? "/" : `/${item?.slug}`;
              return (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    "py-2 text-lg font-bold text-center transition-colors hover:text-foreground",
                    pathname === href
                      ? "text-foreground"
                      : "text-foreground/60"
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

              {/* Language selection with dropdown */}
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={currentLanguage?.icon || "/images/en.png"}
                    alt={`Current Language: ${currentLanguage?.label || "English"}`}
                    width={24}
                    height={24}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute bottom-full mb-2 right-0 bg-white border border-gray-200 rounded shadow-md w-40">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100"
                      >
                        <Image src={lang.icon} alt={lang.label} width={32} height={32} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
