import React from 'react'
import practice1 from './frisbee2.jpg'
import practice2 from './frisbee3.jpg'
import practice3 from './frisbee4.jpg'
import rmitfulbright from './rmitfulbright.jpg'
import rmithuddle from './rmithuddle.jpg'

export default function FrisbeeTab() {
  return (
      <div>
          <img className='py-8 w-3/4 mx-auto' src={rmitfulbright} alt=""/>
          <img className='py-8 w-3/4 mx-auto' src={rmithuddle} alt=""/>
          <img className='py-8 w-3/4 mx-auto' src={practice1} alt=""/>
          <img className='py-8 w-3/4 mx-auto' src={practice2} alt=""/>
          <img className='py-8 w-3/4 mx-auto' src={practice3} alt=""/>
      </div>
  )
}
