'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { PictureActiveAtom } from '@/app/recoil';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface DetailCarouselProps {
  images: Array<{src:string}>;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function DetailCarousel({images, setActiveIndex }:DetailCarouselProps ) {

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
        onSlideChange={(v) => setActiveIndex(v.activeIndex)}
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
