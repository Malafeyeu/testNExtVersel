import Image from 'next/image';
import styles from '../../../styles/HomePage.module.scss'

const ItemCarousel = ({
  url,
  alt, 
  onChange,
  activeIndex,
  index,
  onClick
}) => {
    const offset = (activeIndex - index) / 4;
    const direction = Math.sign(activeIndex - index);
    const obsOffset = Math.abs(offset);

    const calculateTransformProperties = `
      rotateY(calc(${offset} * 80deg))
      scaleY(calc(1 + ${obsOffset} * -.1))
      translateX(calc(${direction} * -9rem))
      translateZ(calc(${obsOffset} * -50rem))
    `;

  const calculateOpacity = `
    ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}
  `;

  const calculateDisplay = `
    ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'}
  `;

  const handleClick = (index) => {
    onChange(index);
    if (activeIndex === index) {
      onClick(index);
    }
  }
  return (
    <>
      <Image
        src={url} 
        alt={alt} 
        className={styles.item} 
        style={{
          transform: calculateTransformProperties,
          opacity: calculateOpacity,
          display: calculateDisplay
        }}
        onClick={() => handleClick(index)}
        priority
        quality={100}
        width={280}
        height={380}
      />
      
    </>
  )
}

export default ItemCarousel