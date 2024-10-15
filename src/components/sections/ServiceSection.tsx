import React from "react";
import { services } from "@/data";
import { HoverEffect } from "../ui/HoverEffect";

export default function ServiceSection() {
    return (
        <section className="md:px-[85px] px-4">
            {/* heading */}
            <div className="flex flex-col lg:flex-row items-center lg:gap-[40px] text-center lg:text-left">
                <h2 className="text-secondary bg-primary text-h2 px-[7px] rounded-[7px] font-medium py-0">
                    Services
                </h2>
                <p className="text-[18px] my-[2.6rem] max-w-[580px]">
                    At our digital marketing agency, we offer a range of
                    services to help businesses grow and succeed online. These
                    services include:
                </p>
            </div>

            <HoverEffect items={services} />
        </section>
    );
}
