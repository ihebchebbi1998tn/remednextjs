import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { MenuItem, SettingsPayload } from '@/types'
import { Icons } from '@/components/shared/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MainNav } from '../Navbar/main-nav'
import { ModeToggleSelect } from '@/components/shared/mode-toggle-select'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const menuItems = data?.menuItems || ([] as MenuItem[])
  return (
    <footer className="bottom-0 w-full mt-8 text-center">
      <div className="container py-4 text-white bg-green-600 md:py-8">
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
