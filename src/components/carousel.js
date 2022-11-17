import { useState, useEffect, useRef } from "react";
import React from "react";
import {
  carousel,
  viewport,
  container,
  image,
  button,
  buttonGroup
} from "../styles/components/carousel.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Image = ({ src }) => {
  return (
    <div className={image} style={{ backgroundImage: `url(${src})` }}></div>
  );
};

const Carousel = ({ images }) => {
  const totalSlideNum = images.length; // total slide num
  const carouselRef = useRef(null);
  const [currSlide, setCurrSlide] = useState(0); // initailize first slide

  console.log(images);

  useEffect(() => {
    carouselRef.current.style.transform = `translateX(${currSlide * -100}%)`;
  });

  // button onclick functions
  const nextSlide = () => {
    // is the last slide, go to first
    if (currSlide === totalSlideNum - 1) {
      setCurrSlide(0);
    } else {
      setCurrSlide(currSlide + 1);
    }
  };
  const prevSlide = () => {
    // is the first slide, go to last
    if (currSlide === 0) {
      setCurrSlide(totalSlideNum - 1);
    } else {
      setCurrSlide(currSlide - 1);
    }
  };

  return (
    <div className={carousel}>
      <div className={buttonGroup}>
        <button onClick={prevSlide} className={button}>
          <AiOutlineLeft />
        </button>
        <button onClick={nextSlide} className={button}>
          <AiOutlineRight />
        </button>
      </div>

      <div className={viewport}>
        <div className={container} ref={carouselRef}>
          {images.map((img, i) => {
            return <Image key={i} src={img.url} />;
          })}
        </div>
      </div>

    </div >
  );
};

export default Carousel;
