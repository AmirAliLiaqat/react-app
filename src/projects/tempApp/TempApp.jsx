import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Lahore");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6a4a873e9d21cf4f51eb1f87d0a33152`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    }, [search]);

    const InputEvent = (event) => {
        const data = event.target.value;
        setSearch(data);
    }

    return(
        <>
            <div className="bg-light mb-3 p-3">
                <h1><NavLink to='/' className="logo">Meyawo</NavLink></h1>
            </div>
            <section className="section" id="search">
                <div className="container text-center">
                    <h1>Weather App</h1>
                    <div className="box bg-light border border-dark rounded p-5 my-4 w-50 mx-auto">
                        <div className="ïnputField">
                            <input type="search" className="form-control" onChange={InputEvent} value={search} />
                        </div>
                        <div className="info mt-5 mb-3">
                            {
                                !city ? (
                                    <h1 className='fw-bolder display-5'>No Data Found</h1>
                                ) : (
                                    <div>
                                        <h1 className="location text-capitalize display-4 my-4">
                                            <i className="fa-solid fa-street-view animated"></i> {search}
                                        </h1>
                                        <h2 className="temp my-4">{city.temp} ° Calc</h2>
                                        <h4 className="temp_min_max my-4">Min : {city.temp_min} ° Calc | Max : {city.temp_max} ° Calc</h4>
                                        <h3 className="temp_pres_humidity my-4">Pressure : {city.pressure} | Humidity : {city.humidity}</h3>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TempApp;