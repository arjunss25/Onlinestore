import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

const Productcard = () => {
  return (
    <div className='w-[23rem] h-[55vh] bg-[#F7F6FB] rounded-[1.5rem] pb-3'>
        <div className="product-img h-[55%] overflow-hidden relative">

            <div className="fav absolute top-5 left-5 bg-white w-10 h-10 rounded-full flex items-center justify-center text-[1.5rem]">
                <IoMdHeartEmpty />
            </div>

            <div className="offer absolute top-6 right-5 bg-white w-24 h-8 rounded-full flex items-center justify-center text-[1.5rem]">
                <h1 className='text-[1rem] font-semibold'>30% Off</h1>
            </div>


            <img src="../src/assets/img/productimg.png" alt="" />
        </div>

        <div className="elements h-[30%]  w-full flex pl-5 ">


            {/* left-sec */}
            <div className="left-section w-[60%] h-full flex flex-col justify-center leading-none gap-1 items-start">
                <h2 className='text-[0.9rem]'>Perfume</h2>
                <div className='w-44'>
                <h2 className='text-[1.5rem] font-semibold truncate'>SAUVAGE dior camilarie</h2>
                </div>

                <h1 className='text-[1.5rem] font-semibold'>₹1,999</h1>
                <h1 className='line-through text-red-400'>₹3,999</h1>
            </div>

            {/* right-sec */}
            <div className="right-section w-[40%] h-full flex flex-col items-end">


                <div className="review-btn  flex w-[5rem] h-[2rem] rounded-full bg-gradient-to-t from-green-500 to-green-800 flex items-center justify-center gap-2 text-white mt-5 mr-5">
                    <IoMdStar className='text-[1rem]'/>
                    <h1 className='text-[1rem]'>4.5</h1>
                </div>


                <div className="add-cart-btn w-[9rem] py-2 rounded-tl-full rounded-bl-full bg-black text-white flex mt-2 justify-center items-center gap-2 ">
                <IoMdCart className='text-[1.2rem]' />
                <h1 className='text-[0.9rem]'>Add to Cart</h1>
                </div>
            </div>
        </div>

        <div className="btn-sec h-[15%]  w-full flex items-center justify-center">
            <button className='px-14 py-2 border-2 border-orange-500 rounded-full text-orange-500 bg-white'>Buy Now</button>
        </div>


    </div>
  )
}

export default Productcard