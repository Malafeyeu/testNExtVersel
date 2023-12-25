'use client';
import styles from '../../../styles/Career.module.scss';
import Image from 'next/image';

const Card = ({
  img,
  title,
  requirements1,
  requirements2,
  requirements3,
  requirements4,
  requirements5
}) => {
  return (
    <article className={styles.block_card}>
      <Image 
        className={styles.block_card__img} 
        src={img.src}
        priority
        quality={100}
        alt={'icon'}
        width={img.width}
        height={img.height}
      />
      <h5 className={styles.block_card__title}>{title}</h5>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <span>{requirements1}</span>
        </li>
        <li className={styles.list__item}>
          <span>{requirements2}</span>
        </li>
        <li className={styles.list__item}>
          <span>{requirements3}</span>
        </li>
        <li className={styles.list__item}>
          <span>{requirements4}</span>
        </li>
        <li className={styles.list__item}>
          <span>{requirements5}</span>
        </li>
      </ul>
    </article>
  );
};

export default Card;