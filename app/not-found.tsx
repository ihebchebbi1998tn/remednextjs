import { SpeedInsights } from '@vercel/speed-insights/next'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { VisualEditing } from 'next-sanity'
import { Suspense } from 'react'

import { Footer } from '@/components/global/Footer'
import { Navbar } from '@/components/global/Navbar'
import { ThemeProvider } from '@/components/global/theme-provider'
import { BackButton } from '@/components/shared/BackButton'
import { Button } from '@/components/ui/button'

export default async function NotFound() {
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
        <Suspense>
          <section className="container bg-white dark:bg-gray-900 ">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
              <div className="wf-ull lg:w-1/2">
                <p className="text-sm font-medium text-green-500 dark:text-green-400">
                  404 error
                </p>
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                  Page not found
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {`Sorry, the page you are looking for doesn't exist.Here are
                  some helpful links:`}
                </p>

                <div className="flex items-center mt-6 gap-x-3">
                  <BackButton>Go back</BackButton>
                  <Link href="/" className="w-1/2">
                    <Button className="text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 shrink-0 sm:w-auto hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-600">
                      Take me home
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                <Image
                  className="w-full max-w-lg lg:mx-auto"
                  src="/images/illustration.svg"
                  alt=""
                  width={164}
                  height={514}
                />
              </div>
            </div>
          </section>
        </Suspense>
        <Suspense>
          <Footer />
        </Suspense>
        <SpeedInsights />
      </div>
      {draftMode().isEnabled && <VisualEditing />}
    </ThemeProvider>
  )
}
