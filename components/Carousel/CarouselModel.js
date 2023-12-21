import proj from '../../public/proj.png';
import proj2 from '../../public/proj2.png';
import proj3 from '../../public/proj3.png';
import proj4 from '../../public/proj4.png';
import proj5 from '../../public/proj5.png';

const CarouselModel = {
  getData: () => ([
    { id: 1, url: proj4, alt: 'Project 4', className: 'project-image' },
    { id: 2, url: proj5, alt: 'Project 5', className: 'project-image' },
    { id: 3, url: proj, alt: 'Project 1', className: 'project-image' },
    { id: 4, url: proj2, alt: 'Project 2', className: 'project-image' },
    { id: 5, url: proj3, alt: 'Project 3', className: 'project-image' },
  ])
};

export { CarouselModel }