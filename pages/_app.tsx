import '/public/fonts/fonts.css'
import type { AppProps } from 'next/app'
import { Reset, theme } from '@/styles'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Reset/>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
