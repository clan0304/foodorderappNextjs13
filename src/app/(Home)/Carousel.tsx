'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { useRef } from 'react';
import { carouselItems } from './CarouselItem';
import Image from 'next/image';

const Carousel = () => {
  const sliderRef = useRef<any>();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <Slider {...settings} ref={sliderRef}>
      {carouselItems.map((item, index) => {
        return (
          <div
            key={index}
            className="relative w-full aspect-[20/9] max-h-[80vh]"
          >
            <section className="relative w-full h-full mx-auto bg-white p-5 sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 rounded-xl">
              <div className="space-y-5 text-center">
                <div className="mx-auto bg-gray-200">
                  <Image
                    src={item.img}
                    alt="Boy"
                    fill
                    objectFit="cover"
                    className="brightness-75"
                  />
                </div>
              </div>
              <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center ">
                <p className="text-white font-semibold text-md xs:text-[5vw] sm:text-[6vw]">
                  {item.description}
                </p>
              </div>
            </section>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
