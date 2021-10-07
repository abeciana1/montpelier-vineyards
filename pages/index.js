import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
          className="py-8 grid lg:grid-cols-3 items-center gap-x-16"
        >
          <div>
            <div
              className="font-bold text-marv text-xl leading-8"
            >
              Welcome to Montpelier Vineyards
              <div
                className="font-normal text-black leading-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse venenatis purus faucibus enim rhoncus suspendisse. Netus et elementum lacus, sem sapien faucibus.
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
            <div>
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
          <div>
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
