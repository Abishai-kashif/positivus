import { logos } from "@/data";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
function LogoGroupSection() {
    return (
        <section>
            {/* Desktop */}
            <div className="hidden md:block h-full">
                {
                    <InfiniteMovingCards
                        items={logos.map((logo, idx) => (
                            <Image
                                key={logo}
                                src={logo}
                                alt={`${logo}_${idx + 1}`}
                                height={48}
                                width={145.55}
                                // className="w-fit"
                            />
                        ))}
                        speed="normal"
                    />
                }
            </div>

            {/* Mobile */}
            <div className="md:hidden flex flex-col gap-y-6 my-5">
                <InfiniteMovingCards
                    items={logos
                        .filter(
                            (_, index) => index < Math.ceil(logos.length / 2)
                        )
                        .map((logo, idx) => (
                            <Image
                                key={logo}
                                src={logo}
                                alt={`${logo}_${idx + 1}`}
                                height={46}
                                width={125.55}
                                className="h-[46px] w-[125px]"
                            />
                        ))}
                    speed="normal"
                />
                <InfiniteMovingCards
                    items={logos
                        .filter(
                            (_, index) => index >= Math.ceil(logos.length / 2)
                        )
                        .map((logo, idx) => (
                            <Image
                                key={logo}
                                src={logo}
                                alt={`${logo}_${idx + 1}`}
                                height={46}
                                width={125.55}
                                className="h-[46px] w-[125px]"
                            />
                        ))}
                    direction="right"
                    speed="normal"
                />
            </div>
        </section>
    );
}

export default LogoGroupSection;
