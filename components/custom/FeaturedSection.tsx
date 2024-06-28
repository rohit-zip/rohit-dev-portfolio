import React from 'react';
import {TextGenerateEffect} from "@/components/aceternity/TextGenerateEffect";
import {BorderBeam} from "@/components/aceternity/BorderBeam";
import Image from "next/image";
import {TextReveal} from "@/components/aceternity/TextReveal";
import {cn} from "@/lib/utils";
import AnimatedShinyText from "@/components/aceternity/AnimatedShinyText";
import {useRouter} from "next/router";

const FeaturedSection = () => {

    return (
        <div className={"flex justify-center flex-col items-center relative gap-1 mb-10"}>
            <TextGenerateEffect
                index={5}
                words={"Featured"}
                className="text-center text-[28px] md:text-4xl lg:text-5xl"
            />

            <div className="relative w-full rounded-xl overflow-hidden p-[2px]">

                <Image
                    src={"/bloggios_demo.png"}
                    alt={"Bloggios"}
                    width={1600}
                    height={1600}
                    className={"w-full rounded-xl"}
                    objectFit={"cover"}
                />
                <BorderBeam/>
            </div>

            <div className={"mt-7 md:mt-10"}>
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText
                        className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 gap-2">
                        <Image src={"/bg-accent_rounded.svg"} alt={"Bloggios"} width={18} height={18} />
                        <span>Visit Bloggios</span>
                    </AnimatedShinyText>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;