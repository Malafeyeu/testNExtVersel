'use client';
import styles from '../../styles/Footer.module.scss';
import IconLink from './IconLink';
import star from '../../public/Star.png';
import { 
  Telegram, 
  Twitter,
  Youtube,
  Discord,
} from '../../public/variables';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const arrIcons = [
  {telegram: Telegram},
  {twitter: Twitter},
  {youtube: Youtube},
  {discord: Discord},
];

const Footer = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const id = new Date().getMilliseconds()
    // const response = fetch('/', {
    //   headers: POST,
    // })
    // .then(console.log('done'))
    // .catch(console.log('error'))
    setInputValue('')
    document.querySelector('input').value = '';
  }

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
    <footer className={styles.container_footer}>
      <div className={styles.flex_block}>
        <div className={styles.upper_block}>
          <div className={styles.block_w_logo}>
            <Image
              src={star}
              alt='img'
              className={styles.block_w_logo__logo}
              priority
              quality={100}
            />
            <h2 className={styles.block_w_logo__title}>Overstar</h2>
          </div>
          <span className={styles.upper_block__title}>Subscribe for our vacancies Make your vision real</span>
          <div className={styles.form_email}>
            <input 
              className={styles.form_email__text}
              placeholder='Email address'
              value={inputValue}
              onChange={(e) => handleInput(e)}
              />
            <div className={styles.form_email__btn} onClick={handleSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47" fill="none">
                <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H42C46.4183 0 50 3.58172 50 8V46.0784H0V8.00001Z" fill="#003E66"/>
                <path d="M22.1541 26.8485L25.9749 23.3273L22.1541 19.8062L23.3332 18.7195L28.3332 23.3273L23.3332 27.9352L22.1541 26.8485Z" fill="white"/>
              </svg>
            </div>
            
          </div>
          <div className={styles.border_bottom}/>
        </div>
        {windowWidth > 840 ? (
          <div className={styles.bottom_block}>
            <span className={styles.bottom_block__info}>Copyright ⓒ 2023 Overstars All rights reserved.</span>
            <nav className={styles.flex_block_w_links}>
              {arrIcons.map((el, index) => {
                for(let key in el) {
                  return (
                  <IconLink
                    alt={key}
                    svg={el[key]}
                    href={key}
                    key={index}
                  />
                )};
              })}
            </nav>
          </div>
        ) : (
          <div className={styles.bottom_block}>
            <nav className={styles.flex_block_w_links}>
              {arrIcons.map((el, index) => {
                for(let key in el) {
                  return (
                    <IconLink
                      alt={key}
                      svg={el[key]}
                      href={key}
                      key={index}
                    />
                  );
                };
              })}
            </nav>
            <span className={styles.bottom_block__info}>Copyright ⓒ 2023 Overstars All rights reserved.</span>
          </div>
        )};
      </div>
    </footer>
  );
};

export default Footer;