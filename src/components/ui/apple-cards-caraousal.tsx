"use client";
import React, { useEffect, useState, createContext } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {},
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const setScrollability = () => {
        const carousel = document.querySelector(
            "#scroll-indicator"
        ) as HTMLElement;
        if (carousel?.style) {
            carousel.style.display = "none";
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 530 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                    onScrollCapture={setScrollability}
                >
                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-3",
                            "mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                    },
                                }}
                                viewport={{ once: true }}
                                key={"card" + index}
                                className="relative last:pr-[2%]  rounded-3xl"
                            >
                                {item}
                                {index === 0 && (
                                    <motion.div
                                        id="scroll-indicator"
                                        className="absolute bottom-[5rem] right-5 z-[999] opacity-0 text-[4rem] bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent text-center"
                                        whileInView={{
                                            opacity: 1,
                                            x: 10,
                                            y: [0, -1.5, 0],
                                            scale: 1.3,
                                        }}
                                        transition={{
                                            delay: 2,
                                            duration: 1.5,
                                            ease: "easeOut",
                                            repeat: Infinity,
                                            repeatType: "loop",
                                        }}
                                    >
                                        {/* double arrow */}
                                        &raquo;
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({ title }: { title: string }) => {
    return (
        <div
            className={
                "rounded-[45px] p-[45px] bg-secondary text-white sm:h-[260px] sm:w-[358px] w-[350px]"
            }
        >
            <div className="flex flex-col justify-between h-full gap-5">
                <p className="text-[16px] leading-[22px]">{title}</p>

                <Link href={"/"}>
                    <div className="flex items-center gap-4">
                        <p className="text-primary text-p">Learn more</p>
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
        </div>
    );
};
