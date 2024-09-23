import React from 'react'
import Productcard from './Productcard'
import Mainbtn from './Mainbtn'

const Newlaunches = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center '>
        <h1 className='text-[#3C486B] text-[1.8rem] lg:text-[2.5rem] font-bold text-center'>New <span className='text-[#FF8686]'>Launches</span></h1>

        <h2 className='mb-10'>Recently Launched</h2>
        <div className="product-sec w-full flex gap-8 px-10 flex-wrap shrink-0 justify-center">
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        </div>
        <div className="bt-section mt-10">
        <Mainbtn/>
        </div>
    </div>
  )
}

export default Newlaunches