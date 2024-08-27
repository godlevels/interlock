import Image from "next/image";
import bgLeft from "@/assets/dot.png"
import bgRight from "@/assets/gradient-right.png"
import phoneCard from "@/assets/cta-right.png"
import Check from "@/assets/Check icon.png"
import btnArrow from "@/assets/arrow.png"

export const CallToAction  = () => {
  return (
    <section>
    <div
      className="relative w-full overflow-hidden px-6 py-10 md:px-10 md:py-[110px] xl:px-[159px]"
    >
      <Image
        src={bgLeft}
        alt=""
        className="absolute top-0 -z-20 w-full"
        layout="fill"
      />
      <Image
        src={bgRight}
        alt=""
        className="absolute right-0 top-0 -z-[12]"
        layout="intrinsic"
        width={500}
        height={500}
      />
      {/* <div className="absolute bottom-[-540px] left-[292px] -z-[9] h-[772px] w-full bg-[#fffeff] blur-[150px] md:w-[785px]" /> */}

      <div className="flex items-center mx-4 sm:mx-6 md:mx-14 lg:mx-20 xl:mx-auto">
        <div className="z-10 w-full py-[31px] md:w-[576px] 3xl:mx-auto 3xl:w-[1200px]">
          <h2 className="text-4xl font-bold leading-tight tracking-[-0.96px] text-[#0E1829] md:w-[576px] md:text-[48px] md:leading-[60px]">
            Your Personal finances, a few taps away
          </h2>

          <ul className="mt-5 max-w-md list-inside space-y-4 text-base font-medium leading-7 text-[#647187] md:text-[18px] pl-5">
            <li className="flex items-center">
              <Image
                src={Check}
                alt=""
                width={20}
                height={20}
                className="mr-3 flex-shrink-0"
              />
              At least 10 characters
            </li>
            <li className="flex items-center">
              <Image
                src={Check}
                alt=""
                width={20}
                height={20}
                className="mr-3 flex-shrink-0"
              />
              Customized card. With a unique design
            </li>
            <li className="flex items-center">
              <Image
                src={Check}
                alt=""
                width={20}
                height={20}
                className="mr-3 flex-shrink-0"
              />
              Spend up to $100,000 per month
            </li>
            <li className="flex items-center">
              <Image
                src={Check}
                alt=""
                width={20}
                height={20}
                className="mr-3 flex-shrink-0"
              />
              Access to all features
            </li>
          </ul>

          <div className="z-30 mt-12 flex gap-6 md:mt-[78px]">
            <button className="group relative h-[56px] w-[180px] overflow-hidden rounded-full border-2 border-[#131s316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
              <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[59px]" />
              <span className="group-hover:text-white">Get Started</span>
            </button>
            <button className="flex h-[56px] w-[180px] items-center justify-center gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] underline-offset-8 transition-all hover:underline md:h-[60px] md:w-[202px] md:text-[18px]">
              <span> Learn More</span>
              <Image src={btnArrow} alt="Arrow icon" width={24} height={24} />
            </button>
          </div>
        </div>

      <div>
        <Image
          src={phoneCard}
          alt=""
          className="absolute bottom-16 left-[120px] -z-10 mx-auto hidden w-[1287px] md:block"
          width={1287}
          height={1020}
        />
      </div>
      </div>
    </div>
    </section>
  );
};

