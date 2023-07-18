import React from "react";
import PricingCard from "./pricing/PricingCard"

const Pricing = () => {
    return(
        <>
            <section className="section" id="pricing">
                <div className="container text-center">
                    <p className="section-subtitle">How Much I Charge ?</p>
                    <h6 className="section-title mb-6">My Pricing</h6>
                    <div className="row pricing-wrapper">
                        <PricingCard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing;