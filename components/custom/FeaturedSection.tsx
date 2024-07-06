import React from 'react';
import {TextGenerateEffect} from "@/components/aceternity/TextGenerateEffect";
import {BorderBeam} from "@/components/aceternity/BorderBeam";
import Image from "next/image";
import {cn} from "@/lib/utils";
import AnimatedShinyText from "@/components/aceternity/AnimatedShinyText";
import VisitBloggiosButton from "@/components/custom/VisitBloggiosButton";

const FeaturedSection = () => {

    return (
        <div className={"flex justify-center flex-col items-center relative gap-1 mb-10 mt-20"}>
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
                <VisitBloggiosButton />
            </div>
        </div>
    );
};

export default FeaturedSection;