'use client'
import { useState } from "react"
import { Carousel } from "../../components";

const CarouselPresenter = ({callback, data}) => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  const handleChange = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <Carousel
      images={data}
      activeIndex={activeIndex}
      onPrev={handlePrev}
      onNext={handleNext}
      onChange={handleChange}
      callback={callback}
    />
  );
}

export { CarouselPresenter }