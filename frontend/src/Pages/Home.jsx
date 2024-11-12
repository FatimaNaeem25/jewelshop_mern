import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AnnouncementBar from '../Components/AnnouncementBar'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import Collection from '../Components/Collection'
import NewArival from '../Components/NewArival'
import Trending from '../Components/Trending'
import Banner2 from '../Components/banner2'
import BestSeller from '../Components/BestSeller'
import About from '../Components/About'
import Newsletter from '../Components/Newsletter'

function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <Banner />
      <Card />
      <Collection />
      <Trending />
      <NewArival />
      <Banner2 />
      <BestSeller />
      <About />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home