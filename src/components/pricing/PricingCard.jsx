import React, { useState } from "react";
import PricingProps from "./PricingProps";

const PricingCard = () => {
    const [data, setData] = useState(PricingProps);

    return(
        <>
            {
                data.map((currElem) => {
                    return(
                        <div className="col-4 pricing-card my-2">
                            <div className="pricing-card-header">
                                <img className="pricing-card-icon" src={currElem.imgSrc} alt="" />
                            </div>
                            <div className="pricing-card-body">
                                <h6 className="pricing-card-title">{currElem.title}</h6>
                                <div className="pricing-card-list">
                                    <p>{currElem.content}</p>
                                    <p><i className="ti-close"></i></p>
                                    <p><i className="ti-close"></i></p>
                                </div>
                            </div>
                            <div className="pricing-card-footer">
                                <span>{currElem.currency}</span>
                                <span>{currElem.price}</span>
                            </div>
                            <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PricingCard;