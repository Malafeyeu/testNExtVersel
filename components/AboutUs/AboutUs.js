import styles from '../../styles/AboutUs.module.scss'

const AboutUs = ({ 
  description, 
  title, 
  image,
  windowWidth
}) => {
  return (
    <section className={styles.container_aboutUs}>
      <div className={styles.flex_block}>
        { windowWidth > 640 ? (
          <>
            <article className={styles.block_w_info}>
              <h2 className={styles.block_w_info__title}>{title}</h2>
              <p className={styles.block_w_info__description}>{description}</p>
            </article>
            <div className={styles.block_w_img}>
              <img className={styles.block_w_img__img} src={image.src}/>
            </div>
          </>
        ) : (
          <>
            <article className={styles.block_w_info}>
              <h2 className={styles.block_w_info__title}>{title}</h2>
              <div className={styles.block_w_img}>
                <img className={styles.block_w_img__img} src={image.src}/>
                <p className={styles.block_w_info__description}>{description}</p>
              </div>
            </article>
          </>
        )
      }
      </div>
    </section>
  )
}

export { AboutUs }