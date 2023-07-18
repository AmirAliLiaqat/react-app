import React from "react";
import Navbar from "./Navbar";
import PortfolioCard from "./portfolio/PortfolioCard"
import { useLocation } from "react-router-dom";

const Portfolio = () => {
    const location = useLocation();
    return(
        <>
            { location.pathname === `/` ? <div></div> : <div className="bg-light mb-5 py-5"><Navbar/></div> }
            <section className="section" id="portfolio">
                <div className="container text-center">
                    <p className="section-subtitle">What I Did ?</p>
                    <h6 className="section-title mb-6">Portfolio</h6>
                    <div className="row">
                        <PortfolioCard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;