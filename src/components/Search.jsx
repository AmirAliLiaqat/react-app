import React, { useState } from "react";
import Navbar from "./Navbar";

const Search = () => {
    const [img, setImg] = useState();

    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    }
    // https://api.unsplash.com/search/photos?query=canada
    return(
        <>
            <div className="bg-light mb-5 py-5"><Navbar/></div>
            <section className="section" id="search">
                <div className="container text-center">
                    <h1>Search anything do you want...</h1>
                    <input type="text" className="form-control" onChange={inputEvent} value={img} placeholder="search anything" autoComplete="off" />
                    <div className="my-4">
                        <img src={`https://source.unsplash.com/600x400?${img}`} alt="searching images..." />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search;