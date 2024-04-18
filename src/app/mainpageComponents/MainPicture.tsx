'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function MainPicture({ images }: {images: string[]}) {
  return (
    <div className="h-[760px] relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          images.map((image,i) => {
            return (
              <SwiperSlide key={i}>
                <img src={image} alt={i} />
              </SwiperSlide>
            );
          })
        }
        {/*   const images = ['https://plus.unsplash.com/premium_photo-1664116928414-2ab998603666?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1691434474131-01f982a2dab1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1712371962512-bfb8588dfebd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ] */}
      {/* <SwiperSlide>
        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1664116928414-2ab998603666?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1691434474131-01f982a2dab1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('https://images.unsplash.com/photo-1712371962512-bfb8588dfebd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      </SwiperSlide> */}

      </Swiper>
    </div>
  );
}