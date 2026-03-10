import Link from "next/link"

export default function Header() {
  return (
    <div className="bg-green-600 text-white p-4 text-center font-bold text-lg">
      <Link href="/cart">Ecoyaan Checkout</Link>
    </div>
  )
}