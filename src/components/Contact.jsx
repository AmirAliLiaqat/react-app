import React, { useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Contact = () => {
        const location = useLocation();
        const [data, setData] = useState({
                fullname: "",
                phone: "",
                email: "",
                message: "",
        });

        const InputEvent = (event) => {
                const {name, value} = event.target;

                setData((preVal) => {
                        return{
                                ...preVal,
                                [name]: value,
                        }
                })
        } 

        const formSubmit = (e) => {
                e.preventDefault();
                alert(`My name is ${data.fullname}. My phone number is ${data.phone}. My email is ${data.email}. Here i want to say ${data.message}`);
        }

        return(
                <>
                        { location.pathname === `/` ? <div></div> : <div className="bg-light mb-5 py-5"><Navbar/></div> }
                        <section className="section" id="contact">
                                <div className="container text-center">
                                        <p className="section-subtitle">How can you communicate?</p>
                                        <h6 className="section-title">Contact Me</h6>
                                        <form className="contact-form col-md-10 col-lg-8 m-auto" onSubmit={formSubmit}>
                                                <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                                <input type="text" size="50" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Your FullName" autoComplete="off" />  
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                                <input type="number" size="50" className="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Your Phone" autoComplete="off" />  
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                                <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Email" autoComplete="off" />  
                                                        </div>
                                                        <div className="form-group col-sm-12">
                                                                <textarea id="comment" rows="6" className="form-control" name="message" value={data.message} onChange={InputEvent} placeholder="Write Something"></textarea>
                                                        </div>
                                                        <div className="form-group col-sm-12 mt-3">
                                                                <button type="submit" className="btn btn-outline-primary rounded" onClick={sendData}>Send Message</button>
                                                        </div>
                                                </div>  
                                        </form>
                                </div>
                        </section>
                </>       
        )
}

export default Contact;