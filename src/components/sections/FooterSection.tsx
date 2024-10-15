import { footerLinks, socials } from "@/data";
import MainButton from "../common/MainButton";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import Image from "next/image";

function FooterSection() {
    return (
        <section className="bg-secondary md:rounded-t-[45px] p-8 md:p-[55px] flex md:block flex-col justify-center text-center md:text-left">
            {/* header */}
            <div className="flex flex-col gap-8 md:flex-row items-center justify-between md:mb-5">
                <div className="my-5">
                    <Image
                        src="/images/footer_logo.png"
                        alt="footer logo"
                        height={43.61}
                        width={164}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-[40px]">
                    {footerLinks?.map((link, index) => (
                        <p
                            key={index}
                            className={`text-white md:underline text-[18px] font-light tracking-tight ${
                                index === footerLinks.length - 1 &&
                                "hidden md:block"
                            }`}
                        >
                            {link}
                        </p>
                    ))}
                </div>

                {/* social icons desktop */}
                <div className="hidden md:flex gap-[20px]">
                    {socials.map((social, index) => (
                        <div key={index}>
                            <img src={social} />
                        </div>
                    ))}
                </div>
            </div>

            {/* main */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* text part */}
                <div className="md:w-2/5">
                    {/* heading */}
                    <div className="px-2 bg-primary inline-block font-medium text-[18px] md:text-[20px] rounded-md my-10">
                        Contact us:
                    </div>

                    {/* paragraphs */}
                    <div className="w-full h-full flex flex-col gap-y-[15px] leading-tight">
                        <p className="text-white text-[16px]">
                            Email: info@positivus.com
                        </p>
                        <p className="text-white text-[16px]">
                            Phone: 555-567-8901
                        </p>
                        <p className="text-white text-[16px]">
                            Address: 1234 Main St <br />
                            Moonstone City, Stardust State 12345
                        </p>
                    </div>
                </div>

                {/* input part */}
                <div className="bg-[#292A32] flex flex-col md:flex-row gap-4 justify-center items-center md:gap-x-[20px] px-8 md:px-10 rounded-[14px] w-full md:w-3/5 h-[180px] mt-10 md:mt-0">
                    <Input
                        className="h-[58px] rounded-[14px] bg-[#292A32] text-white pl-7 w-full md:w-[54%]"
                        defaultValue="Email"
                    />
                    <MainButton
                        text="Subscribe to news "
                        classes="bg-primary tracking-wide w-full text-[1.1rem] font-normal md:w-[46%]"
                    />
                </div>
            </div>

            {/* social icons mobile */}
            <div className="md:hidden flex items-center justify-center gap-[20px] mt-10">
                {socials.map((social, index) => (
                    <div key={index}>
                        <img src={social} />
                    </div>
                ))}
            </div>

            {/* seperator */}
            <div className="my-10">
                <Separator />
            </div>

            {/* footer */}
            <div className="flex flex-col md:flex-row gap-1 md:gap-[40px]">
                <p className="text-white text-[18px] font-light tracking-tight">
                    © 2023 Positivus. All Rights Reserved.
                </p>
                <p className="text-white md:underline text-[18px] font-light tracking-tight">
                    Privacy Policy
                </p>
            </div>
        </section>
    );
}

export default FooterSection;
