import { React, useEffect, useState } from 'react';
import AnimatedImg from '../AnimatedImg.jsx';
import styles from '../AnimatedImgMobile.module.css';

export default function Mobile() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });

    return () => {
      document.body.removeEventListener('scroll', () => {
        setScrollY(window.scrollY);
      });
    };
  }, [scrollY]);
  return (
    <>
      <AnimatedImg
        className={styles.logo}
        imagePath={require('../../img/logo.png')}
        animProperty="transform: translateY"
        start={0}
        end={-465}
        scrollY={scrollY}
        scrollStart={0}
        scrollEnd={800}
      />
      <AnimatedImg
        className={styles.cloud}
        imagePath={require('../../img/cloud.png')}
        animProperty="opacity"
        start={0}
        end={1}
        scrollY={scrollY}
        scrollStart={800}
        scrollEnd={1200}
      />
      <AnimatedImg
        className={styles.text}
        imagePath={require('../../img/cloudText.png')}
        animProperty="opacity"
        start={0}
        end={1}
        scrollY={scrollY}
        scrollStart={1200}
        scrollEnd={1600}
      />
      <AnimatedImg
        className={styles.buttons}
        imagePath={require('../../img/buttonsMobile.png')}
        animProperty="transform: translateY"
        start={610}
        end={0}
        scrollY={scrollY}
        scrollStart={1600}
        scrollEnd={2200}
      />
      <AnimatedImg
        className={styles.buttonsText}
        imagePath={require('../../img/buttonsTextMobile.png')}
        animProperty="opacity"
        start={0}
        end={1}
        scrollY={scrollY}
        scrollStart={2200}
        scrollEnd={2500}
      />
    </>
  );
}
