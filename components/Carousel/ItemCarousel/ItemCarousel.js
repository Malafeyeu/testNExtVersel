import { HomePageModel } from "../../../components"
import styles from '../../../styles/HomePage.module.scss'

const ItemCarousel = ({
  className, 
  transform,
  opacity,
  display,
  src, 
  alt, 
  onChange,
  activeIndex,
  index,
  callback
}) => {
  const handleClick = () => {
    
    onChange();
    if (activeIndex === index) {
      HomePageModel.setId(activeIndex);
      callback();
    }
  }
  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        className={styles.item} 
        style={{
          transform,
          opacity,
          display,
        }}
        onClick={handleClick}
      />
      
    </>
  )
}

export default ItemCarousel