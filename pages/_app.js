import Footer from "../components/marketing/footer"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<> <Component {...pageProps} /><Footer/></>)
  
}

export default MyApp
