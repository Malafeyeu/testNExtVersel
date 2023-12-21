import img1 from '../../public/Fire.png';
import img2 from '../../public/Hearth.png';
import img3 from '../../public/User.png';

const CareerModel = {
  getData: () => ({
    title: 'Career',
  }),
  getJobs: () => ([
    {
      img: img1,
      title: 'Junior Unity Developer',
      requirements1: 'Good understanding of game design and mechanics',
      requirements2: `Bachelor's degree in BSUIR or BSU`,
      requirements3: `Gay Orientation`,
      requirements4: `Passion for gaming and staying updated with industry trends`,
      requirements5: `Good communication and teamwork abilities`
    },
    {
      img: img2,
      title: 'Junior Unity Developer',
      requirements1: 'Good understanding of game design and mechanics',
      requirements2: `Bachelor's degree in BSUIR or BSU`,
      requirements3: `Gay Orientation`,
      requirements4: `Passion for gaming and staying updated with industry trends`,
      requirements5: `Good communication and teamwork abilities`
    },
    {
      img: img3,
      title: 'Junior Unity Developer',
      requirements1: 'Good understanding of game design and mechanics',
      requirements2: `Bachelor's degree in BSUIR or BSU`,
      requirements3: `Gay Orientation`,
      requirements4: `Passion for gaming and staying updated with industry trends`,
      requirements5: `Good communication and teamwork abilities`
    },
  ]),
}

export { CareerModel };
