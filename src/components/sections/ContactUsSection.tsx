import MainButton from "../common/MainButton";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import Image from "next/image";

function ContactUsSection() {
    return (
        <section>
            {/* header */}
            <div className="flex flex-col lg:flex-row items-center lg:gap-[40px] text-center lg:text-left">
                <h2 className="text-secondary bg-primary text-h2 px-[7px] rounded-[7px] font-medium py-0">
                    Contact Us
                </h2>
                <p className="text-[18px] my-[2.6rem] max-w-[323px]">
                    Connect with Us: Let&apos;s Discuss Your Digital Marketing
                    Needs
                </p>
            </div>

            {/* form */}
            <form
                action=""
                className="bg-accent rounded-[45px] px-10 md:px-[100px] md:pt-[20px] pb-10 md:pb-[80px] relative overflow-hidden"
            >
                <div className="md:w-3/5">
                    <div className="mt-[40px]">
                        {/* radio buttons */}
                        <div>
                            <RadioGroup
                                defaultValue="confortable"
                                className="flex gap-9 justify-between sm:justify-start mb-8 px-6"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="say_hi" id="r1" />
                                    <label htmlFor="r1">Say Hi</label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="get_a_quote"
                                        id="r2"
                                    />
                                    <label htmlFor="r2">Get a Qoute</label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="mt-[25px]">
                            <label htmlFor="name" className="block pb-[5px]">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-secondary p-3 w-full rounded-[14px]"
                            />
                        </div>

                        <div className="mt-[25px]">
                            <label htmlFor="name" className="block pb-[5px]">
                                Email*
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="border border-secondary p-3 w-full rounded-[14px]"
                            />
                        </div>

                        <div className="mt-[25px]">
                            <label htmlFor="name" className="block pb-[5px]">
                                Message*
                            </label>
                            <textarea
                                placeholder="Message"
                                className="border border-secondary p-3 w-full rounded-[14px]"
                                rows={6}
                            />
                        </div>
                    </div>

                    <div className="mt-[40px] hidden md:block">
                        <MainButton
                            text="Send Message"
                            classes="bg-secondary text-white hover:text-black text-[18px] w-full"
                        />
                    </div>
                </div>

                <div className="hidden md:block absolute bottom-[8.7rem] right-[12.7rem]">
                    <Image
                        src="/images/Vector.png"
                        alt="illustration"
                        height={115}
                        width={115}
                    />
                </div>
                <div className="hidden md:block absolute top-20 right-[-290px]">
                    <Image
                        src="/images/contact_illustration.png"
                        alt="illustration"
                        width={576.86}
                        height={575}
                    />
                </div>
            </form>

            <div className="mt-9 md:hidden">
                <MainButton
                    text="Send Message"
                    classes="bg-secondary text-white hover:text-black text-[18px] w-full"
                />
            </div>
        </section>
    );
}

export default ContactUsSection;
