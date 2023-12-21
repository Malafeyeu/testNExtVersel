'use client'
import { useState } from "react"
import { BurgerActive, BurgerClose } from "../Imgs"
import { Link } from 'next/link'
import styles from '../../styles/Header.module.scss'
import stylesGames from '../../styles/HomePage.module.scss'
import stylesCareer from '../../styles/Career.module.scss'
import stylesAboutUs from '../../styles/AboutUs.module.scss'
import stylesFooter from '../../styles/Footer.module.scss'

const BurgerMenu = () => {
  const [active, setActive] = useState(false)

  const handler = () => {
    setActive(!active)
  }

  return (
    <div className={active ? styles.burger_menu_active : styles.burger_menu}>
    {!active ? <BurgerActive onChange={handler}/>
      :
    <>
      <BurgerClose onChange={handler} />
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <Link to={stylesGames.block_carousel} smooth={true} duration={500}>
            <li className={styles.nav_list__item_games} onClick={handler}>Games</li>
          </Link>
          <Link to={stylesCareer.container_career} smooth={true} duration={500}>
            <li className={styles.nav_list__item} onClick={handler}>Career</li>
          </Link>
          <Link to={stylesAboutUs.container_aboutUs} smooth={true} duration={500}>
            <li className={styles.nav_list__item} onClick={handler}>About us</li>
          </Link>
          <Link to={stylesFooter.container_footer} smooth={true} duration={500}>
            <li className={styles.nav_list__item} onClick={handler}>Contact</li>
          </Link>
        </ul>
      </nav>
    </>     
    }
    </div>
  )
}

export { BurgerMenu }