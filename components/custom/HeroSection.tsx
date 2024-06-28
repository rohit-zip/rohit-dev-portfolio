import React from 'react';
import {Spotlight} from "@/components/aceternity/Spotlight";
import {TextGenerateEffect} from "@/components/aceternity/TextGenerateEffect";
import Particles from "@/components/aceternity/Particles";
import {HoverBorderGradient} from "@/components/aceternity/HoverBorderGradient";
import {IoMdCloudDownload} from "react-icons/io";
import BlurIn from "@/components/aceternity/TextBlurIn";

const HeroSection = ({
    small = "Rohit's Portfolio",
    title = "Hi, I'm Rohit Parihar, Passionate Java Full Stack Developer"
                     }) => {
    return (
        <div className="pt-10 pb-8 md:pb-20 md:pt-36">

            <Particles
                className="absolute inset-0"
                quantity={160}
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
                        Techie, Thinker, Tinkerer, A Full Stack Alchemist from India
                    </p>
                </div>

                <div className={"mt-10"}>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-10"
                    >
                        <IoMdCloudDownload className={"text-xl"} />
                        <span>Download CV</span>
                    </HoverBorderGradient>
                </div>

                <div className={"mt-10"}>
                    <BlurIn
                        word={"A Java Full Stack Developer with 2 Years of experience, skilled in backend (Java Spring Boot, Microservices, PostgreSQL, MySQL, Elasticsearch) and frontend (React JS, Next JS, Redux, Axios, React Query) development. Proficient in creating scalable, high-performance systems and responsive user interfaces. Experienced in Agile methodologies and Test-Driven Development (TDD), ensuring high-quality software delivery. Actively contributes to the open-source project \"Bloggios,\" featuring a microservices architecture, Spring Boot backend, Next JS and React JS frontend, and Flutter mobile app components, showcasing commitment to community-driven development and knowledge sharing."}
                        className={"text-lg tracking-wide font-light text-center"}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;