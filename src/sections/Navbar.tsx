"use client";
import { useState } from "react";
import Logo from "@/assets/logo.png";
import { FiAlignCenter } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="fixed left-0 right-0 top-[19px] z-50 mx-4 sm:mx-6 md:mx-14 lg:mx-20 xl:mx-auto flex h-20 items-center justify-between rounded-[32px] bg-white/10 px-4 sm:px-6 md:px-8 lg:w-[90%] xl:w-[85%] 2xl:w-[80%] 3xl:max-w-[1249px] shadow-[0_57px_96px_-8px_rgba(87,92,95,0.25)] outline outline-4 -outline-offset-[4px] outline-white/[38%] backdrop-blur-[4px]">
        <div className="flex items-center justify-center gap-10">
          <Image src={Logo} alt="" width={142} height={32} />
          <div className="hidden items-center justify-center gap-[20px] text-base font-semibold leading-[24px] text-[#445568] md:flex md:gap-[32px] xl:text-[18px]">
            <Link href="/#hero" className="link">
              Home
            </Link>
            <Link href="/#products" className="link">
              Products
            </Link>
            <Link href="/#resources" className="link">
              Resources
            </Link>
            <Link href="/#services" className="link">
              Services
            </Link>
          </div>
        </div>

        <button
          className="flex items-center md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FiX width={24} height={24} /> : <FiAlignCenter width={35} height={35} />} 
        </button>

        <Link href="/#get-app">
          <button className="btn-shadow group relative flex h-12 w-[154px] items-center justify-center overflow-hidden rounded-full bg-[#131316] text-sm font-medium leading-[24px] text-white outline outline-8 -outline-offset-[0px] outline-white/[55%] transition-all hover:outline-[5px] hover:-outline-offset-1 hover:outline-white/[100%] md:h-[48px] xl:w-[154px] xl:text-[18px]">
            <div className="absolute -bottom-[2px] -left-1 right-0 z-10 !mx-auto h-[0px] w-[160px] rounded-full bg-white transition-all duration-300 group-hover:h-[52px]" />{" "}
            <span className="z-[11] group-hover:text-black transition-all ease-in-out duration-1000">Get App</span>
          </button>
        </Link>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white bg-opacity-95 text-center md:hidden">
          <Link
            href="/#hero"
            className="mblink"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="mblink"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/#resources"
            className="mblink"
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <Link
            href="/#services"
            className="mblink"
            onClick={toggleMenu}
          >
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};
