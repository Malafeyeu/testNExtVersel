import HeaderFromHeader from './HeaderFromHeader/HeaderFromHeader'
import styles from '../../styles/Header.module.scss'

const Header = ({title, image}) => {
  return (
    <div className={styles.container_header}>
      <HeaderFromHeader />
      <div className={styles.block_w_gif}>
        <h1 className={styles.block_w_gif__title}>{title}</h1>
        <img className={styles.gif_earth} src={image.src} />
      </div>
    </div>
  )
}

export default Header