import React from 'react'
import {motion} from 'framer-motion'
import { div } from 'framer-motion/client'

const Marquee = ({img}) => {
  return (
<div>

<motion.div className='mt-10 w-full h-[15vh] bg-black flex items-center justify-between' >
        {img.map((item,index)=>{
            return <motion.img initial={{x:0}} animate={{x:'-100%'}} transition={{ ease: "linear", repeat: Infinity, duration: 1 }}  className='w-[5vw]' key={index} src={item.img} alt="" />
            
        })}
    </motion.div>



</div>
  )
}

export default Marquee

