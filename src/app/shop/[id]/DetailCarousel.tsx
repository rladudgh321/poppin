'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import Image from 'next/image';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function DetailCarousel({images}:{images: Array<{src:string}>} ) {
    
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
                    <Image src={images[0].src} width={70} height={70} alt={images[0].src} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={images[1].src} width={70} height={70} alt={images[1].src} />
                </SwiperSlide>
            </>
        }
      </Swiper>
    </div>
  );
}
