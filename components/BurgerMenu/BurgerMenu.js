import { useState } from 'react';
import BurgerActive from './burgerIcons/BurgerActive';
import BurgerClose from './burgerIcons/BurgerClose';
import { Link } from 'react-scroll';
import styles from '../../styles/Header.module.scss';
import stylesGames from '../../styles/HomePage.module.scss';
import stylesCareer from '../../styles/Career.module.scss';
import stylesAboutUs from '../../styles/AboutUs.module.scss';
import stylesFooter from '../../styles/Footer.module.scss';

const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const handler = () => {
    setActive(!active);
  };

  return (
    <div className={active ? styles.burger_menu_active : styles.burger_menu}>
    {!active ? <BurgerActive onChange={handler}/>
      :
    <>
      <BurgerClose onChange={handler} />
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <Link 
            spy={true} 
            to={stylesGames.block_carousel} 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            <li className={styles.nav_list__item_games} onClick={handler}>Games</li>
          </Link>
          <Link 
            spy={true} 
            to={stylesCareer.container_career} 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            <li className={styles.nav_list__item} onClick={handler}>Career</li>
          </Link>
          <Link 
            spy={true} 
            to={stylesAboutUs.container_aboutUs} 
            smooth={true} 
            duration={500}
            offset={-80}
          >
            <li className={styles.nav_list__item} onClick={handler}>About us</li>
          </Link>
          <Link 
            spy={true} 
            to={stylesFooter.container_footer}
            smooth={true} 
            duration={500}
            offset={-80}
          >
            <li className={styles.nav_list__item} onClick={handler}>Contact</li>
          </Link>
        </ul>
      </nav>
    </>     
    }
    </div>
  );
};

export default BurgerMenu;