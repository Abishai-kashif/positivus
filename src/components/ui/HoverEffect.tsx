"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IProps } from "../cards/ServiceCard";
import ServiceCard from "../cards/ServiceCard";

export const HoverEffect = ({
    items,
}: {
    items: IProps[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[40px]">
            {items.map((item, idx) => (
                <div
                    // href={item.link ?? "/"}
                    key={item.titleBottom + idx}
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
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <ServiceCard
                        key={item.titleTop + idx}
                        titleTop={item.titleTop}
                        titleBottom={item.titleBottom}
                        titleBg={item.titleBg}
                        image={item.image}
                        bg={item.bg}
                        darkArrow={item.darkArrow}
                        link={item.link}
                    />
                </div>
            ))}
        </div>
    );
};
