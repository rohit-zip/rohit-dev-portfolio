import {TracingBeam} from "@/components/aceternity/TracingBeam";
import WordPullUp from "@/components/aceternity/WordPullUp";
import {skillsContent} from "@/configurations/ts/skillsData";

export default function SkillsSection() {
    return (
        <TracingBeam className="px-0 md:px-6 mb-20">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {skillsContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-16">
                        <WordPullUp
                            className="font-bold tracking-[-0.02em] text-black dark:text-white text-xl md:text-5xl md:leading-[5rem] text-left"
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