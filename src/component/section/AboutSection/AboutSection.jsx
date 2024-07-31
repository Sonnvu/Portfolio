import Widget from "../../utils/animation/card/Widget/Widget";
export default function AboutSection() {
    return (
        <div
            className="relative h-screen flex flex-col lg:px-8 bg-blue-100"
            id="about"
        >
            <div className="bg-amber-200 mt-4 p-6 mx-auto">
                <h1 className="lg:text-4xl font-extrabold tracking-normal text-[#3C3C3C]" >Test</h1>
            </div>
            <div className="p-3 bg-green-100 mx-auto">
                hello
            </div>
            <div className="flex flex-row bg-green-200 h-screen items-center p-7">
                <Widget>Project</Widget>
                <Widget>Work</Widget>
                <Widget>Sport</Widget>
                <Widget>Art</Widget>
                <Widget>Clubs & Organization</Widget>
            </div>
        </div>
    )
}