"use client";

import React from 'react';
import {cn} from "@/lib/utils";
import AnimatedShinyText from "@/components/aceternity/AnimatedShinyText";
import Image from "next/image";

const VisitBloggiosButton = ({
    text, link, buttonLogo
                             }: {
    text: string,
    link: string;
    buttonLogo: string
}) => {
    return (
        <div
            onClick={()=> window.open(link, "_blank")}
            className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
        >
            <AnimatedShinyText
                className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 gap-2">
                {buttonLogo && <Image src={buttonLogo} alt={"Bloggios"} width={18} height={18}/> }
                <span>{text}</span>
            </AnimatedShinyText>
        </div>
    );
};

export default VisitBloggiosButton;