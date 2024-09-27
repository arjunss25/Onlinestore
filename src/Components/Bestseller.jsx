import { img } from 'framer-motion/client'
import React from 'react'

const Bestseller = ({data}) => {
  return (
    <div className='w-full h-auto'>
        
        <h1 className='text-[#3C486B] text-[1.8rem] lg:text-[2.5rem] font-bold text-center mt-10'>New <span className='text-[#FF8686]'>Launches</span></h1>

        <div className='w-full  mt-10 flex items-center justify-center gap-5 flex-wrap'>
            {data.map((item,index)=>(
                <div key={index} className='flex flex-col items-center '>
                    <img src={item.img} className='w-[20rem]' alt="" />
                    <h1 className='text-[1.2rem] font-bold mt-2'>{item.title}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Bestseller