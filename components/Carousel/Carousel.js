'use client';
import CarouselIndicator from './CarouselIndicator/CarouselIndicator';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import styles from '../../styles/HomePage.module.scss';

const Carousel = ({
  onClick,
  items,
  activeIndex,
  setActiveIndex
}) => {
  

  const handleNext = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className={styles.block_carousel}>
      <article className={styles.carousel}>
        {items?.map((item, index) => {
          const { url, alt, className, id, } = item;
          return (
            <ItemCarousel
              key={id}
              url={url.src}
              alt={alt}
              className={className}
              index={index}
              activeIndex={activeIndex}
              onChange={handleChange}
              onClick={onClick}
            />
          )
        })};
      </article>
      <nav className={styles.block_w_nav}>
        { activeIndex > 0 ? (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlePrev}
          >
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : <div className={styles.end} />};
        <CarouselIndicator 
          activeIndex={activeIndex}
          length={items?.length}
          onChange={handleChange}
        />
        { activeIndex < items?.length - 1 ? (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            fill='none'
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleNext}
          >
            <path 
              d="M5 12H19" 
              stroke="white"  
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : <div className={styles.end} />};
      </nav>
    </section>
  );
};

export default Carousel;