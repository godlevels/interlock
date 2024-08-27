import Image from "next/image";
import Logo from "@/assets/footer-logo.png"
import Link from "next/link";


const footerLinks = [
  { name: "Solutions", url: "/", isNew: true },
  { name: "Pricing", url: "/" },
  { name: "Releases", url: "/" },
  { name: "News", url: "/" },
  { name: "Media kit", url: "/" },
  { name: "Contact", url: "/" },
  { name: "Events", url: "/" },
  { name: "Help centre", url: "/" },
  { name: "Support", url: "/" },
  { name: "Government", url: "/" },
  { name: "Marketplaces", url: "/" },
  { name: "Ecommerce", url: "/" },
  { name: "Facebook", url: "/" },
  { name: "GitHub", url: "/" },
  { name: "Dribbble", url: "/" },
  { name: "Licenses", url: "/" },
  { name: "Settings", url: "/" },
  { name: "Contact", url: "/" },
];


export const Footer = () => {
  return (
    <footer className="bg-[#131316] flex flex-col gap-px">
      <div className="mx-4 sm:mx-6 md:mx-14 lg:mx-20 xl:mx-auto">
        <Image src={Logo} alt="" />


        <div>
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 place-items-start mt-16 mb-9">
        {footerLinks.map((link, index) => (
          <div key={index} className="flex items-center gap-2">
            <Link href={link.url}>
              <span className="text-[#94969C] hover:text-white/30 hover:underline transition-all ease-linear duration-300">{link.name}</span>
            </Link>
            {link.isNew && (
              <span className="rounded-full bg-white/30 px-2 py-1 text-white text-center text-xs font-medium leading-[18px]">
                New
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto text-xs text-[#94969C] mt-16 mb-7 flex justify-between items-center">
        <span>© 2024 Interlock. All rights reserved.</span>
        <Link href="https://x.com/ChoiceDsage"><span>Design by Samuel Alex</span></Link>
      </div>
    </div>
      </div>
    </footer>
  )
};
