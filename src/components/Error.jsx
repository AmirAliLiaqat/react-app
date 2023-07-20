import React from "react";
import Navbar from "./Navbar";

const Error = () => {
        return(
                <>
                        <Navbar/>
                        <div className="error-page text-center" style={{height: "100vh", padding: "16rem"}}>
                                <h1 className="display-1">404</h1>
                                <h1>OOps! Page Not Found!</h1>
                        </div>
                </>       
        )
}

export default Error;