import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/utils/Layout'

export default function Home() {
  

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
          className="py-8 grid lg:grid-cols-3 items-center gap-x-16"
        >
          <div>
            <div
              className="font-medium text-marv text-2xl leading-8"
            >
              It's All In The Family
              <div
                className="font-normal text-lg text-black leading-8"
              >
                The Becker family started making organic wine back in 1992 on our small back yard organic vineyard in Port Huron, Michigan. The first grapes from those vines were crushed by the feet of my infant son Christopher, and since this time we dreamed of producing quality organic wines. We moved to Vermont in 1997 and started establishing an organic vineyard. Our goal is to produce small-batch organically farmed wines by hand
              </div>
              <div className="pt-8">
                <Link href="/about">
                  <button
                    className="bg-marv text-beige py-2 px-4 rounded-full"
                  >
                    About us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-8 lg:pt-0">
              <img
                src="https://media.graphcms.com/output=format:jpg/pIWEC2dLSTuo5Py1SKUM?_ga=2.211774485.1804149618.1633573467-722458239.1630371733"
                alt="Petite Pearl going through veraison"
              />
            </div>
            <div
              className="pt-8"
            >
              <img
                src="https://media.graphcms.com/Hmub3ZL6Rbu10cXKf4iR"
                alt="Wine tasting event"
              />
            </div>
          </div>
          <div className="pt-8 lg:pt-0">
            <img
              src="https://media.graphcms.com/output=format:jpg/S9kULbybQMizPUr9O1Tp?_ga=2.186624297.1804149618.1633573467-722458239.1630371733"
              alt="Montpelier Vineyards — Sparkling Wine"
            />
          </div>
        </section>
      </Layout>
    </>
      )
}
