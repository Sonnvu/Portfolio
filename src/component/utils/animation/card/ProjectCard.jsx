import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

export default function ProjectCard({children, ProjectTitle, ProjectDescription, bgColor, imgUrl, github}) {
    return (
        <div className="m-10 relative flex flex-col lg:w-1/4 w-1/3 p-7 rounded-3xl bg-white">
            <div className={twMerge("relative rounded-3xl flex justify-center items-center w-full h-72", bgColor)}>
                {children}
                <div className="relative m-5 drop-shadow-lg max-h-52 object-contain overflow-hidden rounded-3xl">
                    <img className="rounded-2xl" src={imgUrl} alt="" />
                </div>
            </div> 
            <div className="relative justify-start mt-5 space-y-2">
                <h1 className="text-2xl font-poppin font-medium text-gray-700">{ProjectTitle}</h1>
                <p className="font-poppin text-gray-500">
                    {ProjectDescription}
                </p>
            </div>
            <div className="relative mt-5">
                <Link to={github} class="text-base font-semibold leading-6 text-gray-700">GitHub <span aria-hidden="true">&rarr;</span></Link>
            </div>
        </div>
    )
}