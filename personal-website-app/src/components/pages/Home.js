import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import About from '../About';
import Cards from '../Cards';
import Footer from '../Footer';
import Contact from '../Contact';

function Home () {
    return (
        <>
        <HeroSection />
        <About />
        <Cards />
        <Contact />
        <Footer />
        </>
    )
}

export default Home;