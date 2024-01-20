import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    sections[]->{
      _type,
      title,
      subtitle,
      author->{
        name,
        picture,
      },
      description,
      coverImage,
      cta,
      ctaLink,
      icon,
      showcaseProjects[]->{
        _type,
        coverImage,
        overview,
        "slug": slug.current,
        tags,
        title,
      },
      showcasePosts[]->{
        _id,
        coverImage,
        overview,
        "slug": slug.current,
        tags,
        title,
      },
      link->{
        _type,
        slug,
        title,
      },
      tags,
      images[]->{
        _type,
        asset->{
          _id,
          url,
        },
        caption,
      },
      'videoURL': video.asset->url,
      blocks[]{
        ...,
        title,
        description,
        author->{
          name,
          picture,
        },
      },
    },
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const projectsQuery = groq`
  *[_type == "project"]{
    _id,
    client,
    coverImage,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const certificationsQuery = groq`
  *[_type == "certification"]{
    _id,
    coverImage,
    overview,
    title,
    "slug": slug.current,
  }
`

export const certificationBySlugQuery = groq`
  *[_type == "certification" && slug.current == $slug][0] {
    _id,
    coverImage,
    overview,
    title,
  }
`

export const opportunitiesQuery = groq`
  *[_type == "opportunity"]{
    _id,
    image,
    duration,
    overview,
    title,
    "slug": slug.current,
  }
`

export const opportunityBySlugQuery = groq`
  *[_type == "opportunity" && slug.current == $slug][0] {
    _id,
    image,
    duration,
    description,
    title,
    files[]{
      _key,
      "url": asset -> url
    },
    links[],
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    overview,
    "slug": slug.current,
    tags,
    title,
    author->{
      name,
      picture,
    },
    date
  }
`

export const postsQuery = groq`
  *[_type == "post"] {
    _id,
    coverImage,
    overview,
    "slug": slug.current,
    tags,
    title,
    author->{
      name,
      picture,
    },
    date
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    brand,
    slogan,
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title,
    },
    socialNetworks{
      title,
      fields[]->{
        name,
        link
      }
    },
    contacts{
      title,
      fields[]->{
        label,
        value,
        icon,
        type,
      }
    },
    ogImage,
  }
`
