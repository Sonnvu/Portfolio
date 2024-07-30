import animation from "./Soldering.gif"

export default function HeroSection() {
    return (
            <div class="py-24 relative isolate px-6 lg:px-8 items-center ">
                <div class="absolute inset-x-30 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div class="relative left-[calc(90%-11rem)] aspect-[1200/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8080] to-[#fcdd89] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "></div>
                </div>

                <div className="mt-10">
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="mt-10 max-w-96 ">
                                <p className="text-lg font-semibold leading-8 text-gray-500">Hey! My name is</p>
                                <h1 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-6xl ">Son Vu</h1>
                                <p className="mt-5 text-lg font-semibold leading-6 text-gray-600">
                                    Welcome to my tinkering space! This is where I work on and showcase some of 
                                    my recent project from art to technology. Feel free to explore around!
                                </p>
                                <div class="mt-10 flex items-center gap-x-6">
                                    <a href="#" class="rounded-xl bg-yellow-400 px-14 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Resume</a>
                                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">My projects <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="items-center justify-center max-w-[600px] ">
                            <img src={animation} alt="loading..."/>
                        </div>
                    </div>
                </div>

                <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff7979] to-[#fcdd89] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] [clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)]"></div>
                </div>
            </div>
    )
}

{/* <img src={animation} alt="loading..." className="object-cover h-full w-full" /> */}