import { useContext } from "react"
import { useRouter } from "next/router"
import { CheckoutContext } from "../context/CheckoutContext"
import OrderSummary from "../components/OrderSummary"

export default function Payment() {
  const router = useRouter()
  const { selectedAddress } = useContext(CheckoutContext)

  const subtotal = 1048
  const shipping = 50

  const handlePayment = () => {
    router.push("/success")
  }

  if (!selectedAddress) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Payment Confirmation</h1>
        <p>No address selected. Please go back and add/select an address.</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-4 pb-28">
      <h1 className="text-2xl font-bold mb-4">Payment Confirmation</h1>

      <div className="border rounded p-4 mb-4 bg-white">
        <h2 className="font-semibold mb-3">Selected Shipping Address</h2>

        <p className="font-medium">{selectedAddress.name}</p>
        <p>{selectedAddress.email}</p>
        <p>{selectedAddress.phone}</p>
        <p>{selectedAddress.city}, {selectedAddress.state}</p>
        <p>PIN: {selectedAddress.pin}</p>
      </div>

      <OrderSummary subtotal={subtotal} shipping={shipping} />

      <div className="mt-4 border rounded p-4 bg-white">
        <h2 className="font-semibold mb-2">Payment Method</h2>
        <p className="text-sm text-gray-600">
          This is a simulated payment step for the assignment.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex gap-3">
        <button
          onClick={() => router.back()}
          className="flex-1 sm:flex-none bg-gray-200 px-4 py-3 rounded font-medium"
        >
          Back
        </button>

        <button
          onClick={handlePayment}
          className="flex-1 sm:flex-none bg-green-600 text-white px-4 py-3 rounded font-medium"
        >
          Pay Securely
        </button>
      </div>
    </div>
  )
}