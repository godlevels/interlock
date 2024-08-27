import Image from "next/image";
import btnArrow from "@/assets/arrow.png"
import SecurityIcon from "@/assets/security.png"
import PhoneImage from "@/assets/iPhone.png"
import IntegrationsIcon from "@/assets/streamline.png"
import PaymentsImage from "@/assets/illustration.png"
import NotificationOneImage from "@/assets/interlock.png"
import NotificationTwoImage from "@/assets/encrypted.png"



export const Offer = () => {
    return (
        <section>
            <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-[#e2e4e9] px-6 py-16 md:px-10 xl:px-[159px] ">
                <div className="flex w-full flex-col md:flex-row lg:flex-row items-start justify-between gap-8 xl:flex-row xl:items-end 3xl:max-w-[1200px]">
                    <div className="flex flex-col mx-4 sm:mx-6 md:mx-14 lg:mx-20 xl:mx-auto">
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
                    <button className="flex h-[56px] w-[180px] items-center group relative overflow-hidden justify-center gap-3 rounded-full border-2 border-[#131316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px] mt-[2rem] md:mt-24 mx-4 sm:mx-6 md:mx-14 lg:mx-20 xl:mx-auto">
                        <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[59px]" />
                        <span className="group-hover:text-white">Learn More</span>
                        <Image src={btnArrow} alt="Arrow icon" width={24} height={24} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-6 md:px-10 xl:px-20 mx-4 sm:mx-6 md:mx-14 lg:mx-20 xl:mx-auto mt-[-30px]">
                <div className="flex flex-col gap-y-14 items-center gap-x-6 md:flex-row lg:flex-row xl:flex-row w-full">
                    <div className="flex flex-col items-start justify-between lg:w-[650px] h-[600px] gap-6 p-11 border border-gray-200 rounded-[40px] card-one">
                        <div className="flex flex-col items-start gap-4">
                            <Image src={SecurityIcon} alt="Advanced Security Measures" className="md:w-[40px] md:h-[40px] lg:w-[64px] lg:h-[64px]" />
                        <div>
                        <h4 className="text-2xl text-left text-[#2F2B43] font-semibold leading-8 tracking-[-0.016em]">Advanced Security Measures</h4>
                        <p className="mt-4 mb-6 text-[#2F2B43]/60 text-base font-normal text-left leading-6 tracking-[-0.01em]">
                            Your security is our top priority. With state-of-the-art encryption and security protocols,
                            rest assured that your financial data is safeguarded at all times.
                        </p>
                    </div>
                </div>
                <Image src={PhoneImage} alt="Phone with security notifications" className="mt-10 md:mt-5 lg:w-[390px] lg:h-[304px]" />
            </div>

            <div className="flex flex-col gap-6 p-11 border border-gray-200 rounded-[40px] h-[600px] w-[400px] md:w-[960px] lg:w-[960px] card-two">
                <div className="flex flex-col items-start gap-4">
                    <Image src={IntegrationsIcon} alt="Streamlined App Integrations" className="md:w-[40px] md:h-[40px] lg:w-[64px] lg:h-[64px]" />
                    <div>
                        <h4 className="text-2xl text-left text-[#2F2B43] font-semibold leading-8 tracking-[-0.016em]">Streamlined App Integrations</h4>
                        <p className="mt-4 mb-6 text-[#2F2B43]/60 text-base font-normal text-left leading-6 tracking-[-0.01em] md:w-[414px] h-[72px]">
                            Say goodbye to the complexities of traditional banking. Our intuitive platforms and tools simplify financial processes, making managing your money effortless.
                        </p>
                    </div>
                </div>
                <Image src={PaymentsImage} alt="App integrations" className="flex justify-center items-center md:mx-7 lg:mx-14 lg:w-[500px] lg:h-[304px]" />
            </div>
    </div>
    </div>
            <div className="relative mt-8 flex w-full max-w-[1200px]">
                <Image src={NotificationOneImage} width={380} height={68} alt="Notification one" className="hidden lg:block absolute left-10 bottom-[-150px] md:bottom-[180px]" />
                <Image src={NotificationTwoImage} width={360} height={112} alt="Notification two" className="hidden lg:block absolute left-0 bottom-[30px] md:left-[330px]" />
            </div>
    </section>
    )
};

