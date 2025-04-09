import React from 'react'

export default function WorkTimeline() {
  return (
    // <!-- component -->
    <section class="relative flex flex-col justify-center overflow-hidden">
        <div class="w-full h-full mx-auto px-4 md:px-6 py-5">
            <div class="relative flex flex-col justify-center py-10">

                <div class="relative mx-auto w-3/5 ">
                
                    {/* <!-- Vertical Timeline #1 --> */}
                    <div class="w-full flex flex-col">

                        {/* <!-- Item #1 --> */}
                        <div id="philips" class="relative pl-8 sm:pl-32 py-6 group">
                            {/* <!-- Purple label --> */}
                            <div class="font-medium text-yellow-400 mb-1 sm:mb-0">Industry Project</div>
                            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                            <div
                                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 ">
                                <time
                                    class="sm:absolute -left-14 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3 sm:mb-0 text-slate-500">Dec 2024
                                    - Aug 2024
                                </time>
                                <div class="text-xl font-bold text-slate-700 font-poppin">Bechtel Plant Machinery, Inc</div>
                            </div>
                            <div class="text-gray-500 mb-2 -mt-1">Pittsburgh, PA</div>
                            {/* <!-- Content --> */}
                            <div class="text-slate-500">- Established data transmission between sensors to a PostgreSQL database deployed on a AWS EC2 instance for reliable
                            communications simultaneously up to 4 sensors
                            </div>
                            <div class="text-slate-500">- Developed Java Spring Boot API Gateway Application implementing REST APIs to receive HTTP requests from sensor
                            modules and React frontend that display key metrics including air temperature, soil temperature, soil PH, and soil moisture
                            </div>
                        </div>

                        {/* <!-- Item #2 --> */}
                        <div id="philips" class="relative pl-8 sm:pl-32 py-6 group">
                            {/* <!-- Purple label --> */}
                            <div class="font-medium text-yellow-400 mb-1 sm:mb-0">Software Engineer Co-op</div>
                            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                            <div
                                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 ">
                                <time
                                    class="sm:absolute -left-14 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3 sm:mb-0 text-slate-500">Aug 2024
                                    - Aug 2023
                                </time>
                                <div class="text-xl font-bold text-slate-700 font-poppin">Philips Respironics</div>
                            </div>
                            <div class="text-gray-500 mb-2 -mt-1">Pittsburgh, PA</div>
                            {/* <!-- Content --> */}
                            <div class="text-slate-500">- Implemented unit and component testing for Kafka messaging
                                queue integration with enterprise Java Spring Boot backend application using Junit and
                                Mockito.
                            </div>
                            <div class="text-slate-500">- Developed health patients POU graphs component in JavaScript
                                using Angular and React over 3 Rally sprints within Agile Scrum environment.
                            </div>
                            <div class="text-slate-500">- Developed Java and Python scripts to process approximately 1.4
                                million and 1.7 million patients and equipment assignment records respectively from
                                MongoDB using Studio 3.
                            </div>
                        </div>

                        {/* <!-- Item #2 --> */}
                        <div id="shrec" class="relative pl-8 sm:pl-32 py-6 group">
                            {/* <!-- Purple label --> */}
                            <div class="font-medium text-yellow-400 mb-1 sm:mb-0">Research Assistant</div>
                            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                            <div
                                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time
                                    class="sm:absolute -left-14 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3 sm:mb-0 text-slate-500">May
                                    2022 - Aug 2022
                                </time>
                                <div class="text-xl font-bold text-slate-700 font-poppin">SHREC: Center for Space,
                                    High-Performance, and Resilient Computing
                                </div>
                            </div>
                            <div class="text-gray-500 mb-2 -mt-1">Pittsburgh, PA</div>
                            {/* <!-- Content --> */}
                            <div class="text-slate-500">- Researched pre-image processing techniques and FPGA hardware
                                acceleration to minimize latency in object identification and hand segmentation.
                            </div>
                            <div class="text-slate-500">- Implemented software and hardware emulation in C/C++ for
                                Gaussian and Sobel filters using Vitis on Ubuntu OS, achieving 67% reduction in latency.
                            </div>
                        </div>
                        {/* <!-- Item #3 --> */}
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            {/* <!-- Purple label --> */}
                            <div class="font-medium text-yellow-400 mb-1 sm:mb-0">Software Engineer Co-op</div>
                            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                            <div
                                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time
                                    class="sm:absolute -left-14 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3 sm:mb-0 text-slate-500">March
                                    2021 - June 2021
                                </time>
                                <div class="text-xl font-bold text-slate-700 font-poppin">Vietsoftpro</div>
                            </div>
                            <div class="text-gray-500 mb-2 -mt-1">Hanoi, Vietnam</div>
                            {/* <!-- Content --> */}
                            <div class="text-slate-500">- Researched technological solutions for virtual reality and 3D
                                representation using Python for web scraping.
                            </div>
                            <div class="text-slate-500">- Designed a 3D layout of the Temple of Literature using
                                SketchUp to analyze product placem
                            </div>
                            <div id="education"></div>
                        </div>

                    </div>
                    {/* <!-- End: Vertical Timeline #1 --> */}
                    
                </div>

            </div>
        </div>
    </section>
  )
}
