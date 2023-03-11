import BackgroudGrad from '@/components/background/BackgroudGrad'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return(
    <>
    <BackgroudGrad />
    <Component {...pageProps} />
    </>
  ) 
}
