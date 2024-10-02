import React from 'react'

const Testimonial = ({data}) => {
  return (
    <>
        {data.map((item,index)=>{
            return(
                <div className='w-[30vw] h-[35vh] bg-white rounded-[2rem] border-[2px] border-black'>
                    <div className="top-sec w-full h-[50%]  flex items-center justify-between px-10 ">
                        <div className="profile-img w-20 h-20 rounded-full bg-black">
                            <img src={item.profile} alt="" />
                        </div>

                        <div className="name-sec w-[16vw] h-[6vh] rounded-[2rem] bg-[#01225B] flex items-center justify-center">
                            <h2 className='text-white text-[1rem]'>{item.name}</h2>
                        </div>
                    </div>

                    <div className="bottom-sec w-full h-[50%] px-8 flex items-start  justify-center">
                        <p>{item.description}</p>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Testimonial