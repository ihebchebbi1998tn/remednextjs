import { AppleIcon, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ApplicationPayload } from '@/types'

import { Button } from '../ui/button'
import { CustomPortableText } from './CustomPortableText'

interface SectionApplicationProps {
  title?: string
  application?: ApplicationPayload
}

export function SectionApplication({
  title,
  application,
}: SectionApplicationProps) {
  console.log('application: ', application);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
        <div className="relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16">
          <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <Image src={application?.coverImage || ''} width={300} height={100}  alt="cover" />
            {title}
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
            <CustomPortableText value={application?.description || []} />
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            {application?.ios && (
              <Link href={application?.ios}>
                <Button
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow hover:bg-green-600"
                  aria-label="Download on the App Store"
                >
                  <AppleIcon className="w-6 h-6 mr-3" />
                  <span>App Store</span>
                </Button>
              </Link>
            )}
            {application?.android && (
              <Link href={application?.android}>
                <Button
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow hover:bg-green-600"
                  aria-label="Download on the Play Store"
                >
                  <Play className="w-6 h-6 mr-3" />
                  <span>Play Store</span>
                </Button>
              </Link>
            )}
            {application?.site && (
              <Link href={application?.site} target="_blank">
                <Button
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow hover:bg-green-600"
                  aria-label="Download on the App Store"
                >
                  <Play className="w-6 h-6 mr-3" />
                  <span>Web</span>
                </Button>
              </Link>
            )}
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#50a066" className="bg-green-500" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
