import logo from './Logo.png';
import {Link, NavLink, useNavigate} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";

export default function Header() {
    const navigate = useNavigate();
    const HandleClick = (path, id) => {
        navigate(path);
        setTimeout(() => {
            document.getElementById(id).scrollIntoView({behavior: 'smooth'});
        }, 0);
    }

    return (
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <Link to="/Portfolio" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-12 w-auto" src={logo} alt=""/>
                    </Link>
                </div>
                <div class="flex lg:hidden">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <Link to="/Portfolio" class="text-base font-semibold leading-6 text-gray-700">Home</Link>
                    <button onClick={() => HandleClick('/Portfolio/about', 'about')} class="text-base font-semibold leading-6 text-gray-700">About</button>
                    <a href="#" class="text-base font-semibold leading-6 text-gray-700">Education</a>
                    <a href="#" class="text-base font-semibold leading-6 text-gray-700">Experience</a>
                    <a href="#" class="text-base font-semibold leading-6 text-gray-700">Project</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" class="text-base font-semibold leading-6 text-gray-700">Contact Me <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
    )
}