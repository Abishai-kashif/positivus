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
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // reducing the complexity for mobile animation complexities for phone devices
    if (isMobile) {
        direction = "y";

        // converting translate amount to positive value if negative for mobile phonea
        translateAmount = Math.abs(translateAmount);
    }

    let initial =
        direction === "x"
            ? { opacity: 0, x: translateAmount }
            : { opacity: 0, y: translateAmount };
    let animate =
        direction === "x" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            transition={{
                duration: 0.5,
                delay: isMobile ? 0 : delay,
                ease: "easeOut",
            }}
            viewport={{ once: true }} // Ensures the animation only happens once
        >
            {children}
        </motion.div>
    );
};

export default TranslateAnimationEffect;

// second option :-
//( if we are on mobile screen dont apply animation instead return children as it is )
//------------------

// const TranslateAnimationEffect = ({
//     children,
//     delay,
//     translateAmount,
//     direction,
// }: {
//     children: React.ReactNode;
//     delay: number;
//     translateAmount: number;
//     direction: "x" | "y";
// }) => {
//     const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//     let initial =
//         direction === "x"
//             ? { opacity: 0, x: translateAmount }
//             : { opacity: 0, y: translateAmount };
//     let animate =
//         direction === "x" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

//     return (
//        !isMobile ?
//         (<motion.div
//             initial={initial}
//             whileInView={animate}
//             transition={{
//                 duration: 0.5,
//                 delay,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }} // Ensures the animation only happens once
//         >
//             {children}
//         </motion.div>) : children
//     );
// };

// export default TranslateAnimationEffect;
