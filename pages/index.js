import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <a
        href="/cart"
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Go to Cart
      </a>
    </div>
  )
}