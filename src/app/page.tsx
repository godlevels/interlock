import { CallToAction } from "@/sections/CallToAction";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Navbar } from "@/sections/Navbar";
import { Offer } from "@/sections/Offer";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Offer />
      <ProductShowcase />
      <WhyChooseUs />
      <CallToAction />
    </div>
  )
}
