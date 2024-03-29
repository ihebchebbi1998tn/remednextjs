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
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 sm:py-14 lg:px-8">
        <div className="relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16">
          <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <Image
              src={application?.coverImage || ''}
              width={300}
              height={100}
              alt="cover"
            />
            {title}
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
            <CustomPortableText value={application?.description || []} />
          </p>
          <div className="flex flex-col items-center justify-center gap-3 mt-6 text-white sm:flex-row sm:gap-6">
            {application?.ios && (
              <Link href={application?.ios} target="_blank" className="">
                <Button
                  variant="ghost"
                  className="mt-3 bg-transparent border border-white h-14 rounded-xl"
                >
                  <div className="mr-3">
                    <svg viewBox="0 0 384 512" width="30">
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="-mt-1 font-sans text-2xl font-semibold">
                      App Store
                    </div>
                  </div>
                </Button>
              </Link>
            )}
            {application?.android && (
              <Link href={application?.android} target="_blank" className="">
                <Button
                  variant="ghost"
                  className="mt-3 bg-transparent border border-white h-14 rounded-xl"
                >
                  <div className="w-10">
                    <svg
                      fill="currentColor"
                      width="30"
                      viewBox="-1 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m3.751.61 13.124 7.546-2.813 2.813zm-2.719-.61 12.047 12-12.046 12c-.613-.271-1.033-.874-1.033-1.575 0-.023 0-.046.001-.068v.003-20.719c-.001-.019-.001-.042-.001-.065 0-.701.42-1.304 1.022-1.571l.011-.004zm19.922 10.594c.414.307.679.795.679 1.344 0 .022 0 .043-.001.065v-.003c.004.043.007.094.007.145 0 .516-.25.974-.636 1.258l-.004.003-2.813 1.593-3.046-2.999 3.047-3.047zm-17.203 12.796 10.312-10.359 2.813 2.813z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="-mt-1 font-sans text-2xl font-semibold">
                      Google Play
                    </div>
                  </div>
                </Button>
              </Link>
            )}
          </div>
          {application?.site && (
            <Link
              href={application?.site}
              target="_blank"
              className="block col-span-2 mt-12 text-sm text-center text-white underline bg-transparent"
            >
              {application?.site}
            </Link>
          )}
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
                <stop stopColor="#50a066" />
                <stop offset={1} stopColor="#50a999" className="bg-green-500" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
