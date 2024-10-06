import React from 'react'
import { GoSearch } from 'react-icons/go';
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Searchbar = () => {
  return (
    <div className='absolute w-full h-[50vh] bg-white top-0 left-0 z-[50]'>
        <div className="top-sec w-full flex items-center justify-center gap-3 lg:gap-10 h-[15vh]">
            <GoSearch className='text-[1.5rem] cursor-pointer'/>
            <input type="text" className='w-[70vw] sm:w-[80vw] h-[6vh] rounded-[2rem] bg-zinc-200' />
            <IoCloseOutline  className='text-[2rem] cursor-pointer'/>
            
        </div>


        <div className="btm-sec w-full h-auto px-10 lg:px-20 py-10 lg:py-10 ">
            <h1 className='text-[1.8rem] text-zinc-500'>Quick Links</h1>
            <div className="links flex flex-col text-[1.5rem]">
                <Link>Perfumes</Link>
                <Link>Scent</Link>
            </div>
        </div>
    </div>
  )
}

export default Searchbar