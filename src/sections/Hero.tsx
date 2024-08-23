/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import HeroBackground from "@/assets/hero.png";
import btnArrow from "@/assets/arrow.png"
import Hero_Right from "@/assets/hero_right.png"


export const Hero = () => {
  return (
    <div className="relative flex min-h-[810px] w-full flex-col items-center justify-center overflow-hidden bg-cover px-6 pt-[0px] md:flex-row md:items-start md:px-10 md:pt-[200px] lg:justify-start lg:pt-[200px] xl:px-[159px] 3xl:justify-center ">
      <div className="absolute inset-0 z-0">
      <Image   
  src={HeroBackground} 
  alt="Hero Background" 
  fill
  style={{ objectFit: "cover", objectPosition: "center" }}
  priority
/>
      </div>

      <div className="relative z-10 flex mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-auto">
        <div className="mt-8">
          <h1 className="w-full max-w-[90%] sm:max-w-[100%] md:max-w-[80%] lg:max-w-[649px] text-[#0E0E0E] text-3xl sm:text-4xl md:text-5xl lg:text-[80px] text-left font-semibold leading-tight sm:leading-tight md:leading-snug lg:leading-[80px] tracking-tight lg:tracking-[-3px]">
            Empowering Your Finance.
          </h1>
    
          <p className="w-full max-w-[90%] sm:max-w-[100%] md:max-w-[80%] lg:max-w-[523px] text-[#0E0E0E] text-base sm:text-lg md:text-xl lg:text-xl text-left font-medium leading-6 sm:leading-7 md:leading-8 lg:leading-[30px] mt-5 sm:mt-7 mb-8 sm:mb-10 lg:mb-14">
            Where finance meets technology in seamless harmony. We're dedicated to redefining the future of finance by offering innovative solutions tailored to meet the evolving needs of our clients.
          </p>
    
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center">
            <button className="flex items-center justify-center w-full md:w-[202px] lg:w-[202px] sm:w-auto px-6 py-3 sm:py-4 bg-inherit border-2 border-[#131316] text-[#344054] text-center text-base sm:text-lg font-semibold leading-7 rounded-full">
              Get Started
            </button>
      
            <button className="flex items-center gap-2 sm:gap-3 lg:gap-[10px] text-left text-base sm:text-lg text-[#475467] font-semibold leading-7">
              Learn More
              <Image 
                src={btnArrow} 
                alt="Arrow icon"
                fill
                style={{ objectFit: "contain", width: "auto", height: "auto" }}
              />
            </button>
          </div>
        </div>

      </div>
      <div>
          <Image src={Hero_Right} alt="" className="rotate- [-19.51deg] absolute bottom-[-450px] right-[-1.5rem] mx-auto hidden w-[1395px] lg:block 3xl:left-0 3xl:right-[0px]" width={534.56} height={708.04} />
        </div>
    </div> 
  );
};
