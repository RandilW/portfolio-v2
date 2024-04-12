"use client";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CommonLoader from "../components/commonComponents/CommonLoader";
import AnimatedButton from "../components/commonComponents/AnimatedButton";
import styles from "./styles/lost.module.css";

const Lost = () => {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, threshold: 0.5 });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? <CommonLoader name="Error" /> : null}
      </AnimatePresence>

        <main className={styles.container}>
            <p className={styles.heading}>Looks like you're lost</p>
            {/*<video autoPlay className="overlay lazy entered loaded"*/}
            {/*       src="/404.mp4" loop="" muted="" playsInline=""*/}
            {/*       data-ll-status="loaded"></video>*/}
            <AnimatedButton>
                <Link href="/" className={styles.home_btn}>
                    Back to home
                </Link>
            </AnimatedButton>


            {/*<Image*/}
            {/*    src="/404.png"*/}
            {/*    height={350}*/}
            {/*    width={250}*/}
            {/*    alt="not_found"*/}
            {/*    className={styles.not_found_image}*/}
            {/*    ref={imageRef}*/}
            {/*    style={{*/}
            {/*        bottom: isInView ? "0px" : "-200px",*/}
            {/*        transition: "bottom 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",*/}
            {/*    }}*/}
            {/*/>*/}
            <video autoPlay loop muted playsInline
                   controls={false}
                   style={{width: '554px', height: '180px', marginTop: '60px'}} >
                <source src="/404.mp4"/>
            </video>
        </main>
    </>
  );
};

export default Lost;
