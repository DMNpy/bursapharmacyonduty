import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bina from './../assets/bina.png';
import tophane from './../assets/tophane.jpg';
import ulucami from './../assets/ulucami.jpg';
import kozahan from './../assets/kozahan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:5000,
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img className="w-full h-[820px] object-cover" src={bina} alt="Bina 1" />
        </div>
        <div>
          <img className="w-full h-[820px] object-cover" src={tophane} alt="Bina 2" />
        </div>
        <div>
          <img className="w-full h-[820px] object-cover" src={ulucami} alt="Bina 3" />
        </div>
        <div>
          <img className="w-full h-[820px] object-cover" src={kozahan} alt="Bina 4" />
        </div>
      </Slider>
      <button className="absolute top-1/2 left-4 text-white text-2xl focus:outline-none" onClick={() => sliderRef.current.slickPrev()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="absolute top-1/2 right-4 text-white text-2xl focus:outline-none" onClick={() => sliderRef.current.slickNext()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Home;
