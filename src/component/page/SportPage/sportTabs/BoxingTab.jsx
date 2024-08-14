import boxingCorner from './boxingCorner.JPG'
import boxing1 from './boxing1.JPG'
import React from "react";

export default function BoxingTab() {
    return (
        <div>
            <div className='flex flex-row justify-center mx-32 space-x-11'>
                <img className='py-8 w-4/12 h-full' src={boxingCorner} alt=""/>
                <img className='py-8 w-4/6 h-full' src={boxing1} alt=""/>
            </div>
        </div>
    )
}