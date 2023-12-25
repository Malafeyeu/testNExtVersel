import dynamic from 'next/dynamic'

const HeaderPresenter = dynamic(() => import('@/components/Header/HeaderPresenter.js'), {ssr: false});
const HomePage = dynamic(() => import('@/components/HomePage/HomePage.js'), {ssr: false});
const AboutUs = dynamic(() => import('@/components/AboutUs/AboutUs.js'), {ssr: false});
const Career = dynamic(() => import('@/components/Career/Career.js'), {ssr: false});
const Footer = dynamic(() => import('@/components/Footer/Footer.js'), {ssr: false});

const LazyLoadedComponent = dynamic(() => import('@/components/LazyLoadingComponent.js'), {ssr: false});

export default function Home() {
  return (
    <>
      <HeaderPresenter />
      <main>
        <HomePage />
        <AboutUs />
        <Career />
      </main>
      <Footer />
    </>
  );
};
