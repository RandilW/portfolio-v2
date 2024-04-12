import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "../styles/testimonials.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import testimonials from "./json/testimonials";
import nnSirPic from "../../public/testimonials/NNsir_profile.png";
import sujithPic from "../../public/testimonials/sujith_profile.png";
import ramuPic from "../../public/testimonials/ramu_profilePic.png";

const imageSrc = (name) => {
  if (name === "Narasimhaiah Narahari") {
    return nnSirPic;
  }
  if (name === "Sujith Addanki") {
    return sujithPic;
  }
  if (name === "Ramu Challa") {
    return ramuPic;
  }
};

const Testimonials = () => {
  return (
    <section className={styles.about_me_container}>
      <p className={styles.heading}>What they said</p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {testimonials.map((testimonial) => {
          const { name, message, position } = testimonial;
          return (
            <SwiperSlide className={styles.swiper_slide} key={name}>
              <Image
                src="/blockquote.svg"
                height={40}
                width={40}
                alt="blockquote_pic"
                className={styles.blockquote_pic}
              />

              <p className={styles.testimonial_message}>{message}</p>

              <section className={styles.testimonial_container}>
                <Image
                  src={imageSrc(name)}
                  height={40}
                  width={40}
                  alt={name}
                  className={styles.testimonial_pic}
                  placeholder="blur"
                />

                <div>
                  <p className={styles.testimonial_name}>{name}</p>
                  <p className={styles.testimonial_position}>{position}</p>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
