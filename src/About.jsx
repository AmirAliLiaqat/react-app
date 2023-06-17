import React from "react";
import Navbar from "./Navbar";

const About = (props) => {
    return(
        <>
            <Navbar/>
            <h1 className="text-center my-5">Hi, i am a {props.name} page...</h1>
        </>
    )
}

export default About;