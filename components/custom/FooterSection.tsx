"use client";

import React from 'react';
import {Meteors} from "@/components/aceternity/Meteors";
import Link from "next/link";
import {socialList} from "@/constants/socialList";

const FooterSection = () => {
    return (
        <>
            <div className={"w-full flex items-center justify-center"}>
                <div className="w-full relative max-w-screen-md">
                    <div
                        className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"/>
                    <div
                        className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col">

                        <h1 className="font-bold text-2xl md:text-3xl text-white mb-4 relative z-50 text-center">
                            Contact me
                        </h1>

                        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                            Reach out to me and let&apos;s discuss how I can help you achieve your goals. I&apos;m
                            actively seeking job opportunities where I can leverage my expertise and experience to
                            contribute to impactful projects. Let&apos;s connect and explore potential collaborations!
                        </p>

                        <div className={"flex flex-col gap-2"}>
                            <div className={"flex gap-2"}>
                                <span>Email -</span>
                                <Link href={"mailto:rohitparih@gmail.com"} className={"underline"}>
                                    rohitparih@gmail.com
                                </Link>
                            </div>

                            <div className={"flex gap-2"}>
                                <span>Contact -</span>
                                <Link href={"tel:+919571406506"} className={"underline"}>
                                    +91-9571406506
                                </Link>
                            </div>
                        </div>

                        {/* Meaty part - Meteor effect */}
                        <Meteors number={20}/>
                    </div>
                </div>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-6">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Rohit Parihar
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialList.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            onClick={()=> window.open(info.link, "_blank")}
                        >
                            <img src={info.img} alt="icons" width={20} height={20}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FooterSection;