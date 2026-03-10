export default function OrderSummary({ subtotal, shipping }) {

  const total = subtotal + shipping

  return (
    <div className="border p-4 mt-6">

      <p>Subtotal: ₹{subtotal}</p>
      <p>Shipping: ₹{shipping}</p>

      <h2 className="font-bold text-lg mt-2">
        Total: ₹{total}
      </h2>

    </div>
  )
}