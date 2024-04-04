import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import InnovationListPage from '@/components/pages/innovation/InnovationListPage'
import { studioUrl } from '@/sanity/lib/api'
import { loadInnovations } from '@/sanity/loader/loadQuery'

const InnovationListPagePreview = dynamic(
  () => import('@/components/pages/innovation/InnovationListPagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadInnovations()

  if (draftMode().isEnabled) {
    return <InnovationListPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a innovation yet,{' '}
        <Link href={`${studioUrl}/desk/innovation`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <InnovationListPage data={initial.data} />
}
