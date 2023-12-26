import HeaderFromHeader from './HeaderFromHeader/HeaderFromHeader'
import styles from '../../styles/Header.module.scss'
import Image from 'next/image'
import earthGif from '../../public/giphy.gif'

const Header = ({title}) => {
  return (
    <header className={styles.container_header}>
      <HeaderFromHeader />
      <div className={styles.block_w_gif}>
        <h1 className={styles.block_w_gif__title}>{title}</h1>
        <Image 
          className={styles.gif_earth} 
          src={earthGif} 
          priority
          style={{
            width: '532px',
            height: 'auto'
          }}
          quality={100}
          alt={'earth gif'}
          unoptimized={true}
        />
      </div>
    </header>
  )
}

export default Header