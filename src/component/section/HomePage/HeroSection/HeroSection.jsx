import animation from "./Soldering.gif"
import DomainAnimation from "../../../utils/animation/text/DomainAnimation";

export default function HeroSection() {
    return (
            <div class="relative flex isolate lg:px-8 items-center mx-auto my-auto h-screen">
                <div class="absolute inset-x-30 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div class="relative left-[calc(90%-11rem)] aspect-[1200/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8080] to-[#fcdd89] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "></div>
                </div>

                <div className="max-w-[1248px] mx-auto lg:flex lg:flex-row md:grid-cols-2 sm:mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-10 pl-16 space-y-2">
                            <p className="text-lg font-semibold font-sans text-gray-500">Hi! My name is</p>
                            <h1 className="text-5xl font-extrabold tracking-normal text-gray-700">SON VU</h1>
                            <DomainAnimation />
                            <p className="text-lg font-semibold leading-6 text-gray-500">
                                Welcome to my tinkering space where I showcase some of
                                my recent projects from art to technology. Feel free to explore around!
                            </p>
                            <div className="flex items-center gap-x-6 pt-3">
                                <a href="#"
                                   className="rounded-xl bg-yellow-400 px-14 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">RESUME</a>
                                <a href="#" className="text-sm font-semibold leading-8 text-gray-900">My projects <span
                                    aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[600px] px-7 pb-10">
                        <img src={animation} alt="loading..."/>
                    </div>
                </div>

                <div
                    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true">
                    <div
                        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff7979] to-[#fcdd89] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] [clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)]"></div>
                </div>
            </div>
    )
}