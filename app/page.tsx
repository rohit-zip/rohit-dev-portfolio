import HeroSection from "@/components/custom/HeroSection";
import FeaturedSection from "@/components/custom/FeaturedSection";
import SkillsSection from "@/components/custom/SkillsSection";
import SkillsMarquee from "@/components/custom/SkillsMarquee";
import ExperienceSection from "@/components/custom/ExperienceSection";
import ProjectsSection from "@/components/custom/ProjectsSection";
import FooterSection from "@/components/custom/FooterSection";
import ContactMe from "@/components/custom/ContactMe";

export default function Home() {
    const marqueeShown = process.env.NEXT_PUBLIC_MARQUEE_SHOWN;
    const experienceShown = process.env.NEXT_PUBLIC_WORK_EXPERIENCE_SHOWN;
    const featuredShown = process.env.NEXT_PUBLIC_FEATURED_SHOWN || false;
    const contactShown = process.env.NEXT_PUBLIC_CONTACT_SHOWN || false;

    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-screen-xl w-full select-none">
                <HeroSection />
                {marqueeShown === "true" && <SkillsMarquee />}
                <SkillsSection />
                {experienceShown === "true" && <ExperienceSection />}
                {featuredShown === "true" && <FeaturedSection />}
                <ProjectsSection />
                {contactShown === "true" && <ContactMe />}
                <FooterSection />
            </div>
        </main>
    )
}