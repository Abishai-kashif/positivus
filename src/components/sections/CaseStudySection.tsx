import { studies } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Card, Carousel } from "../ui/apple-cards-caraousal";
export default function CaseStudySection() {
    return (
        <section>
            <div className="flex flex-col lg:flex-row lg:gap-[40px] items-center gap-0">
                <h2 className="text-secondary bg-primary text-h2 px-[7px] rounded-[7px] font-medium py-0 text-center">
                    Case Studies
                </h2>

                <p className="text-[18px] my-[2.6rem] max-w-[580px] text-center lg:text-left">
                    Explore Real-Life Examples of Our Proven Digital Marketing
                    Success through Our Case Studies
                </p>
            </div>
            {/* studies */}
            <div className="hidden md:grid lg:grid-cols-3 bg-secondary text-white items-center justify-center gap-16 py-[70px] px-[60px] rounded-[45px]">
                {studies.map((study, idx) => (
                    <div className="flex justify-center items-center" key={idx}>
                        <div className="flex flex-col gap-[20px]">
                            <p className="text-[17px] leading-[22px]">
                                {study.title}
                            </p>

                            <Link href={"/"}>
                                <div className="flex items-center gap-4">
                                    <p className="text-primary">Learn more</p>
                                    <div>
                                        <Image
                                            src="/images/arrow_rotate.png"
                                            width={17.32}
                                            height={10}
                                            alt="locational arrow"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {idx !== 2 && (
                            <div className="mx-4 xl:mx-[64px] hidden lg:block">
                                <Separator
                                    orientation="vertical"
                                    className="h-[186px]"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* mobile */}
            <div className="md:hidden">
                {
                    <Carousel
                        items={studies.map((study, idx) => (
                            <Card title={study.title} key={idx + study.title} />
                        ))}
                    />
                }
            </div>
        </section>
    );
}
