// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import {pic} from "../../assets/01.jpg"

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import SlidesContent from './SlidesContent';

export const GallerySlides = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-container"
    >
      <SwiperSlide>
        <div className='swiper-img-1 flex items-center justify-center'>
          <SlidesContent />
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='swiper-img-2 flex items-center justify-center'>
          <SlidesContent />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='swiper-img-3'>
            <Image src={pic} alt="" width="100vw" height="100vh" />
        </div>
      </SwiperSlide>

      <div className='slide-btn-container'>
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  );
};

export const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <div>
        <BsArrowLeftCircle 
            className='bg-purple-400 rounded-full slide-prev-prev text-3xl text-white' 
            onClick={() => swiper.slidePrev()}
        />
    </div>
  );
}

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <div>
        <BsArrowRightCircle 
            className='bg-purple-400 rounded-full slide-btn-next text-3xl text-white' 
            onClick={() => swiper.slideNext()}
        />
    </div>
  );
}