import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

export default function ProjectCard({children, ProjectTitle, ProjectDescription, bgColor, imgUrl, github, id}) {
    return (
        <div id={id} className="m-10 relative flex flex-col w-2/5 p-7 rounded-3xl bg-white">
            <div className={twMerge("relative rounded-3xl flex justify-center items-center w-full h-96", bgColor)}>
                <div className="relative m-5 drop-shadow-lg max-h-72 object-contain overflow-hidden rounded-3xl">
                    <img className="rounded-2xl" src={imgUrl} alt="" />
                </div>
            </div> 
            <div className="relative justify-start mt-5">
                <h1 className="text-2xl font-poppin font-medium text-gray-700">{ProjectTitle}</h1>
                {children}
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