import Link from "next/link"
import CartItem from "../components/CartItem"
import OrderSummary from "../components/OrderSummary"

export default function Cart({ cartData }) {

  const subtotal = cartData.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  )

  const total = subtotal + cartData.shipping_fee

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartData.cartItems.map((item) => (
        <CartItem key={item.product_id} item={item} />
      ))}

      <OrderSummary 
  subtotal={subtotal} 
  shipping={cartData.shipping_fee} 
/>

      <Link href="/shipping">
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded">
          Proceed to Checkout
        </button>
      </Link>

    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch("https://" + context.req.headers.host + "/api/cart")
  const data = await res.json()

  return {
    props: {
      cartData: data
    }
  }
}