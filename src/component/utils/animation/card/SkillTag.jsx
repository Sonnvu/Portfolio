import React from 'react'
import {Link} from "react-router-dom";

export default function SkillTag({children, linkTo}) {

  return (
    <Link
        className="relative bg-slate-100 hover:bg-yellow-400 font-poppin text-sm text-gray-500 hover:text-white transition inline-block px-5 py-1 rounded-2xl m-1"
        to={linkTo}
    >
        {children}
    </Link>
  )
}
