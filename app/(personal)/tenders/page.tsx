import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import OpportunityListPage from '@/components/pages/opportunity/OpportunityListPage'
import { studioUrl } from '@/sanity/lib/api'
import { loadOpportunities } from '@/sanity/loader/loadQuery'

const OpportunityListPagePreview = dynamic(
  () => import('@/components/pages/opportunity/OpportunityListPagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadOpportunities()

  if (draftMode().isEnabled) {
    return <OpportunityListPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have an opportunity yet,{' '}
        <Link href={`${studioUrl}/desk/opportunities`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <OpportunityListPage data={initial.data} />
}
