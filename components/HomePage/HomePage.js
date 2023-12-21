import {
  CarouselPresenter, 
  GamePresenter,
} from "../../components"
import styles from '../../styles/HomePage.module.scss'

const HomePage = ({
  title, 
  callback, 
  onClick,
  showGame,
  id,
  data
}) => {
    return (
      <div className={styles.container_main}>
        {showGame ? (
          <GamePresenter id={id} onClick={onClick} />
        ) : (
        <div className={styles.block_flex}>
          <h2 className={styles.block_flex__title}>{title}</h2>
          <CarouselPresenter callback={callback} data={data} />
        </div>
        )
      }
    </div>
  )
}

export { HomePage }