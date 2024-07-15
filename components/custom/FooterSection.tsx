"use client";

import React from 'react';
import {socialList} from "@/configurations/ts/socialList";

const FooterSection = () => {
    return (
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-6">
                <p className="md:text-base text-sm md:font-normal font-light">
                    {process.env.NEXT_PUBLIC_COPYRIGHT_TEXT}
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
    );
};

export default FooterSection;