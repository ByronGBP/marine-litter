// Protocols -> https://ogp.me/

const hostname = 'https://enbyronment.com'

export const OgBase = ({ data }: any) => (
  <>
    <meta property='og:description' content={data.seo.description} />
    <meta property='og:locale'      content='en-EN' />
    <meta property='og:site_name'   content='Gigi Studios' />
    <meta property='og:title'       content={data.seo.title} />
    <meta property='og:type'        content='website' />
    <meta property='og:url'         content={hostname} />
  </>
)

export const OgImages = ({ data, pageType }: any) => {
  const defaultOgImage = {
    default: `${hostname}/images/og_home.jpg`,
    content_type: 'image/jpg',
    alt: 'Gigi Studios',
    size: {
      height: 627,
      width: 1200
    }
  }

  const image = pageType === 'product' ? data.header.image_data : defaultOgImage

  return (
    <>
      <meta property='og:image:alt' content={image.alt} />
      <meta property='og:image:type' content={image.content_type} />
      <meta property='og:image:secure_url' content={image.default} />
      <meta property='og:image:height' content={image.size.height} />
      <meta property='og:image:width' content={image.size.width} />
    </>
  )
}


export const OgVideos = ({ video }: any) => (
  <>
    <meta property="og:video:type" content={video.content_type} />
    <meta property='og:video:secure_url' content={video.default} />
    <meta property="og:video:height" content={video.size.height} />
    <meta property="og:video:width" content={video.size.width} />
  </>
)
