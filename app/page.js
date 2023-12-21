import {
  HeaderPresenter,
  HomePagePresenter,
  AboutUsPresenter,
  CareerPresenter,
  FooterPresenter,
} from '../components'
import dynamic from "next/dynamic"

// const HeaderPresenter = dynamic(() => import('@/components/Header/HeaderPresenter'))
// const HomePagePresenter = dynamic(() => import('@/components/HomePage/HomePagePresenter'))
// const AboutUsPresenter = dynamic(() => import('@/components/AboutUs/AboutUsPresenter'))
// const CareerPresenter = dynamic(() => import('@/components/Career/CareerPresenter'))
// const FooterPresenter = dynamic(() => import('@/components/Footer/FooterPresenter'))

export default function Home() {
  return (
    <>
      <HeaderPresenter />
      <main>
        <HomePagePresenter />
        <AboutUsPresenter />
        <CareerPresenter />
      </main>
      <FooterPresenter />
    </>
  )
}
