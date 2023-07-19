import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const About = () => {
        const location = useLocation();
        return(
                <>
                        { location.pathname === `/` ? <div></div> : <div className="bg-light mb-5 py-5"><Navbar/></div> }
                        <section className="section" id="about">
                                <div className="container text-center">
                                        <div className="about">
                                                <div className="about-img-holder">
                                                        <img src="imgs/man.png" className="about-img animated" alt="" />
                                                </div>
                                                <div className="about-caption">
                                                        <p className="section-subtitle">Who Am I ?</p>
                                                        <h2 className="section-title mb-3">About Me</h2>
                                                        <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste 
                                                                <br/>culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!              
                                                        </p>
                                                        <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                                                </div>              
                                        </div>
                                </div>
                        </section>
                </>       
        )
}

export default About;