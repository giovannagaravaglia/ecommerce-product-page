import { useState } from "react"


function Description ({product}){

    

    return(
        <div className="description-wrapper">
            <div className="description-titles">
                <span className="description-nameCompany">Sneaker Company</span>
                <span className="description-nameProduct">{product.name}</span>
            </div>

            <div className="description-info">
                <span className="description-info__text">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </span>
            </div>

            <div className="description-price">

                <div className="description-priceCurrently">
                    <span className="description-price__number">${product.price.toFixed(2)}</span>
                    <span className="description-price__discont">50%</span>
                </div>

                <span className="description-originalPrice">
                    $250.00
                </span>
                
            </div>
        </div>
    )
}

export default Description