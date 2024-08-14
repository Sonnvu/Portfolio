import pitt from './Pitt-Campus.jpg'
import Course from "../../../utils/animation/card/Course";
export default function Pitt() {

    return (
        <div className="flex flex-col justify-center bg-slate-50">
            <div className="flex flex-col rounded-3xl p-4 m-10 mx-52">
                <div className="flex flex-col bg-white p-5 rounded-2xl">
                    <img className="rounded-2xl w-3/4" src={pitt} alt="PittSwanson"/>
                    <div className="relative justify-start mt-5">
                        <h1 className="text-2xl font-poppin font-semibold text-gray-700">University of Pittsburgh</h1>
                        <div className="flex flex-wrap items-center font-poppin text-gray-500 mt-3">
                            <p>Related Courses:</p>
                            <Course>ECE0302 : Data Structure & Algorithms with C++ </Course>
                            <Course>ECE1395 : Machine Learning</Course>
                            <Course>ECE1110 : Computer Organization & Architecture</Course>
                            <Course>ECE1190 : Advanced Digital Design</Course>
                            <Course>ECE1150 : Computer Networks</Course>
                            <Course>ECE0102 : Microelectronic Circuits</Course>
                            <Course>ECE1180 : Computational Modeling & Simulation</Course>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}