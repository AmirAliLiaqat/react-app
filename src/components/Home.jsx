import React from "react";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Banner from "./Banner"
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
        return(
                <>
                        <Header/>
                        <About/>
                        <Services/>
                        <Portfolio/>
                        <Pricing/>
                        <Banner/>
                        <Testimonial/>
                        <Blog/>
                        <Contact/>
                        <Footer/>
                </>       
        )
}

export default Home;