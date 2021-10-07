import '../styles/globals.css'
// import "tailwindcss/tailwind.css"
import NavBar from '../components/utils/NavBar'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
