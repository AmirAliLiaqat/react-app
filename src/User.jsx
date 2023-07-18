import React from "react";
import Navbar from "./components/Navbar";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(navigate);
    
    return(
        <>
            <Navbar/>
            <div className="text-center mt-5 py-5">
                <h1 className="my-5">Hi, {fname} {lname}</h1>
                <p>My current location is {location.pathname}</p>
                {
                    location.pathname === `/user/amir/ali` ?
                    <button className="btn btn-primary" onClick={() => {
                        navigate("/")
                    }}>Go Back</button>
                    : null
                }
            </div>
        </>       
    )
}

export default User;