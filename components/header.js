// components/Header.js
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import React from "react";
import Link from "next/link";


// components/Header.js
export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.headers} ${scrollY > 60 ? styles['headerBoxShadow']: ''}`} style={{ height: scrollY > 60 ? '60px' : '100px', transition: 'height 0.3s' }}>
     <nav className={styles.navbar} style={{ height: scrollY > 60 ? '60px' : '100px', transition: 'height 0.3s' }}>
        <Link href="/" className={styles.logocontainer}>
          <h1 className={styles.spidrelogo} style={{ fontSize: scrollY > 60 ? '35px' : '', transition: 'height 0.3s' }}>
            SQ<label className={styles.dot} style={{ fontSize: scrollY > 60 ? '35px' : '', transition: 'height 0.3s' }}>.</label>
          </h1>
        </Link>
        <ul className={styles.navcontainer}>
          <Link href="/about" className={styles.about}>
            About Us
          </Link>
          <Link href="/contact" className={styles.contact}>
            Contact Us
          </Link>
          <Link href="/articles" className={styles.articles}>
            Articles
          </Link>
        </ul>
      </nav>
    </header>
  )
};
