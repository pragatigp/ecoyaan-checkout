import { useState, useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { CheckoutContext } from "../context/CheckoutContext"

export default function Shipping() {
  const router = useRouter()

  const {
    addresses,
    setAddresses,
    selectedAddress,
    setSelectedAddress
  } = useContext(CheckoutContext)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pin: "",
    city: "",
    state: ""
  })

  useEffect(() => {
    const savedAddresses = localStorage.getItem("addresses")
    const savedSelectedAddress = localStorage.getItem("selectedAddress")

    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses))
    }

    if (savedSelectedAddress) {
      setSelectedAddress(JSON.parse(savedSelectedAddress))
    }
  }, [setAddresses, setSelectedAddress])

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses))
  }, [addresses])

  useEffect(() => {
    if (selectedAddress) {
      localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress))
    }
  }, [selectedAddress])

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

    const updatedAddresses = [...addresses, form]
    setAddresses(updatedAddresses)
    setSelectedAddress(form)

    setForm({
      name: "",
      email: "",
      phone: "",
      pin: "",
      city: "",
      state: ""
    })
  }

  const handleNext = () => {
    if (!selectedAddress) {
      alert("Please add or select an address")
      return
    }

    router.push("/payment")
  }

  return (
    <div className="max-w-2xl mx-auto p-4 pb-28">
      <h1 className="text-2xl font-bold mb-4">Shipping Address</h1>

      {addresses.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Saved Addresses</h2>

          {addresses.map((addr, index) => (
            <div
              key={index}
              onClick={() => setSelectedAddress(addr)}
              className={`border p-3 mb-2 rounded cursor-pointer ${
                selectedAddress?.phone === addr.phone &&
                selectedAddress?.pin === addr.pin
                  ? "border-green-600 bg-green-50"
                  : "border-gray-300"
              }`}
            >
              <p className="font-semibold">{addr.name}</p>
              <p>{addr.email}</p>
              <p>{addr.phone}</p>
              <p>{addr.city}, {addr.state}</p>
              <p>PIN: {addr.pin}</p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <input
          className="border p-3 w-full rounded sm:col-span-2"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 w-full rounded sm:col-span-2"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 w-full rounded"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 w-full rounded"
          name="pin"
          placeholder="PIN Code"
          value={form.pin}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 w-full rounded"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 w-full rounded"
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="sm:col-span-2 w-full sm:w-auto bg-gray-800 text-white px-4 py-3 rounded"
        >
          Add Address
        </button>
      </form>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex gap-3">
        <button
          onClick={() => router.back()}
          className="flex-1 sm:flex-none bg-gray-300 px-4 py-3 rounded"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="flex-1 sm:flex-none bg-green-600 text-white px-6 py-3 rounded"
        >
          Next Step
        </button>
      </div>
    </div>
  )
}
          