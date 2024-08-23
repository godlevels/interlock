import Image from "next/image";
import btnArrow from "@/assets/arrow.png"
import securityIcon from "@/assets/security.png"
import phoneIcon from "@/assets/iPhone.png"
import streamlineIcon from "@/assets/streamline.png"
import paymentIcons from "@/assets/illustration.png"
import interlockNotification from "@/assets/interlock.png"
import encryptedNotification from "@/assets/encrypted.png"



export const Offer = () => {
    return (
        <section className="mx-4 sm:mx-6 md:mx-14 lg:mx-20 xl:mx-auto">

        <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-[#e2e4e9] px-6 py-16 md:px-10 xl:px-[159px]">
      <div className="flex w-full flex-col md:flex-row lg:flex-row items-start justify-between gap-8 xl:flex-row xl:items-end 3xl:max-w-[1200px]">
        <div className="flex flex-col">
            <p className="bg-gradient-to-br from-[#7B6AE0] via-[#FFBB89] to-[#7B6AE0] bg-clip-text text-transparent text-base text-left font-semibold leading-6 md:text-base">
                WHAT WE OFFER
            </p>

          <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.72px] text-[#0e1829] md:text-[36px] md:leading-[44px]">
            Welcome to Financial Revolution
          </h3>
          <p className="mt-5 w-full text-[20px] text-base font-medium leading-6 text-[#445469] md:w-[655px] md:leading-[30px]">
            Spend smarter, lower your bills, get cashback on everything you buy, <br />
            and unlock credit to grow your business.
          </p>
        </div>
        <button className="flex h-[56px] w-[180px] items-center group relative overflow-hidden justify-center gap-3 rounded-full border-2 border-[#131316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px] mt-20">
          <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[59px]" />
          <span className="group-hover:text-white">Learn More</span>
          <Image src={btnArrow} alt="Arrow icon" width={24} height={24} />
        </button>
      </div>

      <div className="relative mt-5 flex w-full flex-col items-center justify-between gap-8 md:mt-0 md:flex-row xl:gap-0 3xl:max-w-[1200px]">
        <div className="card-gradient-one flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5de] lg:w-[486px]">
          <div className="w-full px-12 pb-8 pt-12">
            <Image src={securityIcon} alt="Security Icon" width={64} height={64} />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Advanced Security Measures
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Your security is our top priority. With state-of-the-art
              encryption and security protocols, rest assured that your
              financial data is safeguarded at all times
            </p>
          </div>
          <Image src={phoneIcon} alt="Phone Icon" width={390} height={304} />
        </div>

        <div className="card-gradient-two flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5de] lg:w-[690px]">
          <div className="w-full px-12 pb-8 pt-12">
            <Image src={streamlineIcon} alt="Integrations Icon" width={64} height={64} />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Streamlined App Integrations
            </h4>
            <p className="mt-4 w-full text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60 lg:w-[414px]">
              Say goodbye to the complexities of traditional banking. Our
              intuitive platforms and tools simplify financial processes, making
              managing your money effortless.
            </p>
          </div>
          <Image src={paymentIcons} alt="Payments Icon" className="-mt-4" width={377.88} height={377.88} />
        </div>

        <Image
          src={interlockNotification}
          alt="Notification Icon One"
          className="absolute -left-8 bottom-[700px] md:bottom-[163px] lg:-left-[89px]"
          width={380} height={68}
        />

        <Image
          src={encryptedNotification}
          alt="Notification Icon Two"
          className="absolute hidden sm:hidden md:block md:bottom-[-11px] left-0 md:left-[187px]"
          width={360} height={112}
        />
      </div>
    </div>
    </section>
    )
};

