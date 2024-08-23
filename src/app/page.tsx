import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Navbar } from "@/sections/Navbar";
import { Offer } from "@/sections/Offer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Offer />
    </div>
  )
}
