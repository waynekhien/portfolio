
import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillSection } from "../components/SkillSection"
import { Starbackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return <div className="min-h-screen">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <Starbackground />
        {/* NavBar */}
        <NavBar />
        {/* Main Content */}
        <main>
            <HeroSection />  
            <AboutSection />
            <SkillSection />
            <ProjectSection />
        </main>

        {/* Footer */}
    </div>
}