import { FC } from 'react';
import Head   from 'next/head'

const hostname = 'https://enbyronment.com'

interface IHead {
  readonly seo?: {
    title: string,
    description: string,
    video?: {
      content_type: string,
      default: string,
      size: {
        height: number,
        width: number
      }
    },
    [key: string]: any
  },
  readonly jsonld?: {
    data: any,
    type?: string,
    [key: string]: any
  },
  pageType?: string,
  slug?: any
}

const defaultOgImage = {
  default: `${hostname}/images/og_home.jpg`,
  content_type: 'image/jpg',
  alt: 'Enbyronment',
  size: {
    height: 627,
    width: 1200
  }
}

export const HeadTag:FC<IHead> = ({ seo = {}, jsonld = null, slug = null, pageType = null }) => {
  const image = defaultOgImage

  const OgImages = [
    <meta property='og:image' key='og:image' content={image.default} />,
    <meta property='og:image:alt' key='og:image:alt' content={image.alt} />,
    <meta property='og:image:type' key='og:image:type' content={image.content_type} />,
    <meta property='og:image:secure_url' key='og:image:secure_url' content={image.default} />,
    <meta property='og:image:height' key='og:image:height' content={`${image.size.height}`} />,
    <meta property='og:image:width' key='og:image:width' content={`${image.size.width}`} />,
  ]

  const OgBase = [
    <meta property='og:description' key='og:description' content={seo.description} />,
    <meta property='og:locale' key='og:locale' content={`es-ES`} />,
    <meta property='og:site_name' key='og:site_name' content='enbyronment.com' />,
    <meta property='og:title' key='og:title' content={seo.title} />,
    <meta property='og:type' key='og:type' content='website' />,
    <meta property='og:url' key='og:url' content={hostname} />,
  ]

  const OgVideo = seo.video ? [
    <meta key='og:video:type' property='og:video:type' content={seo.video.content_type} />,
    <meta key='og:video:secure_url' property='og:video:secure_url' content={seo.video.default} />,
    <meta key='og:video:height' property='og:video:height' content={`${seo.video.size.height}`} />,
    <meta key='og:video:width' property='og:video:width' content={`${seo.video.size.width}`} />,
  ] : []

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      {OgBase}
      {OgImages}
      {OgVideo}
    </Head>
  )
}
