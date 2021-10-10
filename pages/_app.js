import '../styles/globals.css'
// import "tailwindcss/tailwind.css"

import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Footer from '../components/utils/Footer'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
      <title>Montpelier Vineyards</title>
    </Head>
    {/* <section
      className="max-h-full"
    > */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
