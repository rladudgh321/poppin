'use client'

import React, { useRef, useState } from 'react';
import { imagesItems, imagesProps } from "@/app/shared/interface";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function DetailCarousel({images}: imagesProps) {
    
  return (
    <div className="relative">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            <>
                <SwiperSlide>
                    <Image src={images.src} width={70} height={70} alt={images.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={images.fake} width={70} height={70} alt={images.title} />
                </SwiperSlide>
            </>
        }
      </Swiper>
    </div>
  );
}
