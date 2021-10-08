import Document, { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../components/utils/NavBar'
import Footer from '../components/utils/Footer'

const MyDocument = () => {

    return (
        <Html lang="en">
            <Head>
                <meta property="og:title" content="Montpelier Vineyards" key="title" />
                <link rel="icon" href="/mv_wine_favicon.svg" />
            </Head>
            <body
            >
                <NavBar/>
                <Main />
                <NextScript />
                <Footer/>
            </body>
        </Html>
    )
}

export default MyDocument