import React, { useState, useEffect, useRef } from 'react'

export default function TabComponent({items}) {
    const [selectedTab, setSelectedTab] = useState(0)

    const firstbtnRef = useRef();

    useEffect(() => {
        firstbtnRef.current.focus();
    }, [])

    return (
        <div className="bg-white flex justify-center items-center">
            <div className='flex flex-col w-full'>
                <div className='p-5 rounded-2xl flex justify-between items-center gap-x-10 px-52 mx-32'>
                    {items.map((item, index) => (
                        <button 
                            className='bg-slate-100 w-full p-3 font-poppin font-medium hover:bg-slate-200 hover:shadow-sm rounded-full text-center focus:bg-amber-300  focus:text-white'
                            ref={index === 0 ? firstbtnRef : null}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div>
                    {items.map((item, index) => (
                        <div className={`${selectedTab === index ? '' : 'hidden'}`}>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
