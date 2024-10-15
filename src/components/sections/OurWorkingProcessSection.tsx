"use client";

import React, { useState } from "react";
import WorkingProcessCard from "../cards/WorkingProcessCard";
import { Accordion } from "../ui/accordion";
import { processes } from "@/data";

function OurWorkingProcessSection() {
    const [value, setValue] = useState("");

    const handleAccordionChange = (value: string) => {
        setValue(value);
    };

    return (
        <section>
            {/* heading */}
            <div className="flex flex-col lg:flex-row items-center lg:gap-[40px] gap-0 text-center lg:text-left">
                <h2 className="text-secondary bg-primary text-h2 px-[7px] rounded-[7px] font-medium py-0">
                    Our Working{" "}
                    <span className="hidden lg:inline">Process</span>
                </h2>
                <div className="lg:hidden bg-primary text-h2 px-[7px] rounded-[7px] font-medium py-0">
                    Process
                </div>
                <p className="text-[18px] my-[2rem] lg:my-[2.6rem] max-w-[450px] lg:max-w-[292px]">
                    Step-by-Step Guide to Achieving Your Business Goals
                </p>
            </div>

            {/* processes */}
            <div className="mt-[40px]">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    onValueChange={handleAccordionChange}
                >
                    {processes.map((process, index) => (
                        <WorkingProcessCard
                            {...process}
                            currentValue={value}
                            key={index}
                        />
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default OurWorkingProcessSection;
