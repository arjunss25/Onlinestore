import React from 'react'
import { GoSearch } from 'react-icons/go';
import { IoCloseOutline } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className='absolute w-full h-[50vh] bg-white top-0 left-0 z-[50]'>
        <div className="top-sec w-full flex items-center justify-center gap-10 h-[15vh]">
            <GoSearch className='text-[1.5rem] cursor-pointer'/>
            <input type="text" className='w-[80vw] h-[6vh] rounded-[2rem] bg-zinc-200' />
            <IoCloseOutline  className='text-[2rem] cursor-pointer'/>
            
        </div>
    </div>
  )
}

export default Searchbar