import MainButton from "../common/MainButton";
import Image from "next/image";

function LetMakeThingsHappenSection() {
    return (
        <section className="md:px-[85px] px-4">
            <div className="bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
                <div className="flex justify-between items-center gap-10">
                    {/* content */}
                    <div className="flex flex-col gap-y-5 md:pr-[22rem]">
                        <h3 className="text-h3Mobile md:text-h3 font-semibold">
                            Let&apos;s make things happen
                        </h3>
                        <p className="text-[18px]">
                            Contact us today to learn more about how our digital
                            marketing services can help your business grow and
                            succeed online.
                        </p>
                        <MainButton
                            text="Get your free proposal"
                            classes="bg-secondary text-white hover:text-black text-[17px] w-full md:w-fit px-6 font-normal"
                        />
                    </div>

                    {/* image */}
                    <div className="absolute -top-8 right-8 hidden md:block">
                        <Image
                            src="/images/proposal_illustration.png"
                            width="364"
                            height="264"
                            alt="proposal image"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LetMakeThingsHappenSection;
