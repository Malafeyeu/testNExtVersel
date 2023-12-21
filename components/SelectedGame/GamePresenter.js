'use client'
import { GameModel } from "./GameModel"
import { GamePage } from "./Game";
import { useEffect, useState } from "react";


const GamePresenter = ({id, onClick}) => {
  const data = GameModel.getData(id);
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
  return (
    <GamePage 
      data={data} 
      onClick={onClick}
      frame={windowWidth}
    />
  )
}

export { GamePresenter }