import "@/styles/globals.css"
import Header from "../components/Header"
import { CheckoutProvider } from "../context/CheckoutContext"

export default function App({ Component, pageProps }) {
  return (
    <CheckoutProvider>
      <Header />
      <Component {...pageProps} />
    </CheckoutProvider>
  )
}