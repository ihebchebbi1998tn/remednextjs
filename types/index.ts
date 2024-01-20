import type { PortableTextBlock } from '@portabletext/types'
import type { File, Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
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
  blocks?: CustomBlock[]
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  title?: string
  overview?: PortableTextBlock[]
  sections?: CustomBlock[]
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
}

export interface CertificationPayload {
  coverImage?: Image
  overview?: PortableTextBlock[]
  title?: string
  slug: string
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
}

export interface SettingsPayload {
  brand?: string
  slogan?: string
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
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
  name: string
  link: string
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
