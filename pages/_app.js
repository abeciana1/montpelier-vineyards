import '../styles/globals.css'
// import "tailwindcss/tailwind.css"
import NavBar from '../components/utils/NavBar'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/mv_wine_favicon.svg" />
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
