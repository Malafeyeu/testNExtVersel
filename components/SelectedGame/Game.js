'use client'
import styles from '../../styles/GamePage.module.scss'

const GamePage = ({data, onClick, frame}) => {
  const des = data[0]
  const { title, description, media } = des
  return (
    <>
    { frame > 840 ?
    <section className={styles.container_SelectedGame}>
      <div className={styles.block_w_info}>
        <h2 className={styles.block_w_info__title}>{title}</h2>
        <p className={styles.block_w_info__description}>{description}</p>
      </div>
      <div className={styles.block_w_media}>
        <div className={styles.block_w_media__btn_return} onClick={onClick}>
          <span className={styles.btn_return__text}>Go back</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_303_1103)">
              <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.3 16.3C15.91 16.69 15.28 16.69 14.89 16.3L12 13.41L9.11 16.3C8.72 16.69 8.09 16.69 7.7 16.3C7.31 15.91 7.31 15.28 7.7 14.89L10.59 12L7.7 9.11C7.31 8.72 7.31 8.09 7.7 7.7C8.09 7.31 8.72 7.31 9.11 7.7L12 10.59L14.89 7.7C15.28 7.31 15.91 7.31 16.3 7.7C16.69 8.09 16.69 8.72 16.3 9.11L13.41 12L16.3 14.89C16.68 15.27 16.68 15.91 16.3 16.3Z" fill="#FFEEEE"/>
            </g>
            <defs>
              <clipPath id="clip0_303_1103">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.media_box}>
          {media}
        </div>
      </div>
    </section> 
    :
    <section className={styles.container_SelectedGame}>

        <h2 className={styles.container_SelectedGame__title}>{title}</h2>

      <div className={styles.block_w_media}>
        <div className={styles.block_w_media__btn_return} onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_303_1103)">
              <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.3 16.3C15.91 16.69 15.28 16.69 14.89 16.3L12 13.41L9.11 16.3C8.72 16.69 8.09 16.69 7.7 16.3C7.31 15.91 7.31 15.28 7.7 14.89L10.59 12L7.7 9.11C7.31 8.72 7.31 8.09 7.7 7.7C8.09 7.31 8.72 7.31 9.11 7.7L12 10.59L14.89 7.7C15.28 7.31 15.91 7.31 16.3 7.7C16.69 8.09 16.69 8.72 16.3 9.11L13.41 12L16.3 14.89C16.68 15.27 16.68 15.91 16.3 16.3Z" fill="#FFEEEE"/>
            </g>
            <defs>
              <clipPath id="clip0_303_1103">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.media_box}>
          {media}
        </div>
      </div>
      <p className={styles.container_SelectedGame__description}>{description}</p>
    </section>
    }
    </>
  )
}

export { GamePage }