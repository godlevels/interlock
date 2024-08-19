"use client";
import { useState } from "react";
import Logo from "@/assets/logo.png";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/icons-close.svg";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="fixed left-0 right-0 top-[19px] z-50 mx-[24px] flex h-[65px] items-center justify-between rounded-[32px] bg-white/10 px-6 shadow-[0_57px_96px_-8px_rgba(87,92,95,0.25)] outline outline-4 -outline-offset-[4px] outline-white/[38%] backdrop-blur-[4px] md:mx-[40px] md:h-[80px] md:px-8 xl:mx-[95px] 3xl:mx-auto 3xl:max-w-[1250px]">
        <div className="flex items-center justify-center gap-10">
          <Image src={Logo} alt="" width={142} height={32} />
          <div className="hidden items-center justify-center gap-[20px] text-base font-semibold leading-[24px] text-[#445568] md:flex md:gap-[32px] xl:text-[18px]">
            <Link href="/#hero" className="cursor-pointer transition-all hover:text-[#445568]/50">
              Home
            </Link>
            <Link href="/#products" className="cursor-pointer transition-all hover:text-[#445568]/50">
              Products
            </Link>
            <Link href="/#resources" className="cursor-pointer transition-all hover:text-[#445568]/50">
              Resources
            </Link>
            <Link href="/#services" className="cursor-pointer transition-all hover:text-[#445568]/50">
              Services
            </Link>
          </div>
        </div>

        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <Image src={isMenuOpen ? CloseIcon : MenuIcon} alt="" width={24} height={24} />
        </button>

        <Link href="/#get-app">
          <button className="btn-shadow group relative flex h-[38px] w-[110px] items-center justify-center overflow-hidden rounded-full bg-[#131316] text-sm font-medium leading-[24px] text-white outline outline-4 -outline-offset-[0px] outline-white/[55%] transition-all hover:outline-[5px] hover:-outline-offset-1 hover:outline-white/[100%] md:h-[48px] xl:w-[154px] xl:text-[18px]">
            <div className="absolute -bottom-[2px] -left-1 right-0 z-10 !mx-auto h-[0px] w-[160px] rounded-full bg-white transition-all duration-300 group-hover:h-[52px]" />{" "}
            <span className="z-[11] group-hover:text-black">Get App</span>
          </button>
        </Link>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white bg-opacity-95 text-center md:hidden">
          <Link
            href="/#hero"
            className="my-2 text-xl font-semibold text-[#445568] transition-all hover:text-[#445568]/50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="my-2 text-xl font-semibold text-[#445568] transition-all hover:text-[#445568]/50"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/#resources"
            className="my-2 text-xl font-semibold text-[#445568] transition-all hover:text-[#445568]/50"
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <Link
            href="/#services"
            className="my-2 text-xl font-semibold text-[#445568] transition-all hover:text-[#445568]/50"
            onClick={toggleMenu}
          >
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};
