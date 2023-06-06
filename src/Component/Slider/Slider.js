import React from "react";
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import slides from "../Profile/slides";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"
import {Autoplay , EffectFade } from "swiper";
export default function Slider({slides}) {
  return (
    <div className="swiperSlider">
     
      <Swiper   
                modules={[Autoplay , EffectFade]} effect="fade"
                autoplay={{ delay: 3000 }}
                spaceBetween={2}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {slides.map((slide)=>(

                <SwiperSlide key={slide.id}>
                    <img src={slide.src} alt='slides' />
                </SwiperSlide>
                ))}

            </Swiper>
    </div>
  );
}
