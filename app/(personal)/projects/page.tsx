import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import ProjectListPage from '@/components/pages/project/ProjectListPage'
import { studioUrl } from '@/sanity/lib/api'
import { homePageQuery } from '@/sanity/lib/queries'
import { loadHomePage } from '@/sanity/loader/loadQuery'
import { useQuery } from '@/sanity/loader/useQuery'

const ProjectListPagePreview = dynamic(
  () => import('@/components/pages/project/ProjectListPagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return <ProjectListPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <ProjectListPage data={null} />
}
