import { NavBar } from "../components/Navbar"
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


        {/* Footer */}
    </div>
}