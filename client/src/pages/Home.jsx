import React from 'react'
import Hero from "../components/Hero/Hero"
import NewlyAdded from '../components/NewlyAdded/NewlyAdded'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <NewlyAdded/>
      <Footer/>
    </div>
  )
}

export default Home