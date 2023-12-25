'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/AboutUs.module.scss';
import gif from '../../public/AboutUs.gif';
import Image from 'next/image';

const AboutUs = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Вызывается при монтировании компонента
    updateWindowWidth();

    // Добавляет слушатель изменения размера окна
    window.addEventListener('resize', updateWindowWidth);

    // Убирает слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <section className={styles.container_aboutUs}>
      <div className={styles.flex_block}>
        { windowWidth > 640 ? (
          <>
            <article className={styles.block_w_info}>
              <h2 className={styles.block_w_info__title}>About us</h2>
              <p className={styles.block_w_info__description}>We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.</p>
            </article>
            <div className={styles.block_w_img}>
              <Image
                className={styles.block_w_img__img}
                src={gif} 
                priority
                quality={100}
                alt={'gif'}
              />
            </div>
          </>
        ) : (
          <>
            <article className={styles.block_w_info}>
              <h2 className={styles.block_w_info__title}>About us</h2>
              <div className={styles.block_w_img}>
                <Image
                  className={styles.block_w_img__img}
                  src={gif} 
                  priority
                  quality={100}
                  alt={'gif'}
                />
                <p className={styles.block_w_info__description}>We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.</p>
              </div>
            </article>
          </>
        )
      }
      </div>
    </section>
  );
};

export default AboutUs;