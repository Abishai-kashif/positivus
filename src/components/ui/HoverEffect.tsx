"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IProps } from "../cards/ServiceCard";
import ServiceCard from "../cards/ServiceCard";
import Link from "next/link";

export const HoverEffect = ({
    items,
}: {
    items: IProps[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    });

    return (
        isClient && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[40px]">
                {items.map(
                    (
                        {
                            titleTop,
                            titleBottom,
                            titleBg,
                            image,
                            bg,
                            darkArrow,
                            link,
                        },
                        idx
                    ) => (
                        <Link
                            href={link ?? "/"}
                            key={titleBottom + idx}
                            className="relative group  block p-2 h-full w-full"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute inset-0 h-full w-full bg-neutral-300/[0.5] block  rounded-[45px]"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: {
                                                duration: 0.15,
                                                delay: 0.2,
                                            },
                                        }}
                                    />
                                )}
                            </AnimatePresence>

                            <ServiceCard
                                key={titleTop + idx}
                                titleTop={titleTop}
                                titleBottom={titleBottom}
                                titleBg={titleBg}
                                image={image}
                                bg={bg}
                                darkArrow={darkArrow}
                                link={link}
                            />
                        </Link>
                    )
                )}
            </div>
        )
    );
};
