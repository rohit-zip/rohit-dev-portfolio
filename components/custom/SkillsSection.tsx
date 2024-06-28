import {TracingBeam} from "@/components/aceternity/TracingBeam";
import {twMerge} from "tailwind-merge";
import Image from "next/image";
import WordPullUp from "@/components/aceternity/WordPullUp";

export default function SkillsSection() {
    return (
        <TracingBeam className="px-0 md:px-6 mb-20">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {skillsContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <WordPullUp
                            className="text-xl font-bold tracking-[-0.02em] text-black dark:text-white text-xl md:text-5xl md:leading-[5rem] text-left"
                            words={item.title}
                        />

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const skillsContent = [
    {
        title: "Backend Development",
        description: (
            <>
                <p>
                    Sit duis est minim proident non nisi velit non consectetur. Esse
                    adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                    Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                    incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                    fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                    nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                    occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                    officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                    commodo et labore dolore commodo pariatur.
                </p>
                <p>
                    Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                    veniam in commodo id reprehenderit adipisicing. Proident duis
                    exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                </p>
                <p>
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        ),
        badge: "React",
        image:
            "/bloggios_demo.png",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p>
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                    deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                    non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                    sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                    velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                    commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                </p>
                <p>
                    In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
                    veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
                    reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                    cillum ut mollit.
                </p>
            </>
        ),
        badge: "Changelog",
        image:
            "/bloggios_demo.png",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p>
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                    deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                    non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                    sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                    velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                    commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                </p>
            </>
        ),
        badge: "Launch Week",
        image:
            "/bloggios_demo.png",
    },
];