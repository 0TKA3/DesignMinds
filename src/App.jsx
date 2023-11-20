import React from 'react'
import './assets/style.scss'
import Navbar from './assets/components/Navbar'
import Header from './assets/components/Header'
import HeaderCards from './assets/components/HeaderCards'
import About from './assets/components/About'
import FeaturedClients from './assets/components/FeaturedClients';
import Brands from './assets/components/Brands'
import Footer from './assets/components/Footer'


export default function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Header></Header>
        <HeaderCards></HeaderCards>
        <About></About>
        <FeaturedClients></FeaturedClients>
        <Brands></Brands>
        <Footer></Footer>
      </div>
    </>
  )
}
