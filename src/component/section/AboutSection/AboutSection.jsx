import Widget from "../../utils/animation/card/Widget/Widget";
import Art from "./table_drawing.jpg"
import Project from  "./Project.jpg"
import Sport from "./Sport.JPG"
import Work from "./Work.jpg"
import ClubOrg from "./ClubOrg.jpg"
import TechSection from "./TechSection";

export default function AboutSection() {
    return (
        <div
            className="relative flex flex-col"
            id="about"
        >
            <div className="relative flex flex-col">
                <div className="p-16 space-y-1 lg:pl-40 bg-slate-100">
                    <div className="text-xl font-poppin  tracking-normal text-gray-700">
                        ----------------
                    </div>
                    <div className="text-5xl font-poppin font-bold tracking-normal text-gray-700">   
                        ABOUT
                    </div>
                    <div className="text-xl font-poppin tracking-normal text-gray-700">
                        ----------------
                    </div>
                </div>
            </div>
            <div className="relative p-10 max-w-2xl text-center text-gray-700 mx-auto ">
                <p className="text-xl text-center font-poppin font-normal text-gray-500">
                    I'm a rising senior studying Computer Engineering at the University of Pittsburgh.
                    With the background of Embedded and Software Engineering,
                    I aim to discover beautiful ways on how technology can improve our lives.
                </p>
                <p className="font-semibold text-gray-500 font-poppin p-3 mt-4">
                    Here are some technologies I have experience with:
                </p>
            </div>
            <TechSection />
            <div className="relative flex flex-row py-16 justify-center items-center font-poppin bg-bgAboutHoriz space-x-24 md:px-10 md:">
                <Widget imgUrl={Project} bgColor="bg-blue-200" linkTo="/Project">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10" >PROJECT</h1>
                </Widget>
                
                <Widget imgUrl={Work} bgColor="bg-amber-100" linkTo="#experience">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10" >WORK</h1>
                </Widget>

                <Widget imgUrl={Sport} bgColor="bg-orange-200" linkTo="/sport">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10">SPORT</h1>
                </Widget>
                <Widget imgUrl={Art} bgColor="bg-rose-200" linkTo="/art">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10" >ART</h1>
                </Widget>
                <Widget imgUrl={ClubOrg} bgColor="bg-violet-200" linkTo="/org">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10">CLUBS & ORGANIZATIONS</h1>
                </Widget>
            </div>
        </div>
    )
}