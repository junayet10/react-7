

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Banner.css';
import 'swiper/css/pagination';
// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination ,Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
             <Swiper id='slide'
              autoplay={{
                delay: 2300,
                disableOnInteraction: false,
              }}
              loop={true} pagination={{clickable:true, el:'.drag'}}  modules={[Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide className='slider'
         style={{backgroundImage:`url('public/images/banner.png')`}}>
            <div className="container">
                       <h4>Mega Sale</h4>
                       <h2>Up To 35% Off</h2>
                       <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                       <a href="#">Shop Now</a>
            </div>



        </SwiperSlide>
        
        <SwiperSlide className='slider'
         style={{backgroundImage:`url('public/images/banner1.jpg')`}}>
            <div className="container">
                       <h4>Mega Sale</h4>
                       <h2>Up To 35% Off</h2>
                       <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                       <a href="#">Shop Now</a>
            </div>



        </SwiperSlide>

        
        <div className="container drag">

</div>
       
      </Swiper>
        </div>
    );
};

export default Banner;