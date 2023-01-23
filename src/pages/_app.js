import '@/styles/globals.css'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      {/* <Footer/> */}
    </div> 
  )
}
