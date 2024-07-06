import HeroSection from "@/components/custom/HeroSection";
import FeaturedSection from "@/components/custom/FeaturedSection";
import SkillsSection from "@/components/custom/SkillsSection";
import SkillsMarquee from "@/components/custom/SkillsMarquee";
import ExperienceSection from "@/components/custom/ExperienceSection";
import ProjectsSection from "@/components/custom/ProjectsSection";
import FooterSection from "@/components/custom/FooterSection";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-screen-xl w-full">
                <HeroSection />
                <SkillsMarquee />
                <SkillsSection />
                <ExperienceSection />
                <FeaturedSection />
                <ProjectsSection />
                <FooterSection />
            </div>
        </main>
    )
}