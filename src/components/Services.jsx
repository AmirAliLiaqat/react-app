import React from "react";
import Navbar from "./Navbar";
import ServicesCard from "./services/ServicesCard"
import { useLocation } from "react-router-dom";

const Services = () => {
    const location = useLocation();
    return(
        <>
            { location.pathname === `/` ? <div></div> : <div className="bg-light mb-5 py-5"><Navbar/></div> }
            <section className="section" id="service">
                <div className="container text-center">
                    <p className="section-subtitle">What I Do ?</p>
                    <h6 className="section-title mb-6">Service</h6>
                    <div className="row">
                        <ServicesCard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;