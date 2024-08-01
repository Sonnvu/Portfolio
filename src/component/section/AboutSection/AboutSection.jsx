import Widget from "../../utils/animation/card/Widget/Widget";
import Art from "./table_drawing.jpg"
import Project from  "./Project.jpg"
import Sport from "./Sport.JPG"
import Work from "./Work.jpg"
import ClubOrg from "./ClubOrg.jpg"

export default function AboutSection() {
    return (
        <div
            className="relative h-screen flex flex-col lg:px-8"
            id="about"
        >
            <div className="mt-4 p-6 mx-auto relative ">
                <h1 className="lg:text-4xl font-extrabold tracking-normal text-gray-700" >ABOUT ME</h1>
            </div>
            <div className="relative p-3 max-w-2xl text-center text-gray-700 mx-auto ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,

            </div>
            <div className="relative flex flex-row h-screen items-center mx-5">
                <Widget imgUrl={Project} bgColor="bg-purple-100">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10" >PROJECT</h1>
                </Widget>
                <Widget imgUrl={Work} bgColor="bg-pink-100">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10" >WORK</h1>
                </Widget>
                <Widget imgUrl={Sport} bgColor="bg-orange-100">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10">SPORT</h1>
                </Widget>
                <Widget imgUrl={Art} bgColor="bg-fuchsia-100">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10" >ART</h1>
                </Widget>
                <Widget imgUrl={ClubOrg} bgColor="bg-red-100">
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10">Club & Organizations</h1>
                </Widget>
            </div>
        </div>
    )
}