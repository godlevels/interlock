import Image from "next/image";
import stripeLogo from "@/assets/stripe.png";
import upworkLogo from "@/assets/upwork.png";
import squareLogo from "@/assets/square.png";
import amazonLogo from "@/assets/amazon.png";
import googleLogo from "@/assets/google.png";
import linearLogo from "@/assets/linear.png";


export const LogoTicker = () => {
  const logos = [
    { src: stripeLogo, alt: "Stripe Logo" },
    { src: upworkLogo, alt: "Upwork Logo" },
    { src: squareLogo, alt: "Square Logo" },
    { src: amazonLogo, alt: "Amazon Logo" },
    { src: googleLogo, alt: "Google Logo" },
    { src: linearLogo, alt: "Linear Logo" },
  ];


  
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <p className="text-lg text-center text-[#2F2B43]/60 font-normal leading-[26px] tracking-[-0.012em] mb-8">
          Trusted by the best
        </p>
        <div className="flex justify-between items-center gap-7 flex-wrap">
          {logos.map((logo, index) => (
            <Image 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              width={100} 
              height={50} 
            />
          ))}
        </div>
      </div>
    </section>
  )
};

