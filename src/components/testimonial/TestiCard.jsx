import React, { useState } from "react";
import TestiProps from "./TestiProps";

const TestiCard = () => {
    const [data, setData] = useState(TestiProps);

    return(
        <>
            {
                data.map((currElem) => {
                    return(
                        <div className="col-md-6">
                            <div className="testimonial-card">
                                <div className="testimonial-card-img-holder">
                                    <img src={currElem.imgSrc} className="testimonial-card-img" alt="" />
                                </div>
                                <div className="testimonial-card-body">
                                    <p className="testimonial-card-subtitle">{currElem.content}</p>
                                    <h6 className="testimonial-card-title">{currElem.title}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TestiCard;