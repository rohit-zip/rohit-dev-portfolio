import React from 'react';
import Link from "next/link";
import {Meteors} from "@/components/aceternity/Meteors";
import contactData from "@/configurations/json/ContactSection.json";

const ContactMe = () => {
    return (
        <div className={"w-full flex items-center justify-center"}>
            <div className="w-full relative max-w-screen-md">
                <div
                    className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"/>
                <div
                    className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col">

                    <h1 className="font-bold text-2xl md:text-3xl text-white mb-4 relative z-50 text-center">
                        {contactData.title}
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        {contactData.description}
                    </p>

                    <div className={"flex flex-col gap-2"}>
                        <div className={contactData.email ? "flex gap-2" : "hidden"}>
                            <span>Email -</span>
                            <Link href={`mailto:${contactData.email || ""}`} className={"underline"}>
                                {contactData.email}
                            </Link>
                        </div>

                        <div className={contactData.mobile ? "flex gap-2" : "hidden"}>
                            <span>Contact -</span>
                            <Link href={`tel:${contactData.mobile}`} className={"underline"}>
                                {contactData.mobileDisplay}
                            </Link>
                        </div>
                    </div>
                    <Meteors number={20}/>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;