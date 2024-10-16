"use client";

import { motion } from "framer-motion";

const TranslateAnimationEffect = ({
    children,
    delay,
    translateAmount,
    direction,
}: {
    children: React.ReactNode;
    delay: number;
    translateAmount: number;
    direction: "x" | "y";
}) => {
    const initial =
        direction === "x"
            ? { opacity: 0, x: translateAmount }
            : { opacity: 0, y: translateAmount };
    const animate =
        direction === "x" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            viewport={{ once: true }} // Ensures the animation only happens once
        >
            {children}
        </motion.div>
    );
};

export default TranslateAnimationEffect;
