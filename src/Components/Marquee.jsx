import React from 'react'

const Marquee = ({img}) => {
  return (
    <div className='mt-10 w-full h-[15vh] bg-black'>
        {img.map((item,index)=>{
            <img className='' key={index} src={item} alt="" />
        })}
    </div>
  )
}

export default Marquee