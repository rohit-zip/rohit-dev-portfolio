import React from 'react';
import {Spotlight} from "@/components/aceternity/Spotlight";
import {TextGenerateEffect} from "@/components/aceternity/TextGenerateEffect";
import Particles from "@/components/aceternity/Particles";
import BlurIn from "@/components/aceternity/TextBlurIn";
import ResumeButton from "@/components/custom/ResumeButton";
import heroData from "@/configurations/json/HeroSection.json";

const HeroSection = ({
    small = heroData.small,
    title = heroData.title
                     }) => {
    return (
        <div className="pt-10 pb-0 md:pt-36">

            <Particles
                className="absolute inset-0"
                quantity={250}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
            </div>

            <div className="flex justify-center flex-col items-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        {small}
                    </p>

                    <TextGenerateEffect
                        index={5}
                        words={title}
                        className="text-center text-[30px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        {heroData.subtitle}
                    </p>
                </div>

                <ResumeButton />

                <div className={"mt-10"}>
                    <BlurIn
                        word={heroData.description}
                        className={"text-sm md:text-lg tracking-wide font-light text-center"}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;