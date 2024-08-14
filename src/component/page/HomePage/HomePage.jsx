import Header from "../../section/HomePage/Header";
import HeroSection from "../../section/HomePage/HeroSection/HeroSection";
import AboutSection from "../../section/AboutSection/AboutSection";
import ExperienceSection from "../../section/HomePage/ExperienceSection/ExperienceSection";
import { ScrollToTopDefault } from "../../utils/helper/ScrollToTopDefault";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if(location.hash) {
            const targetElement = document.querySelector(location.hash);
            if(targetElement) {
                targetElement.scrollIntoView({behavior:'smooth'})
            }
        }
    }, [location])

    return (
        <div>
            <Header />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ScrollToTopDefault />
        </div>
    )
}