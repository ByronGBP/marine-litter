import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

interface IDocument {
  styleTags: any
}

export default class MyDocument extends Document<IDocument> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(
        <StyleSheetManager>
          <>
            <App {...props} />
          </>
        </StyleSheetManager>
      )
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv='content-language' content='es' />
          <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='author' content='Byron G' />
          <meta name='robots' content='noindex, nofollow' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
