import React from 'react'
import { Button } from 'react-scroll'

export default function SkillTag({children}) {
  return (
    <Button className="relative bg-slate-100 hover:bg-yellow-400 font-poppin text-sm text-gray-500 hover:text-white transition inline-block px-5 py-1 rounded-2xl m-1">
        {children}
    </Button>
  )
}
