import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { ShowcaseProject } from '@/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/utils'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <Card
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-b border-t xl:flex-row-reverse'
      }`}
    >
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.slug}</CardDescription>
        <Image
          src={
            urlForImage(project.coverImage)
              ?.height(350)
              .width(350)
              .fit('crop')
              .url() as string
          }
          width={350}
          height={350}
          alt={project.title ?? 'Cover image'}
        />
      </CardHeader>
      <CardContent>
        <CardDescription>
          <CustomPortableText value={project.overview as PortableTextBlock[]} />
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-x-2">
        {project.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}
