'use client'
import { useState, useEffect } from 'react';
import { Logo } from '../../../components';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';
import { Link } from 'react-scroll';
import styles from '../../../styles/Header.module.scss';
import stylesGames from '../../../styles/HomePage.module.scss';
import stylesCareer from '../../../styles/Career.module.scss';
import stylesAboutUs from '../../../styles/AboutUs.module.scss';
import stylesFooter from '../../../styles/Footer.module.scss';

const HeaderFromHeader = () => {
  const frame = window.innerWidth;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  };
  if (frame < 840) {
    return (
      <header className={styles.header}>
        <div className={styles.flex_box} style={{
          justifyContent: 'space-between',
          padding: '0 16px',
        }}>
          <Link 
            spy={true} 
            to={styles.container_header} 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            <Logo />
          </Link>
          <BurgerMenu />
        </div>
      </header>
    );
  } else {
    return (
      <header className={styles.header}>
        <div className={styles.flex_box}>
          <Link 
            spy={true} 
            to={styles.container_header} 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            <Logo />
          </Link>
            <nav className={styles.nav}>
              <ul className={styles.nav_list}>
                <Link 
                  spy={true} 
                  to={stylesGames.block_carousel} 
                  smooth={true} 
                  duration={500}
                  offset={-80}
                >
                  <li className={styles.nav_list__item}>Games</li>
                </Link>
                <Link 
                  spy={true} 
                  to={stylesCareer.container_career} 
                  smooth={true} 
                  duration={500}
                  offset={-80}
                >
                  <li className={styles.nav_list__item}>Career</li>
                </Link>
                <Link 
                  spy={true} 
                  to={stylesAboutUs.container_aboutUs} 
                  smooth={true} 
                  duration={500}
                  offset={-80}
                >
                  <li className={styles.nav_list__item}>About us</li>
                </Link>
              </ul>
            </nav>
            <Link 
              spy={true} 
              to={stylesFooter.container_footer}
              smooth={true} 
              duration={500}
              offset={-80}
            >
              <ul className={styles.flex_box_list}>
                <li className={styles.flex_box_list__contact}>Contact</li>
              </ul>
            </Link>
        </div>
      </header>
    );
  };
};

export default HeaderFromHeader;