import React from 'react';
import {cn} from "@/lib/utils";
import Marquee from "@/components/aceternity/MagicMarquee";
import DotPattern from "@/components/aceternity/DotPattern";
import {marqueeA, marqueeB, marqueeD} from "@/constants/marqueeList";
import Image from "next/image";

const ReviewCard = ({
                        image,
                        label
                    }: {
    image: string;
    label: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-fit cursor-pointer overflow-hidden rounded-xl border p-4 flex items-center gap-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.20] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <Image
                src={image}
                alt={label}
                width={50}
                height={50}
            />

            <h4 className={"text-lg"}>
                {label}
            </h4>
        </figure>
    );
};

const SkillsMarquee = () => {
    return (
        <div
            className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent pt-10 pb-20 md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {marqueeA.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {marqueeB.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]">
                {marqueeD.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    );
};

export default SkillsMarquee;