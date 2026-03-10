import { createContext, useState } from "react"

export const CheckoutContext = createContext()

export const CheckoutProvider = ({ children }) => {

  const [shippingData, setShippingData] = useState(null)

  return (
    <CheckoutContext.Provider value={{ shippingData, setShippingData }}>
      {children}
    </CheckoutContext.Provider>
  )
}