import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Heroslider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Heroslider({images}) {
  return (
    <div className='w-full lg:h-[50vh]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination,]}
        className="mySwiper"
      >
        {images.map((items,key)=>{
          return(
            <div className=''>
              <SwiperSlide><img className='' src={items.image} alt="" /></SwiperSlide>
            </div>
          )
        })}
      </Swiper>
    </div>
  );
}
