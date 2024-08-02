import {twMerge} from "tailwind-merge";
import {Link} from "react-router-dom";

const Widget = ({children, imgUrl, bgColor}) => {
    return (
        <Link
            className="relative basis-1/5 m-8 p-6 flex justify-center items-center h-3/4 overflow-hidden rounded-2xl"
        >
            {/*<div className="absolute rounded-2xl border-4 overflow-ellipsis inset-0 flex brightness-[0.25]  z-10">*/}
            {/*    <img className="object-cover opacity-60" src={imgUrl} alt=""/>*/}
            {/*</div>*/}

            <div className={twMerge("absolute overflow-ellipsis inset-0 flex brightness-90", bgColor) }>
                <img className="absolute inset-0 object-cover h-full rounded-2xl border-white
                opacity-10 hover:opacity-100 duration-300 transition-all ease-in-out hover:border-0 border-[6px]" src={imgUrl} alt=""/>
            </div>
            <div className="z-10 justify-center items-center text-center">
                {children}
            </div>


        </ Link>
    )
}

export default Widget