import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Secondarynavbar = () => {
  return (
    <div className='w-full h-[10vh] bg-[#AAF1FF] px-10  hidden lg:flex items-center justify-between'>

        <div className="category-div">
            <Link className='flex gap-2 items-center'>Category <IoMdArrowDropdown /></Link>
        </div>

        <div className="nav-links-main flex gap-10">
            <Link>Home</Link>
            <Link className='flex gap-2 items-center' >Products <IoMdArrowDropdown /></Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </div>

        <div className="profile-main flex gap-5 items-center">
            <Link className='px-4 py-1 rounded-full border-[1px] border-black'>Login</Link>
            <Link className='px-4 py-1 rounded-full border-[1px] border-black'>Signup</Link>
            <Link className='text-[1.7rem]'><CgProfile /></Link>
        </div>
    </div>
  )
}

export default Secondarynavbar