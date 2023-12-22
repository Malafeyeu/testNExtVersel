'use client'
import { CarouselModel, HomePageModel } from "../../components"
import HomePage from "./HomePage"
import {useState} from 'react'

const HomePagePresenter = () => {
  const dataHomePage = HomePageModel.getData();
  const dataCarousel = CarouselModel.getData();
  const id = HomePageModel.getId();

  const [showGame, setShowGame] = useState(false);

  const handleShowGame = () => {
    setShowGame(!showGame);
  };

  const handleBackButtonClick = () => {
    HomePageModel.setId(null)
    setShowGame(false)
  }  

  return (
    <HomePage 
      {...dataHomePage}
      data={dataCarousel}
      onClick={handleBackButtonClick}
      callback={handleShowGame}
      id={id}
      showGame={showGame}
    />
  )
}

export default HomePagePresenter