import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Mainbtn = () => {
  return (
    <div className='px-5 py-2 border-2 border-black rounded-full w-[10rem] flex items-center justify-between'>View All <span className='p-2 rounded-full bg-black text-white'><GoArrowUpRight /></span></div>
  )
}

export default Mainbtn