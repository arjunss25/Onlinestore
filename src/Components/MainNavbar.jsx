import React, { useState } from 'react';
import './MainNavbar.css';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { FaRegHeart } from 'react-icons/fa';
import Searchbar from './Searchbar';

const MainNavbar = () => {


  
  const [visible, setvisible] = useState(false)
  const seacrchToggle = () =>{
    setvisible(true)
    
  }
  console.log(visible)




  return ( 
    <div className="w-full h-[10vh] px-2 lg:px-10 flex items-center justify-between relative">
      <Searchbar status = {visible} />
      <div className="logo">
        <Link className="text-[1.5rem] font-bold">SHOP.CO</Link>
      </div>

      <div className="utilities flex items-center justify-center gap-3">
        <Link className="text-[1.5rem]">
          <GoSearch onClick={seacrchToggle} />
        </Link>
        <Link className="text-[1.2rem] lg:text-[1.5rem]">
          <FaRegHeart />
        </Link>

        <div className="relative">
          <Link className="px-3 lg:px-5 py-1 lg:py-2 bg-black text-white flex items-center justify-center gap-3 rounded-full text-[1.3rem] lg:text-[1rem]">
            <HiOutlineShoppingCart />{' '}
            <span className="hidden lg:block">Cart</span>
          </Link>
          <div className="item-number w-4 lg:w-5 h-4 lg:h-5 bg-red-600 absolute -top-1 lg:-top-1 right-0 rounded-full flex items-center justify-center text-white text-[0.5rem] lg:text-[0.8rem]">
            <h1>2</h1>
          </div>
        </div>

        <div className='block lg:hidden'>
          {/* menu */}
          <label className="hamburger text-black">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
