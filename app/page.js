import dynamic from "next/dynamic"
import React from "react"

const HeaderPresenter = dynamic(() => import('@/components/Header/HeaderPresenter.js'), {ssr: false})
const HomePagePresenter = dynamic(() => import('@/components/HomePage/HomePagePresenter.js'), {ssr: false})
const AboutUsPresenter = dynamic(() => import('../components/AboutUs/AboutUsPresenter.js'), {ssr: false})
const CareerPresenter = dynamic(() => import('@/components/Career/CareerPresenter.js'), {ssr: false})
const FooterPresenter = dynamic(() => import('@/components/Footer/FooterPresenter.js'))

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
