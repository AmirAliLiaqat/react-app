import React from "react";
import Navbar from "./Navbar";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
    const [fname, lname] = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return(
        <>
            <Navbar/>
            <div className="text-center">
                <h1 className="my-5">Hi, {fname} {lname}</h1>
                <p>My current location is {location.pathname}</p>
                {
                    location.pathname == `/user/amir/ali` ?
                    <button className="btn btn-praimary" onClick={() => {
                        navigate(-1)
                    }}>Go Back</button>
                    : null
                }
            </div>
        </>
    )
}

export default User;