import React from 'react'
import holdcup from './holdcup.jpg'
import coaching from './Sport.jpg'
import jumping from './jumping.jpg'
import team from './team.jpg'
import walking from './walking.jpg'
import batting from './batting.jpg'
import huddling from './huddle.jpg'
import pitching from './pitching.jpg'
import { FaWalkieTalkie } from 'react-icons/fa6'

export default function BaseballTab() {
    return (
        <div className='flex'>
            <div className="flex flex-wrap mx-auto space-y-5">
                <img className='py-8 w-3/4 mx-auto' src={team} alt="" />  
                <div className='flex flex-row justify-center mx-32 space-x-11'>
                    <img className='py-8 w-4/12' src={coaching} alt="" />       
                    <img className='py-8 w-4/6' src={jumping} alt="" />  
                </div>  
                <img className='py-8 w-3/4 mx-auto' src={walking} alt="" />   
                <img className='py-8 w-3/4 mx-auto' src={holdcup} alt="" />   
                <div className='flex flex-row justify-center mx-auto space-x-11'>
                    <img className='py-8 w-4/12' src={batting} alt="" />       
                    <img className='py-8 w-4/6' src={huddling} alt="" />  
                </div> 
            </div>
        </div>
    )
}
