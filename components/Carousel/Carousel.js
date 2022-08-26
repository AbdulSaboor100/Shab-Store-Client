import React from "react";
import styles from "./Carousel.module.scss";
import CarouselLib from "react-elastic-carousel";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className={styles.carousel_container}>
      <CarouselLib pagination={false}>
        <div className={`${styles.merch_imgs} darkBlueColor`}>
          <Image
            src="/images/merch_shirt.jpg"
            width={500}
            height={300}
            objectFit="contain"
            alt="merch shirt image"
          />
        </div>
        <div className={`${styles.merch_imgs} darkBlueColor`}>
          <Image
            src="/images/merch_shirt.jpg"
            width={500}
            height={300}
            objectFit="contain"
            alt="merch shirt image"
          />
        </div>
        <div className={`${styles.merch_imgs} darkBlueColor`}>
          <Image
            src="/images/merch_shirt.jpg"
            width={500}
            height={300}
            objectFit="contain"
            alt="merch shirt image"
          />
        </div>
      </CarouselLib>
    </div>
  );
};

export default Carousel;
