"use client";

//next
import Image from "next/image";

//react
import { useState } from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import SwiperClass from "swiper";

//components
import ArrowLeft from "../atom/ArrowLeft";
import ArrowRight from "../atom/ArrowRight";

//styles
import styles from "./ImageSlider.module.css";

function ImageSlider() {
  const [swiperState, setSwiperState] = useState(new SwiperClass());

  const nextHandler = () => {
    swiperState?.slideNext();
  };
  const prevHandler = () => {
    swiperState?.slidePrev();
  };

  const images = [
    { src: "/images/1.png", alt: "Image 1" },
    { src: "/images/2.png", alt: "Image 2" },
    { src: "/images/3.png", alt: "Image 3" },
    { src: "/images/4.png", alt: "Image 4" },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.swiper}
        modules={[EffectCards]}
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperState(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{objectFit:"cover"}}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.customNavigation}>
        <button className={styles.prev} onClick={prevHandler}>
          <ArrowRight />
        </button>
        <button className={styles.next} onClick={nextHandler}>
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
