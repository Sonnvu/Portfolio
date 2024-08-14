import Header from "../../section/HomePage/Header";
import ShowcaseSection from "../../section/ProjectSection/ShowcaseSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Project() {
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
            <div className="relative flex flex-col">
                <div className="p-16 space-y-1 lg:pl-40 bg-slate-100">
                    <div className="text-xl font-poppin  tracking-normal text-gray-700">
                        -----------------------
                    </div>
                    <div className="text-5xl font-poppin font-bold tracking-normal text-gray-700">   
                        PROJECTS
                    </div>
                    <div className="text-xl font-poppin tracking-normal text-gray-700">
                        -----------------------
                    </div>
                </div>
            </div>
            <ShowcaseSection />
        </div>
    )
}