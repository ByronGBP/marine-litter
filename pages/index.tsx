import type { NextPage } from 'next'
import { Header, Main } from '../components'
import { HeadTag } from '../components'

const SEO = {
  title: 'Lobelia',
  description: 'Landing page marine litter'
}

const Home: NextPage = () => {

  return (
    <>
      <HeadTag seo={SEO} />
      <Header/>
      <Main/>
    </>
  )
}

export default Home
