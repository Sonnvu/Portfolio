import Header from "../../section/HomePage/Header";
import HeroSection from "../../section/HomePage/HeroSection/HeroSection";
import AboutSection from "../../section/AboutSection/AboutSection";
import ExperienceSection from "../../section/HomePage/ExperienceSection/ExperienceSection";
import { ScrollToTopDefault } from "../../utils/helper/ScrollToTopDefault";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import EducationSection from "../../section/HomePage/EducationSection/EducationSection";
import ContactSection from "../../section/HomePage/ContactSection/ContactSection";
import Footer from "../../section/HomePage/Footer/Footer";

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
            <EducationSection />
            <ContactSection />
            <Footer />
            <ScrollToTopDefault />
        </div>
    )
}