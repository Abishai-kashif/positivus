import { teams } from "@/data";
import TeamCard from "../cards/TeamCard";
import MainButton from "../common/MainButton";
import TranslateAnimationEffect from "../TranslateAnimationEffect";

function TeamSection() {
    return (
        <section className="flex flex-col justify-center md:px-[85px] px-4">
            {/* header */}
            <div className="flex flex-col lg:flex-row items-center lg:gap-[40px] text-center lg:text-left">
                <h2 className="text-secondary bg-primary text-h2 px-[7px] rounded-[7px] font-medium py-0">
                    Team
                </h2>
                <p className="text-[18px] my-[2.6rem] max-w-[500px]">
                    Meet the skilled and experienced team behind our successful
                    digital marketing strategies
                </p>
            </div>

            {/* team container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[40px]">
                {teams.map((team, idx) => (
                    <TranslateAnimationEffect
                        delay={idx * 0.1}
                        translateAmount={400}
                        direction={(idx + 1) % 2 === 0 ? "x" : "y"}
                        // key={idx}
                    >
                        <TeamCard
                            key={idx}
                            name={team.name}
                            position={team.position}
                            experience={team.experience}
                            image={team.image}
                        />
                    </TranslateAnimationEffect>
                ))}
            </div>

            <MainButton
                text="See all team"
                classes="bg-secondary text-white hover:text-black text-[18px] w-full md:w-[269px] font-medium mt-[30px] md:mt-[39px] md:self-end"
            />
        </section>
    );
}

export default TeamSection;
