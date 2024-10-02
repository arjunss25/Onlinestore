import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className='w-full h-[50vh] mt-20 bg-[#01225B]'>

    {/* top */}
    <div className="top-section w-full h-[40vh] flex flex-col lg:flex-row p-5">
        <div className="sec-ini-main flex">
            <div className="sec1 w-[15vw] h-full bg-red-500 flex flex-col">
                <h1 className='text-zinc-500 font-medium text-[1.2rem] '>COMPANY</h1>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Home</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>About</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Contact</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>FAQ</a>
            </div>
            <div className="sec2 w-[20vw] h-full bg-green-500 flex flex-col">
                <h1 className='text-zinc-500 font-medium text-[1.2rem] '>INFORMATION</h1>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Privacy Policy</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Terms & Condition</a>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Refund Policy</a>
            </div>
            <div className="sec3 w-[25vw] h-full bg-blue-500 flex flex-col">
                <h1 className='text-zinc-500 font-medium text-[1.2rem] '>Location</h1>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>Atya Enterprises, 2/274-G, Valiyarambath Building, Pannikkottur(PO) , Elettil Vattoli , Calicut , Kerala</a>
            </div>
            <div className="sec4 w-[20vw] h-full bg-yellow-500">
                <h1 className='text-zinc-500 font-medium text-[1.2rem] '>Contact</h1>
                <a href="" className='text-white font-medium text-[1rem] w-fit'>shopco@gmail.com</a>
            </div>
        </div>
        <div className="sec5 w-[40vw] h-full bg-red-500 flex flex-col items-end justify-between">
            <div className="top-sec flex flex-col items-end">
                <Link className="text-[2rem] font-bold">SHOP.CO</Link>
                <h2 className='text-white text-[1rem] '>Products that Match Your Lifestyle, Crafted for You</h2>
            </div>

            <div className="btm-sec flex flex-col items-center">
                <h1>Follow Us</h1>
                <div className="links flex gap-5">
                    <a href="" ><FaFacebookF  className='bg-white rounded-full text-[2.2rem] p-2'/></a>
                    <a href="" ><LiaTelegramPlane  className='bg-white rounded-full text-[2.2rem] p-2'/></a>
                    <a href="" ><IoLogoInstagram  className='bg-white rounded-full text-[2.2rem] p-2'/></a>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}

export default Footer