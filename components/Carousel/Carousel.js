import { 
  CarouselIndicator,
  ItemCarouselPresenter
} from '../../components';
import styles from '../../styles/HomePage.module.scss'


const Carousel = ({
  images,
  activeIndex,
  onPrev,
  onNext,
  onChange,
  callback
}) => {
  return (
    <section className={styles.block_carousel}>
      <article className={styles.carousel}>
        {images?.map((image, i) => {
          const { url, alt, className, id, } = image;
          return (
            <ItemCarouselPresenter
              key={id}
              url={url.src}
              alt={alt}
              className={className}
              index={i}
              activeIndex={activeIndex}
              onChange={onChange}
              callback={callback}
            />
          )
        })}
      </article>
      <nav className={styles.block_w_nav}>
        { activeIndex > 0 ? (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={onPrev}
          >
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : <div className={styles.end} />}
        <CarouselIndicator 
          activeIndex={activeIndex}
          length={images?.length}
          onChange={onChange}
        />
        { activeIndex < images?.length - 1 ? (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            fill='none'
            xmlns="http://www.w3.org/2000/svg"
            onClick={onNext}
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
        ) : <div className={styles.end} />}
      </nav>
    </section>
  )
}

export { Carousel }