import React, { useState } from "react";
import ServicesProps from "./ServicesProps";

const ServicesCard = () => {
    const [data, setData] = useState(ServicesProps);

    return(
        <>
            {
                data.map((currElem) => {
                    return(
                        <div className="col-md-6 col-lg-3 my-2">
                            <div className="service-card">
                                <div className="body">
                                    <img src={currElem.imageSrc} alt="" className="icon" />
                                    <h6 className="title">{currElem.name}</h6>
                                    <p className="subtitle">{currElem.content}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }        
        </>
    )
}

export default ServicesCard;