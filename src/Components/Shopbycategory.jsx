import React from 'react'

const Shopbycategory = () => {
  return (
    <div className='w-full flex mt-16 p-3 gap-2 lg:flex-row flex-col items-center justify-center '>

        <div className="left-section w-full lg:w-1/2 h-[100vw] lg:h-full  flex flex-col gap-2">
            <div className="top bg-black w-full h-1/2 overflow-hidden ">
                <img className='h-full w-full' src="src/assets/img/lt-main.png" alt="" />
            </div>
            <div className="bottom  w-full h-1/2 flex gap-2">
                <div className="sec-1 w-1/2 h-full bg-white overflow-hidden">
                    <img className='h-full' src="src/assets/img/ltlt.png" alt="" />
                </div>
                <div className="sec-2 w-1/2 h-full overflow-hidden">
                    <img className='h-full' src="src/assets/img/ltrt.png" alt="" />
                </div>
            </div>
        </div>


        <div className="right-section flex w-full lg:w-1/2 h-[100vw] lg:h-full gap-2">
            <div className="left-sec w-1/2 h-full flex flex-col gap-2">
                <div className="sec-1 w-full h-1/2 overflow-hidden">
                    <img className='h-full' src="src/assets/img/rttp.png" alt="" />
                </div>
                <div className="sec-2 w-full h-1/2 overflow-hidden">
                    <img className='h-full' src="src/assets/img/rtbt.png" alt="" />
                </div>
            </div>
            <div className="right-sec w-1/2 h-full overflow-hidden">
                <img className='h-full' src="src/assets/img/rtmain.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Shopbycategory