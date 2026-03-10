import { useState, useContext } from "react"
import { useRouter } from "next/router"
import { CheckoutContext } from "../context/CheckoutContext"

export default function Shipping() {

  const router = useRouter()
  const { setShippingData } = useContext(CheckoutContext)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pin: "",
    city: "",
    state: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.phone.length !== 10) {
      alert("Phone number must be 10 digits")
      return
    }

    setShippingData(form)

    router.push("/payment")
  }

  return (
    <div className="p-10 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Shipping Address
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="border p-3 w-full"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full"
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full"
          name="pin"
          placeholder="PIN Code"
          required
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full"
          name="city"
          placeholder="City"
          required
          onChange={handleChange}
        />

        <input
          className="border p-3 w-full"
          name="state"
          placeholder="State"
          required
          onChange={handleChange}
        />

        <button
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Continue to Payment
        </button>

      </form>

    </div>
  )
}