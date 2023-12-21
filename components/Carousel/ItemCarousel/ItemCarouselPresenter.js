import { ItemCarouselModel, ItemCarousel } from '../../../components';

const ItemCarouselPresenter = ({
  url, 
  alt, 
  className,
  index,
  activeIndex, 
  onChange,
  callback
}) => {
  const transform = ItemCarouselModel.calculateTransformProperties(activeIndex, index);
  const opacity = ItemCarouselModel.calculateOpacity(activeIndex, index);
  const display = ItemCarouselModel.calculateDisplay(activeIndex, index);

  return (
    <ItemCarousel 
      src={url}
      alt={alt}
      className={className}
      transform={transform}
      opacity={opacity}
      display={display}
      onChange={() => onChange(index)}
      activeIndex={activeIndex}
      index={index}
      callback={callback}
    />
  );
};

export { ItemCarouselPresenter }