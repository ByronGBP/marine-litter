import { theme }    from '../../styles/reset'

export const Favicon = () => {
  return (
    <>
      <link rel='icon' type='image/png' sizes='16x16'   href='/favicon/favicon-16x16.png' />
      <link rel='icon' type='image/png' sizes='32x32'   href='/favicon/favicon-32x32.png' />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="manifest" href="/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta name='msapplication-navbutton-color'         content={theme.colors.white} />
      <meta name='msapplication-TileColor'        content={theme.colors.white} />
      <meta name='apple-mobile-web-app-capable'          content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
    </>
  )
}
