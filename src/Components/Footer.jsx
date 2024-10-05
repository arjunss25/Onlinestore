import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className='w-full h-auto lg:h-[50vh] mt-20 bg-[#01225B]'>

    {/* top */}
    <div className="top-section w-full h-auto lg:h-[40vh] flex flex-col lg:flex-row p-5">
        <div className="sec-ini-main flex lg:flex-row flex-col items-center justify-center">
            <div className="sec1 w-full lg:w-[15vw] h-full  flex flex-col">
                <h1 className='text-zinc-500 font-medium text-[1.2rem] '>COMPANY</h1>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Home</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>About</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Contact</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>FAQ</a>
            </div>
            <div className="sec2 w-full lg:w-[20vw] h-full flex flex-col">
                <h1 className='text-zinc-500 font-medium text-[1.2rem] '>INFORMATION</h1>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Privacy Policy</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Terms & Condition</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Refund Policy</a>
            </div>
            <div className="sec3 w-full lg:w-[25vw] h-full flex flex-col">
                <h1 className='text-zinc-500 font-medium text-[1.2rem] '>Location</h1>
                <a href="" className='text-white font-medium text-[1rem] w-[70%] '>Atya Enterprises, 2/274-G, Valiyarambath Building, Pannikkottur(PO) , Elettil Vattoli , Calicut , Kerala</a>
            </div>
            <div className="sec4 w-full lg:w-[20vw] h-full">
                <h1 className='text-zinc-500 font-medium text-[1.2rem] '>Contact</h1>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>shopco@gmail.com</a>
            </div>
        </div>
        <div className="sec5 w-full lg:w-[40vw] h-full flex flex-col items-end justify-between">
            <div className="top-sec w-full flex flex-col items-start lg:items-end">
                <Link className="text-[2rem] font-bold text-white">SHOP.CO</Link>
                <h2 className='text-white text-[1rem] text-justify '>Products that Match Your Lifestyle, Crafted for You</h2>
            </div>

            <div className="btm-sec flex flex-col items-center">
                <h1 className='text-white'>Follow Us</h1>
                <div className="links flex gap-5">
                    <a href="" ><FaFacebookF  className='bg-white rounded-full text-[2.2rem] p-2'/></a>
                    <a href="" ><LiaTelegramPlane  className='bg-white rounded-full text-[2.2rem] p-2'/></a>
                    <a href="" ><IoLogoInstagram  className='bg-white rounded-full text-[2.2rem] p-2'/></a>
                </div>
            </div>
        </div>
    </div>


    {/* bottom */}
    <div className="btm-sec w-full h-auto md:h-[10vh]  flex md:flex-row flex-col items-center justify-between px-5 py-5 gap-5 text-white border-white border-t-[1px]">
        <div className="contact-info flex gap-5">
            <h1 className='flex gap-2'><img className='w-6' src="src/assets/img/sml (2).png" alt="" />Help</h1>
            <h1 className='flex gap-2'><img className='w-6' src="src/assets/img/sml (1).png" alt="" />7856455582</h1>
        </div>
        <div className="copy">
            <h1>© 2024 All Rights Reserved</h1>
        </div>
        <div className="cards flex gap-2">
            <img src="src/assets/img/pay (1).png" alt="" />
            <img src="src/assets/img/pay (2).png" alt="" />
            <img src="src/assets/img/pay (3).png" alt="" />
            <img src="src/assets/img/pay (4).png" alt="" />
            <img src="src/assets/img/pay (5).png" alt="" />
        </div>
    </div>



    </div>
  )
}

export default Footer