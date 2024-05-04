import { GoogleTagManager } from '@next/third-parties/google'
import { toPlainText } from '@portabletext/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

import { Footer } from '@/components/global/Footer'
import { Navbar } from '@/components/global/Navbar'
import { ThemeProvider } from '@/components/global/theme-provider'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { Toaster } from '@/components/ui/toaster'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

const VisualEditing = dynamic(() => import('@/sanity/loader/VisualEditing'))

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.overview
      ? toPlainText(homePage.overview)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },

    metadataBase: new URL('https://www.s-reg.tn/metadata'),
    appleWebApp: {
      capable: true,
      title: homePage.title,
      statusBarStyle: 'black-translucent',
    },
    icons: [
      {
        rel: 'icon',
        url: 'https://www.s-reg.tn/metadata/favicon-32x32.png',
      },
      {
        rel: 'icon',
        url: 'https://www.s-reg.tn/metadata/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        url: 'https://www.s-reg.tn/metadata/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        url: 'https://www.s-reg.tn/metadata/safari-pinned-tab.svg',
        color: '#1e9146',
      },
      {
        rel: 'shortcut icon',
        url: 'https://www.s-reg.tn/metadata/favicon.ico',
      },
    ],
    manifest: 'https://www.s-reg.tn/manifest.json',
    robots: 'index, follow',
    abstract: homePage?.overview ? toPlainText(homePage.overview) : undefined,
    applicationName: homePage?.title,
    authors: [{ name: homePage?.title, url: 'https://www.s-reg.tn' }],
    category: 'Services for renewable energy',
    classification:
      "Join REG in revolutionizing recycling and demolition practices across Tunisia! Let's build a greener, cleaner future together. #RecycleSmart #SustainableDemolition",
    creator: 'Arfacod',
    generator: 'Next.js',
    publisher: 'Vercel',
    keywords: ['Recycle Smart', 'Sustainable Demolition'],
    referrer: 'origin',

    other: {
      'og:image:alt': 'My Website',
      'apple-mobile-web-app-title': 'Respect Environment Group',
      'application-name': 'Respect Environment Group',
      'msapplication-TileColor': '#1e9146',
      'theme-color': '#ffffff',
    },
  }
}

const GOOGLE_TAG_MANAGER_ID = process.env.GOOGLE_TAG_MANAGER_ID


export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen">
        <Suspense>
          <Navbar />
        </Suspense>
        <Suspense>{children}</Suspense>
        <Suspense>
          <Footer />
        </Suspense>
        <Toaster />
        <ScrollToTop />
        <SpeedInsights />
        <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID as string} />
      </div>
      {draftMode().isEnabled && <VisualEditing />}
    </ThemeProvider>
  )
}
