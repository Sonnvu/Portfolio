import Widget from "../../utils/animation/card/Widget/Widget";
import Art from "./table_drawing.jpg"
import Project from  "./Project.jpg"
import Sport from "./Sport.JPG"
import Work from "./Work.jpg"
import ClubOrg from "./ClubOrg.jpg"
import {Fragment} from "react";

export default function AboutSection() {
    return (
        <div
            className="relative h-screen flex flex-col lg:px-8 bg-white bg-opacity-20"
            id="about"
        >
            <div className="mt-4 p-6 mx-auto relative ">
                <h1 className="lg:text-4xl font-normal font-serif tracking-normal text-gray-700" >About</h1>
            </div>
            <div className="relative p-3 max-w-2xl text-center text-gray-700 mx-auto ">
                <p className="text-xl text-center font-normal text-gray-500">
                    I'm a rising senior studying Computer Engineering at the University of Pittsburgh.
                    With the background of Embedded and Software Engineering,
                    I aim to discover beautiful ways on how technology can improve our lives.
                </p>
                <p className="font-semibold text-gray-500 p-3 mt-4">
                    Discover more about me below!
                </p>
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
                    <h1 className="lg:text-2xl font-extrabold tracking-normal text-white z-10">CLUBS & ORGANIZATIONS</h1>
                </Widget>
            </div>
        </div>
    )
}