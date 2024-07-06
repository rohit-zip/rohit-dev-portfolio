"use client";

import React from 'react';
import {HoverBorderGradient} from "@/components/aceternity/HoverBorderGradient";
import {IoMdCloudDownload} from "react-icons/io";

const ResumeButton = () => {

    return (
        <div className={"mt-10"} onClick={()=> window.open("https://drive.google.com/file/d/1TAOxtGIWFIbLSvGUQ5oz8UZS0-nGBDdp/view?usp=sharing", "_blank")}>
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-10"
            >
                <IoMdCloudDownload className={"text-xl"}/>
                <span>Download CV</span>
            </HoverBorderGradient>
        </div>
    );
};

export default ResumeButton;