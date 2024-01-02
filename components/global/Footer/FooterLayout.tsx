import type { PortableTextBlock } from '@portabletext/types'
import Link from 'next/link'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import { Icons } from '@/components/shared/icons'
import { ModeToggleSelect } from '@/components/shared/mode-toggle-select'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

import { MainNav } from '../Navbar/main-nav'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const menuItems = data?.menuItems || ([] as MenuItem[])
  return (
    <footer className="bottom-0 w-full mt-8 text-center text-white bg-green-500">
      <div className="container py-4 md:py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <MainNav menuItems={menuItems} className="text-white" />
          {footer && (
            <CustomPortableText paragraphClasses="text-white" value={footer} />
          )}

          <nav className="flex items-center">
            <Link href="#" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.google className="w-4 h-4" />
                <span className="sr-only">Google</span>
              </div>
            </Link>
            <Link href="#" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.twitter className="w-3 h-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggleSelect />
          </nav>
        </div>
      </div>
    </footer>
  )
}
