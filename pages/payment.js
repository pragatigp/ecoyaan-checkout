import { useContext } from "react"
import { useRouter } from "next/router"
import { CheckoutContext } from "../context/CheckoutContext"

export default function Payment() {

  const { shippingData } = useContext(CheckoutContext)
  const router = useRouter()

  const handlePayment = () => {
    router.push("/success")
  }

  if (!shippingData) {
    return (
      <div className="p-10">
        <p>No shipping data found.</p>
      </div>
    )
  }

  return (
    <div className="p-10 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Payment Confirmation
      </h1>

      <div className="border p-4 mb-6">

        <h2 className="font-semibold mb-2">
          Shipping Address
        </h2>

        <p>{shippingData.name}</p>
        <p>{shippingData.email}</p>
        <p>{shippingData.phone}</p>
        <p>{shippingData.city}, {shippingData.state}</p>
        <p>PIN: {shippingData.pin}</p>

      </div>

      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Pay Securely
      </button>

    </div>
  )
}