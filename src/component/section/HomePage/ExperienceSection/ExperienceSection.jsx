import React from 'react'
import WorkTimeline from './WorkTimeline'

export default function ExperienceSection() {
  return (
    <div id="experience" className="bg-white relative">
        <div className="relative mt-20 flex flex-col">
                <div className="p-16 space-y-1 lg:pl-40 bg-slate-100">
                    <div className="text-xl font-poppin  tracking-normal text-gray-700">
                        -----------------------------------------
                    </div>
                    <div className="text-5xl font-poppin font-bold tracking-normal text-gray-700">   
                        WORK EXPERIENCE
                    </div>
                    <div className="text-xl font-poppin tracking-normal text-gray-700">
                        -----------------------------------------
                    </div>
                </div>
            </div>
        <WorkTimeline />
    </div>
  )
}
