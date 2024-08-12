import {twMerge} from "tailwind-merge";
import {Link} from "react-router-dom";

const Widget = ({children, imgUrl, bgColor, linkTo}) => {
    return (
        <Link
            to={linkTo}
            className="relative w-56 p-6 flex justify-center items-center h-96 overflow-hidden rounded-xl"
        >
            {/*<div className="absolutse rounded-2xl border-4 overflow-ellipsis inset-0 flex brightness-[0.25] ">*/}
            {/*    <img className="object-cover opacity-60" src={imgUrl} alt=""/>*/}
            {/*</div>*/}

            <div className={twMerge("absolute overflow-ellipsis inset-0 flex", bgColor) }>
                <img className="relative object-cover h-full w-full rounded-2xl border-white
                opacity-15 hover:opacity-100 duration-300 transition-all ease-in-out hover:border-0 border-[6px]" src={imgUrl} alt=""/>
            </div>
            <div className="z-10 justify-center items-center text-center">
                {children}
            </div>
        </ Link>
    )
}

export default Widget