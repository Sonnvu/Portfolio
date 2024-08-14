import React from 'react'

export default function TechCard({children, title, id}) {
  return (
    <div className="my-14 mx-16 relative flex flex-col w-1/2 p-12 rounded-3xl bg-white">
        <div className="relative">
            <h1 className="text-xl font-poppin font-medium text-gray-700 pl-2 pb-3">{title}</h1>
            <div className="relative flex flex-wrap">
                {children}
            </div>
        </div>
    </div>
  )
}
