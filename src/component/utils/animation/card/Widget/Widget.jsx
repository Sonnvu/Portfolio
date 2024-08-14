import {twMerge} from "tailwind-merge";
import {Link} from "react-router-dom";

const Widget = ({children, imgUrl, bgColor, linkTo}) => {
    const handleClick = (e) => {
        if(linkTo.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(linkTo);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        }
    }

    return (
        <Link
            to={linkTo}
            className="relative w-56 p-6 flex justify-center items-center h-96 overflow-hidden rounded-xl"
            onClick={handleClick}
        >
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