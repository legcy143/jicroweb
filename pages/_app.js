import BackgroudGrad from '@/components/background/BackgroudGrad'
import Nav from '@/components/Home/Nav'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return(
    <>
    {/* <BackgroudGrad /> */}
    <Nav/> 
    <Component {...pageProps} />
    </>
  ) 
}
