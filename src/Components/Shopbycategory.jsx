import React from 'react'

const Shopbycategory = () => {
  return (
    <div className='w-full bg-red-100 h-[80vh] flex mt-20'>

        <div className="left-section w-1/2 h-full bg-blue-100 flex flex-col">
            <div className="top bg-black w-full h-1/2"></div>
            <div className="bottom bg-orange-300 w-full h-1/2 flex">
                <div className="sec-1 w-1/2 h-full bg-white"></div>
                <div className="sec-2 w-1/2 h-full"></div>
            </div>
        </div>


        <div className="right-section flex w-1/2 h-full">
            <div className="left-sec w-1/2 h-full bg-red-500">
                <div className="sec-1 w-full h-1/2 bg-blue-300"></div>
                <div className="sec-2 w-full h-1/2 bg-pink-200"></div>
            </div>
            <div className="right-sec w-1/2 h-full bg-yellow-500"></div>
        </div>

    </div>
  )
}

export default Shopbycategory