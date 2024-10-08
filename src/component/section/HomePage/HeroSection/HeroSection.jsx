import animation from "./Soldering.gif"
import DomainAnimation from "../../../utils/animation/text/DomainAnimation";
import resume from "./Son_Vu.pdf"
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
            <div class="relative flex isolate lg:px-8 items-center mx-auto my-auto h-[700px] bg-slate-50">
                <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row md:grid-cols-2 sm:mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-10 p-6 space-y-5 ">
                            <p className="text-lg font-normal font-poppin text-gray-500">Hi! My name is</p>
                            <h1 className="text-5xl font-poppin font-bold tracking-normal text-gray-700">Son Vu</h1>
                            <DomainAnimation />
                            <p className="text-xl font-poppin font-normal leading-7 text-gray-700 pr-">
                                I'm a rising senior at the University of Pittsburgh pursuing a degree of 
                                <span className="text-gray-800 font-bold"> Computer Enigneering</span>. 
                                Welcome to my tinkering space where I showcase some of
                                my recent projects from art to technology. Feel free to explore around!
                            </p>
                            <div className="flex items-center gap-x-6">
                                <a href={resume} target="_blank" rel="noreferrer"
                                   className="rounded-xl bg-yellow-400 px-14 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">RESUME</a>
                                <Link to="/Portfolio#whatIdo" className="text-sm font-semibold leading-8 text-gray-900">Discover What I Do<span
                                    aria-hidden="true"> →</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[600px] px-7 pb-10">
                        <img src={animation} alt="loading..."/>
                    </div>
                </div>
            </div>
    )
}