import styles from '../../../styles/HomePage.module.scss'

const CarouselIndicator = ({
  activeIndex, 
  length, 
  maxIndicatorVisible = 5, 
  onChange
}) => {
  const maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;
  return (
    <>
      {Array.from(Array(maxIndicator), (_, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className={(
              isActive & activeIndex === 0) || 
              (isActive & activeIndex < length + 1) ?
                styles.active :
                styles.carousel_indicator_dots
            }
            onClick={(isActive === index) ? '' : () => onChange(index)}
          />
        )
      })}
    </>
  )
}

export { CarouselIndicator }