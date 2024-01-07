import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import ProjectListPage from '@/components/pages/project/ProjectListPage'
import { studioUrl } from '@/sanity/lib/api'
import { loadProjects } from '@/sanity/loader/loadQuery'

const ProjectListPagePreview = dynamic(
  () => import('@/components/pages/project/ProjectListPagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadProjects()

  if (draftMode().isEnabled) {
    return <ProjectListPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a project yet,{' '}
        <Link href={`${studioUrl}/desk/project`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <ProjectListPage data={initial.data} />
}
