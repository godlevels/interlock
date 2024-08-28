"use client"
import Image from "next/image";
import btnArrow from "@/assets/arrow.png"
import cardOne from "@/assets/card-one.png";
import cardTwo from "@/assets/card-two.png";
import cardThree from "@/assets/card-three.png";
import cardFour from "@/assets/card-four.png";
import shadow from "../assets/shadow.svg";

export const ProductShowcase = () => {
  return (
    <section className="overflow-y-c lip relative flex h-[870px] w-full items-start justify-center bg-[#131316] px-6 md:h-[900px] md:px-10 lg:h-[592px] lg:items-center xl:px-[159px] mt-10">
      <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto h-[425px] w-full rounded-full bg-white blur-[350px] sm:w-[425px]" />

      <div className="relative h-[750px] w-full md:h-[900px] lg:h-[592px] 3xl:max-w-[1200px] mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-auto">
        <div className="w-full py-8 md:w-[576px] md:py-24">
          <h2
            className="text-4xl font-bold leading-tight tracking-[-0.96px] text-[#fcfcfd] md:text-[48px] md:leading-[60px] mt-10"
          >
            Different Card for <br /> Different Folks
          </h2>
          <p
            className="mt-6 text-base font-medium leading-6 text-[#ced5de] md:text-[20px] md:leading-[30px]"
          >
            We revolutionizes the way you make payments, offering a secure,
            convenient, and contactless way to complete transactions
          </p>
          <button
            className="mt-8 flex h-[56px] w-[190px] relative group overflow-hidden items-center justify-center gap-3 rounded-full bg-white text-base font-medium leading-[28px] text-[#314155] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:mt-12 md:h-[60px] md:w-[202px] md:text-[18px]"
          ><div className="absolute -left-1 bottom-0 right-0 z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[61px]" />
            <span className="group-hover:text-white z-10">Discover More</span>
            <Image src={btnArrow} alt="" className="group-hover:invert z-10" />
          </button>
        </div>

        <div
          className="-bottom-[160px] md:-bottom-0 absolute left-0 right-0 z-30 flex h-[400px] w-full flex-col justify-start -space-y-[140px] overflow-clip sm:h-[500px] sm:-space-y-[140px] md:left-auto md:right-[50px] md:h-[500px] md:w-auto md:-space-y-[320px] lg:right-0 lg:h-[650px] lg:-space-y-[280px] xl:hidden xl:-space-y-0"
        >
          
          <Image src={cardOne} alt="" className="z-[12]" />
          <Image
            src={cardTwo}
            alt=""
            className="rotate -[-30deg] z-[11]"
          />
          <Image
            src={cardThree}
            alt=""
            className="z-[10]"
          />
          <Image src={cardFour} alt="" className="" />
          <Image src={shadow} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

