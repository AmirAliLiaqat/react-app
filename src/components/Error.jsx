import React from "react";
import Navbar from "./Navbar";

const Error = () => {
        return(
                <>
                        <Navbar/>
                        <div className="error_page">
                                <h1>OOps! Page Not Found!</h1>
                        </div>
                </>       
        )
}

export default Error;