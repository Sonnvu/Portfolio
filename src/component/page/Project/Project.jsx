import Header from "../../section/HomePage/Header";
import ShowcaseSection from "../../section/ProjectSection/ShowcaseSection";

export default function Project() {
    return (
        <div>
            <Header />
            <div className="relative mt-20 flex flex-col">
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