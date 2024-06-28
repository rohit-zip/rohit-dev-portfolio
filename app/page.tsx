import HeroSection from "@/components/custom/HeroSection";
import FeaturedSection from "@/components/custom/FeaturedSection";
import SkillsSection from "@/components/custom/SkillsSection";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-screen-xl w-full">
                <HeroSection />
                <SkillsSection />
                <FeaturedSection />
            </div>
        </main>
    )
}