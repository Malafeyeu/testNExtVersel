'use client'
import { AboutUs, AboutUsModel } from '../../components';
import React, { useState, useEffect } from 'react';


const AboutUsPresenter = () => {
  const data = AboutUsModel.getData();
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Вызывается при монтировании компонента
    updateWindowWidth();

    // Добавляет слушатель изменения размера окна
    window.addEventListener('resize', updateWindowWidth);

    // Убирает слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, [])

  return <AboutUs {...data} windowWidth={windowWidth} />
};

export { AboutUsPresenter }
