'use client';
import Card from './Card/Card';
import styles from '../../styles/Career.module.scss';
import { useEffect, useState } from 'react';
import img1 from '../../public/Fire.png';
import img2 from '../../public/Hearth.png';
import img3 from '../../public/User.png';

const job = [
  {
    img: img1,
    title: 'Junior Unity Developer',
    requirements1: 'Good understanding of game design and mechanics',
    requirements2: `Bachelor's degree in BSUIR or BSU`,
    requirements3: `Gay Orientation`,
    requirements4: `Passion for gaming and staying updated with industry trends`,
    requirements5: `Good communication and teamwork abilities`
  },
  {
    img: img2,
    title: 'Junior Unity Developer',
    requirements1: 'Good understanding of game design and mechanics',
    requirements2: `Bachelor's degree in BSUIR or BSU`,
    requirements3: `Gay Orientation`,
    requirements4: `Passion for gaming and staying updated with industry trends`,
    requirements5: `Good communication and teamwork abilities`
  },
  {
    img: img3,
    title: 'Junior Unity Developer',
    requirements1: 'Good understanding of game design and mechanics',
    requirements2: `Bachelor's degree in BSUIR or BSU`,
    requirements3: `Gay Orientation`,
    requirements4: `Passion for gaming and staying updated with industry trends`,
    requirements5: `Good communication and teamwork abilities`
  },
];

const Career = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    setCareerData(job);
  }, []);
  return (
    <section className={styles.container_career}>
      <div className={styles.block_flex}>
        <h2 className={styles.bloc_flex__title}>Career</h2>
        <div className={styles.block_flex_w_cards}>
          {careerData.map((el, i) => 
            <Card {...el} key={el.requirements1 + i} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Career;
