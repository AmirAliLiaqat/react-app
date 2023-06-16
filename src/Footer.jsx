import React from "react";

const Footer = () => {
    const currDate = new Date().getFullYear();
    return(
        <>
            <div className="container-fluid bg-light text-dark fixed-bottom text-center p-3">
                <p className="mb-0">Copyright © {currDate}</p>
            </div>
        </>
    );
}

export default Footer;