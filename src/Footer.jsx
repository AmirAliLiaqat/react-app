import React from "react";

const Footer = () => {
    const currDate = new Date().getFullYear();
    return(
        <>
            <div className="container-fluid bg-white text-white text-center p-3">
                <p>Copyright © {currDate}</p>
            </div>
        </>
    );
}

export default Footer;