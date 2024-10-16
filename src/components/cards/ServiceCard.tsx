import { cn } from "@/lib/utils";
import Link from "next/link";
import TranslateAnimationEffect from "../TranslateAnimationEffect";

export interface IProps {
    titleTop: string;
    titleBottom: string;
    bg: string;
    titleBg: string;
    image: string;
    darkArrow?: boolean;
    link?: string;
}

function ServiceCard({
    titleTop,
    titleBottom,
    bg,
    titleBg,
    image,
    darkArrow = true,
    link = "/",
}: IProps) {
    return (
        <div
            className={cn(
                bg,
                "h-full w-full rounded-[45px] p-8 md:p-[50px] overflow-hidden border border-b-[6px] border-black group-hover:border-slate-700 relative z-20"
            )}
        >
            <TranslateAnimationEffect
                delay={0.1}
                translateAmount={30}
                direction={"y"}
            >
                <div className="relative z-50">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="block">
                            <div
                                className={cn(
                                    " bg-primary text-h3Mobile md:text-h3 w-fit rounded-[7px] px-1",
                                    titleBg
                                )}
                            >
                                {titleTop}{" "}
                            </div>
                            <div
                                className={cn(
                                    " bg-primary text-h3Mobile md:text-h3 rounded-[7px] inline-block px-1",
                                    titleBg
                                )}
                            >
                                {titleBottom}{" "}
                            </div>
                        </div>
                        <div className="block self-end">
                            <img src={image} alt="card icon" />
                        </div>
                    </div>

                    <Link href={link}>
                        <div className="flex gap-2 items-center">
                            <div>
                                {darkArrow ? (
                                    <img
                                        src="/images/arrow_dark.png"
                                        alt="dark arrow icon"
                                    />
                                ) : (
                                    <img
                                        src="/images/arrow_light.png"
                                        alt="light arrow icon"
                                    />
                                )}
                            </div>
                            <p
                                className={cn(
                                    "text-p hidden md:block",
                                    darkArrow ? "text-black" : "text-white"
                                )}
                            >
                                Learn more
                            </p>
                        </div>
                    </Link>
                </div>
            </TranslateAnimationEffect>
        </div>
    );
}

export default ServiceCard;
