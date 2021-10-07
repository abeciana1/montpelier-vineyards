import Head from 'next/head'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import styles from '../styles/Home.module.css'
import Layout from '../components/utils/Layout'

export default function Home() {

  const { observe, width } = useDimensions()
  

  return (
    <>
      <Head>
        <title>Montpelier Vineyards</title>
        <meta property="og:title" content="Montpelier Vineyards" key="title" />
      </Head>
      <Layout>
        <div
          className="text-2xl text-marv py-5 text-center"
        >
          Vermont-grown organic grapes artfully fermented in our state capital, Montpelier!
        </div>
        <div
          className=""
        >
          <img
            src="https://media.graphcms.com/output=format:jpg/z9VlYsMsTzi7uaCNtb3X?_ga=2.221629464.1804149618.1633573467-722458239.1630371733"
            alt="Montpelier Vineyards — group photo, picking grapes"
          />
        </div>
        <section
          className="py-5 grid lg:grid-cols-3"
        >
          <div>
            Welcome to Montpelier Vineyards
          </div>
          <div></div>
          <div></div>
        </section>
      </Layout>
    </>
      )
}
