import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

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
  excerpt?: PostPayload['excerpt']
  slug?: PostPayload['slug']
  tags?: PostPayload['tags']
  title?: PostPayload['title']
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  identity?: PortableTextBlock[]
  passion?: PortableTextBlock[]
  worldwide?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  showcasePosts?: PostPayload[]
  title?: string
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

export interface PostPayload {
  _type: string
  _id: string
  date?: string
  _updatedAt?: string
  author?: Author
  coverImage?: Image
  content?: PortableTextBlock[]
  excerpt?: PortableTextBlock[]
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  socialNetworks?: SocialProfile[]
  internalLinks?: MenuItem[]
  ogImage?: Image
}

export interface Author {
  name?: string
  picture?: any
}

export type SocialProfile = {
  name: string
  link: string
}
