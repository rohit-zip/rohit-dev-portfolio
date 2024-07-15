"use client";

import React from 'react';
import {HoverBorderGradient} from "@/components/aceternity/HoverBorderGradient";
import {IoMdCloudDownload} from "react-icons/io";
import resumeData from "@/configurations/json/ResumeButton.json";

const ResumeButton = () => {

    return (
        <div className={"mt-10"} onClick={()=> window.open(resumeData.link, "_blank")}>
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-10"
            >
                <IoMdCloudDownload className={"text-xl"}/>
                <span>{resumeData.text}</span>
            </HoverBorderGradient>
        </div>
    );
};

export default ResumeButton;