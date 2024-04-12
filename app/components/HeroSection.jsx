"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/herosection.module.css";

const HeroSection = ({ scrollToProjectSection }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let scrollDirection = -1;

  const textScroll = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    if (firstText.current) {
      gsap.set(firstText.current, { xPercent: xPercent });
    }

    if (secondText.current) {
      gsap.set(secondText.current, { xPercent: xPercent });
    }
    requestAnimationFrame(textScroll);
    xPercent += 0.35 * scrollDirection;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // called when we scroll change the text direction

    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,

          onUpdate: (e) => {
            scrollDirection = e.direction === 1 ? -1 : 1;
          },
        },
        x: "-300px",
      });
    }
    requestAnimationFrame(textScroll);
  }, []);

  return (
      <section className={styles.hero_section_container}>
        <div className={styles.hero_section_text_container}>
          <Image
              src={"/hero_section_arrow.svg"}
              alt="down_arrow"
              height={30}
              width={30}
              className={styles.text_arrow}
          />
          <p>
            Developer, Designer
            <br/>& Student
          </p>
        </div>

        <div className={styles.sliding_text_container}>
          <div className={styles.sliding_text} ref={sliderRef}>
            <p>Hello <Image
                src={"/hello.svg"}
                alt="hello"
                width={100}
                height={100}
                className={styles.pb_logo}
                className={styles.wave}
            /></p>
            <p>I'm Randil</p>
          </div>
        </div>


          {/*<div className={styles.sliding_text_container}>*/}
          {/*  <div className={styles.sliding_text} ref={sliderRef}>*/}
          {/*    <p ref={firstText}>Randil Wijayananda —</p>*/}
          {/*    <p ref={secondText}>Randil Wijayananda —</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className={styles.main_container}>
            <div
                className={styles.cta_container}
                role="button"
                tabIndex={0}
                onClick={scrollToProjectSection}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    scrollToProjectSection();
                  }
                }}
            >
              <Image
                  src={"/cta_arrow.svg"}
                  height={25}
                  width={25}
                  alt="see-my-work-arrow"
                  className={styles.cta_arrow}
              />
              <Image
                  src={"/cta_text.svg"}
                  height={90}
                  width={90}
                  alt="see-my-work-button"
                  className={styles.cta_text}
              />
            </div>
          </div>
      </section>
);
};

export default HeroSection;
