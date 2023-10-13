
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Link from "next/link";
import HeroImage from "/assets/HeroNoBg.png";


const inter = Inter({ subsets: ['latin'] })
// pages/index.js
export default function Home () {
  return (
    <div>
      <Header />
      <main className={styles.main}>
      <div className={styles.hero_container}>
        <div className={styles.hero_left}>
          <div className={styles.hero_top}>
            <h1 className={styles.herotitle}>
              Create dynamic quizzes sets (A-Z) with ease
            </h1>
          </div>
          <div className={styles.hero_bottom}>
            <p className={styles.herodescription}>
              Simplify the process of creating and shuffling test questions with
              SpidreQuiz. Generate customized questionnaires and enhance your
              teaching or training materials
            </p>

            <Link href="/prod" className={styles.getstarted}>
              Get started
            </Link>
          </div>
        </div>
        <div className={styles.hero_right}>
          <Image src={HeroImage} className={styles.HeroImage} />
        </div>
      </div>
    </main>
    <div className={styles.bodyContainer}>
        
        </div>
    </div>
  );
};

