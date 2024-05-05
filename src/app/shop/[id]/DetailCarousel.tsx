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
import { Dispatch, SetStateAction, useEffect } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

interface DetailCarouselProps {
  images: Array<{src:string}>;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function DetailCarousel({images, setActiveIndex }:DetailCarouselProps ) {
  useEffect(()=>{
    const img = document.querySelector('.swiper img');
    if(img?.clientWidth !== 70) {
      history.go(0);
    }
  },[]);
  // const router = useRouter();
  // useEffect(()=>{
  //   const img = document.querySelector('.swiper img');
  //   if(img?.clientWidth !== 70) {
  //     router.refresh();
  //   }
  // },[router]);
  return (
    <>
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
        className="swiper"
      >
          <SwiperSlide key={1} className="swiper-slide">
              <Image src={images[0].src} width={70} height={70} alt={images[0].src} onLoad={e=> console.log('image e', e)} />
          </SwiperSlide>
          <SwiperSlide key={2}>
              <Image src={images[1].src} width={70} height={70} alt={images[1].src} />
          </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
