import React from 'react';
import {TextGenerateEffect} from "@/components/aceternity/TextGenerateEffect";
import {Button} from "@/components/aceternity/MovingBorders";

const ExperienceSection = () => {
    return (
        <div className={"flex flex-col items-center justify-center w-full md:w-[60%] mx-auto my-20 md:my-40"}>
            <TextGenerateEffect
                index={0}
                words={"Work Experience"}
                className="text-center text-[28px] md:text-4xl lg:text-5xl"
            />

            <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <img
                        src={"/assets/globallogic.png"}
                        alt={"GlobalLogic"}
                        className="lg:w-32 md:w-20 w-16 rounded-full aspect-square object-cover"
                    />
                    <div className="lg:ms-5">
                        <h2 className="text-start text-sm md:text-lg font-medium">
                            {"GlobalLogic - A Hitachi Group Company"}
                        </h2>
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            {"Software Engineer"}
                        </h1>
                        <h5 className="text-start text-xs md:text-sm font-medium">
                            {"July 2022 - Present"}
                        </h5>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            Spearheaded development of a scalable project using Spring Boot Microservices within Hitachi
                            Energy project.
                        </p>
                    </div>
                </div>
            </Button>
        </div>
    );
};

export default ExperienceSection;