import React, { useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Contact = () => {
        const location = useLocation();
        const [data1, setData1] = useState();
        const [data2, setData2] = useState();
        const [data3, setData3] = useState();

        const contactData1 = (event) => {
                setData1(event.target.value);
        }
        const contactData2 = (event) => {
                setData2(event.target.value);
        }
        const contactData3 = (event) => {
                setData3(event.target.value);
        }
        const sendData = (e) => {
                e.preventDefault();
                alert("Your message send successfully...");
        }

        return(
                <>
                        { location.pathname === `/` ? <div></div> : <div className="bg-light mb-5 py-5"><Navbar/></div> }
                        <section className="section" id="contact">
                                <div className="container text-center">
                                        <p className="section-subtitle">How can you communicate?</p>
                                        <h6 className="section-title">Contact Me</h6>
                                        <h2>{data1}</h2>
                                        <h2>{data2}</h2>
                                        <h2>{data3}</h2>
                                        <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                                                <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                                <input type="text" size="50" onChange={contactData1} className="form-control" placeholder="Your Name" autoComplete="off" />  
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                                <input type="email" onChange={contactData2} className="form-control" placeholder="Enter Email" autoComplete="off" />  
                                                        </div>
                                                        <div className="form-group col-sm-12">
                                                                <textarea name="comment" id="comment" rows="6" onChange={contactData3}  className="form-control" placeholder="Write Something"></textarea>
                                                        </div>
                                                        <div className="form-group col-sm-12 mt-3">
                                                                <input type="submit" value="Send Message" onClick={sendData} className="btn btn-outline-primary rounded" autoComplete="off" />
                                                        </div>
                                                </div>  
                                        </form>
                                </div>
                        </section>
                </>       
        )
}

export default Contact;