import MainButton from "../common/MainButton";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import TranslateAnimationEffect from "../TranslateAnimationEffect";

function HeroSection() {
    return (
        <section className="w-full h-auto mt-10 md:px-[85px] px-4">
            <div className="flex flex-col lg:flex-row justify-evenly gap-x-14 w-full">
                {/* content */}
                <div className="lg:w-[50%]">
                    <TranslateAnimationEffect
                        delay={0.2}
                        direction="x"
                        translateAmount={-40}
                    >
                        <h1 className="text-h1Mobile lg:text-h1 font-semibold leading-tight md:text-center lg:text-left">
                            Navigating the <br /> digital landscape <br /> for
                            success
                        </h1>
                    </TranslateAnimationEffect>

                    <div className="lg:hidden mt-4 p-2">
                        <TranslateAnimationEffect
                            delay={0}
                            direction="x"
                            translateAmount={40}
                        >
                            <Image
                                src="/images/microphone_illustration.png"
                                alt="hero image"
                                width={361.44}
                                height={310}
                                className="w-full h-auto"
                                priority
                            />
                        </TranslateAnimationEffect>
                    </div>

                    {/* <p className="text-[15px] lg:text-p text-black my-[35px]">
                        Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation.
                    </p> */}
                    <TextGenerateEffect
                        className="text-[15px] lg:text-p text-black my-[35px] font-normal"
                        words="Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation."
                        duration={0.1}
                    />

                    <MainButton
                        text="Book a consultation"
                        classes="bg-secondary text-white hover:text-black text-[18px] w-full md:w-fit"
                    />
                </div>

                {/* image */}
                <div className="hidden lg:block w-[50%]">
                    <TranslateAnimationEffect
                        delay={0}
                        direction="x"
                        translateAmount={40}
                    >
                        <Image
                            src="/images/microphone_illustration.png"
                            alt="hero image"
                            width={620.46}
                            height={555}
                            // className="w-full h-auto"
                            priority
                        />
                    </TranslateAnimationEffect>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
