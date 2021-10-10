import Document, { Html, Head, Main, NextScript } from 'next/document'
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
                <Main />
                <NextScript />
                <Footer/>
            </body>
        </Html>
    )
}

export default MyDocument