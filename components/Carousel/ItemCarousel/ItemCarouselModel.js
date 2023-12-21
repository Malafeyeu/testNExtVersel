

const ItemCarouselModel = {
  calculateTransformProperties: (activeIndex, index) => {
    const offset = (activeIndex - index) / 4;
    const direction = Math.sign(activeIndex - index);
    const obsOffset = Math.abs(offset);

    return `
      rotateY(calc(${offset} * 80deg))
      scaleY(calc(1 + ${obsOffset} * -.1))
      translateX(calc(${direction} * -9rem))
      translateZ(calc(${obsOffset} * -50rem))
    `;
  },

  calculateOpacity: (activeIndex, index) => (`
    ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}
  `),

  calculateDisplay: (activeIndex, index) => (`
    ${Math.abs(index - activeIndex) >= 3? 'none' : 'block'}
  `),
}

export { ItemCarouselModel }