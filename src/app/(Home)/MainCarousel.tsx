'use client';

import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Bibimbap from '../../images/bibimbap.jpg';
import SweetChilliChicken from '../../images/sweetchillichicken.jpeg';

import { SetStateAction, useState } from 'react';
import React from 'react';
import Image from 'next/image';

const MainCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="w-full h-full mr-10" interval={3000}>
      <Carousel.Item>
        <Image src={Bibimbap} alt="slide1" fill objectFit="cover" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={SweetChilliChicken} alt="slide1" fill objectFit="cover" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
