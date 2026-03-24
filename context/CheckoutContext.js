import { createContext, useState } from "react"

export const CheckoutContext = createContext()

export const CheckoutProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(null)

  return (
    <CheckoutContext.Provider
      value={{
        addresses,
        setAddresses,
        selectedAddress,
        setSelectedAddress
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}