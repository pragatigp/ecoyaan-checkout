export default function CartItem({ item }) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img src={item.image} width={80} />

      <div>
        <h2 className="font-semibold">{item.product_name}</h2>
        <p>₹{item.product_price} x {item.quantity}</p>
      </div>
    </div>
  )
}