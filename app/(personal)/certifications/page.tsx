import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import CertificationListPage from '@/components/pages/certification/CertificationListPage'
import { studioUrl } from '@/sanity/lib/api'
import { loadCertifications } from '@/sanity/loader/loadQuery'

const CertificationListPagePreview = dynamic(
  () => import('@/components/pages/certification/CertificationListPagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadCertifications()

  if (draftMode().isEnabled) {
    return <CertificationListPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a certification yet,{' '}
        <Link href={`${studioUrl}/desk/certification`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <CertificationListPage data={initial.data} />
}
