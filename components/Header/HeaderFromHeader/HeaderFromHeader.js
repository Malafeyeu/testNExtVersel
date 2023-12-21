'use client'
import { useState, useEffect } from "react"
import { BurgerMenu, Logo } from "../../../components"
import { Link } from 'next/link'
import styles from '../../../styles/Header.module.scss'
import stylesGames from '../../../styles/HomePage.module.scss'
import stylesCareer from '../../../styles/Career.module.scss'
import stylesAboutUs from '../../../styles/AboutUs.module.scss'
import stylesFooter from '../../../styles/Footer.module.scss'

const HeaderFromHeader = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    
  }, []);

  if (!isClient) {
    return null;
  }
  if (window.innerWidth < 840) {
    return (
      <header className={styles.header}>
        <div className={styles.flex_box} style={window.innerWidth < 840 && {
          justifyContent: 'space-between',
          padding: '0 16px',
        }}>
          <Link>
            <Logo />
          </Link>
          <BurgerMenu />
        </div>
      </header>
    )
  } else {
    return (
      <header className={styles.header}>
        <div className={styles.flex_box}>
          {/* <Link href={styles.container_header}> */}
            <Logo />
          {/* </Link> */}
            <nav className={styles.nav}>
              <ul className={styles.nav_list}>
                {/* <Link href={stylesGames.block_carousel}> */}
                  <li className={styles.nav_list__item}>Games</li>
                {/* </Link> */}
                {/* <Link href={stylesCareer.container_career}> */}
                  <li className={styles.nav_list__item}>Career</li>
                {/* </Link> */}
                {/* <Link href={stylesAboutUs.container_aboutUs}> */}
                  <li className={styles.nav_list__item}>About us</li>
                {/* </Link> */}
              </ul>
            </nav>
            {/* <Link href={stylesFooter.container_footer}> */}
              <ul className={styles.flex_box_list}>
                <li className={styles.flex_box_list__contact}>Contact</li>
              </ul>
            {/* </Link> */}
        </div>
      </header>
    )
  }
}

export { HeaderFromHeader }