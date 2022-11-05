import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOCR from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={4}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOCR} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio