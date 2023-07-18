import React from "react";

const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <>
            <div className="container">
                <footer className="footer">   
                    <p className="mb-0">Copyright {date} &copy; <a href="http://www.devcrud.com">DevCRUD</a></p>
                    <div className="social-links text-right m-auto ml-sm-auto">
                        <a href="" className="mx-1"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="" className="mx-1"><i className="fa-brands fa-twitter"></i></a>
                        <a href="" className="mx-1"><i className="fa-brands fa-google"></i></a>
                        <a href="" className="mx-1"><i className="fa-brands fa-pinterest-p"></i></a>
                        <a href="" className="mx-1"><i className="fa-brands fa-instagram"></i></a>
                        <a href="" className="mx-1"><i className="fa-solid fa-rss"></i></a>
                    </div>
                </footer>
            </div>
        </>       
    )
}

export default Footer;