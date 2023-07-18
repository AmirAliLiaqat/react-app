import React from "react";
import Navbar from "./Navbar";
import TestiCard from "./testimonial/TestiCard"
import { useLocation } from "react-router-dom";

const Testimonial = () => {
    const location = useLocation();
    return(
        <>
            { location.pathname === `/` ? <div></div> : <div className="bg-light mb-5 py-5"><Navbar/></div> }
            <section className="section" id="testmonial">
                <div className="container text-center">
                    <p className="section-subtitle">What Think Client About Me ?</p>
                    <h6 className="section-title mb-6">Testmonial</h6>
                    <div className="row">
                        <TestiCard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial;