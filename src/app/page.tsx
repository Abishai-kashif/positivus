import NavBar from "@/components/common/NavBar";
import {
    HeroSection,
    CaseStudySection,
    ContactUsSection,
    FooterSection,
    LetMakeThingsHappenSection,
    LogoGroupSection,
    OurWorkingProcessSection,
    ServiceSection,
    TeamSection,
} from "@/components/sections";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <NavBar />
            <div className=" md:mx-[85px] lg:pt-[20px] pt-12 flex flex-col gap-[80px]  mx-4">
                <HeroSection />
                <LogoGroupSection />
                <ServiceSection />
                <LetMakeThingsHappenSection />
                <CaseStudySection />
                <OurWorkingProcessSection />
                <TeamSection />
                <ContactUsSection />
                <FooterSection />
            </div>
        </main>
    );
}
