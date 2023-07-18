import React, { useState } from "react";
import PortfolioPrpos from "./PortfolioProps";

const PortfolioCard = () => {
    const [data, setData] = useState(PortfolioPrpos);

    return(
        <>
            {
                data.map((currElem) => {
                    return(
                        <div className="col-md-4 my-2">
                            <a href="#" className="portfolio-card">
                                <img src={currElem.imgSrc} className="portfolio-card-img" alt="" />    
                                <span className="portfolio-card-overlay">
                                    <span className="portfolio-card-caption">
                                        <h4>{currElem.title}</h4>
                                        <p className="font-weight-normal">Category: {currElem.category}</p>
                                    </span>                         
                                </span>                     
                            </a>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PortfolioCard;