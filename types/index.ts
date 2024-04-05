import type { PortableTextBlock } from '@portabletext/types'
import type { File, Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface PartnerPayload {
  name?: string
  logo?: string
  alt?: string
}

export interface GalleryImagePayload {
  src?: string
  alt?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface ShowcasePost {
  _type: string
  _id: PostPayload['_id']
  coverImage?: PostPayload['coverImage']
  overview?: PostPayload['overview']
  slug?: PostPayload['slug']
  tags?: PostPayload['tags']
  title?: PostPayload['title']
}

export interface CustomBlock {
  _type: string
  _id: string
  title?: string
  subtitle?: string
  description?: PortableTextBlock[]
  author?: Author
  cta?: string
  ctaLink?: string
  icon?: string
  link?: MenuItem
  tags?: string[]
  images?: Image[]
  videoURL?: string
  coverImage?: Image
  showcaseProjects?: ShowcaseProject[]
  showcasePosts?: PostPayload[]
  showcaseApplications?: ApplicationPayload[]
  blocks?: CustomBlock[]
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  title?: string
  overview?: PortableTextBlock[]
  sections?: CustomBlock[]
  partners?: PartnerPayload[]
  opportunity?: OpportunityPayload
  innovation?: InnovationPayload
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
  certifications?: CertificationPayload[]
  images?: Image[]
  videos?: File[]
}

export interface ProjectsPayload {
  title?: string
  overview?: PortableTextBlock[]
  items: ProjectPayload[]
}

export interface ApplicationPayload {
  title?: string
  description?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  coverImage?: string
  slug: string
  site?: string
  android?: string
  ios?: string
  github?: string
  playstore?: string
  appstore?: string
  certifications?: CertificationPayload[]
}

export interface CertificationPayload {
  url?: string
  overview?: PortableTextBlock[]
  title?: string
  slug: string
  coverImage?: Image
}

export interface OpportunityPayload {
  title?: string
  description?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  image?: Image
  duration?: {
    start?: string
    end?: string
  }
  slug: string
  tags?: string[]
  files?: File[]
  links?: LinkType[]
}

export interface OpportunitiesPayload {
  title?: string
  overview?: PortableTextBlock[]
  items: OpportunityPayload[]
}

export interface InnovationPayload {
  title?: string
  description?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  images?: Image[]
  slug: string
  certifications?: CertificationPayload[]
}

export interface PostPayload {
  _type: string
  _id: string
  date?: string
  _updatedAt?: string
  author?: Author
  coverImage?: Image
  description?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  slug: string
  tags?: string[]
  title?: string
  images?: Image[]
}

export interface SettingsPayload {
  brand?: string
  slogan?: string
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  legal?: MenuItem[]
  socialNetworks?: {
    title?: string
    fields?: LinkType[]
  }
  contacts?: {
    title?: string
    fields?: LinkItem[]
  }
  ogImage?: Image
}

export interface Author {
  name?: string
  picture?: any
}

export type LinkType = {
  title: string
  url: string
}

export interface LinkItem {
  label?: string
  value?: string
  icon?: string
  type?: string
}

// TODO: isolate sanity types and remove this
export interface SanityLink {
  _type: string
  current: string
}
