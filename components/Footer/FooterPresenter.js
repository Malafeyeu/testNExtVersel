'use client'
import { useState, useEffect } from "react";
import { FooterModel, Footer } from "../../components";


const FooterPresenter = () => {
  const data = FooterModel.getFooterData();
  const iconStar = FooterModel.getIconStarSrc();
  const iconForLink = FooterModel.getIconsForLinks();
  const link = FooterModel.getLinks();

  const [state, setState] = useState('')

  const handleInput = (event) => {
    setState(event.target.value)
  }

  const handleSubmit = () => {
    const id = new Date().getMilliseconds()
    FooterModel.getSubscribe(id, state)
    setState('')
    document.querySelector('input').value = '';
  }

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
    <Footer 
      frame={windowWidth}
      data={data}
      icon={iconStar}
      iconLinks={iconForLink}
      link={link}
      input={state}
      onChange={handleInput}
      onClick={handleSubmit}
    />
  )
}

export { FooterPresenter }