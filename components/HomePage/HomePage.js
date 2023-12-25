'use client';
import Carousel from '../Carousel/Carousel';
import styles from '../../styles/HomePage.module.scss';
import { useState } from 'react';
import proj from '../../public/proj.png';
import proj2 from '../../public/proj2.png';
import proj3 from '../../public/proj3.png';
import proj4 from '../../public/proj4.png';
import proj5 from '../../public/proj5.png';
import SelectedGame from '../SelectedGame/SelectedGame';

const arr = [
  { 
    id: 1, 
    url: proj4, 
    alt: 'Project 1', 
    className: 'project-image'
  },
  { 
    id: 2,
    url: proj5, 
    alt: 'Project 2', 
    className: 'project-image' 
  },
  { 
    id: 3, 
    url: proj, 
    alt: 'Project 3', 
    className: 'project-image' 
  },
  { 
    id: 4, 
    url: proj2, 
    alt: 'Project 4', 
    className: 'project-image' 
  },
  { 
    id: 5, 
    url: proj3, 
    alt: 'Project 5', 
    className: 'project-image' 
  },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [showGame, setShowGame] = useState(false);

  const handleShowGame = () => {
    setShowGame(!showGame);
  };

  const handleBackButtonClick = () => {
    setActiveIndex(activeIndex);
    setShowGame(false);
  };

    return (
      <div className={styles.container_main}>
        {showGame ? (
          <SelectedGame
            id={activeIndex} 
            onClick={handleBackButtonClick} 
          />
        ) : (
        <div className={styles.block_flex}>
          <h2 className={styles.block_flex__title}>Our projects</h2>
          <Carousel 
            onClick={handleShowGame}
            items={arr}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        )
      }
    </div>
  );
};

export default HomePage;