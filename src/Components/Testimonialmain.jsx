import React from 'react'
import Testimonial from './Testimonial'

const Testimonialmain = () => {


const testimonialData =[
    {
        profile:'./src/assets/img/gsag 1.png',
        name:'John Doe',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nisi vel nunc suscipit, id interdum dui consequat. '
    },
    {
        profile:'src/assets/img/gsrhsrdh 1.png',
        name:'John Doe',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nisi vel nunc suscipit, id interdum dui consequat. '
    },
]



  return (
    <div className='mt-20 w-full h-[60vh] flex'>
        <div className="left-section w-[30vw] h-full flex items-center justify-center">
            <h1 className='text-[3.5rem] font-semibold leading-none'>What They Say <br/>About Us</h1>
        </div>



        <div className="right-section w-[70vw] h-full border-t-[2px] border-b-[2px] border-black flex items-center gap-5 pl-16">
            <Testimonial data={testimonialData}/>
        </div>
    </div>
  )
}

export default Testimonialmain