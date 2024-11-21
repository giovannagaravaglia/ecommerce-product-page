import { useState } from "react";

import ButtonQtd from "./buttonQtd";
import Description from "./description";

function InfoProduct({product, setProduct, addProduct}){

    return(

    <div className="infoProduct-wrapper">
        <Description product={product}></Description>
        <ButtonQtd product={product} setProduct={setProduct} addProduct={addProduct}></ButtonQtd>
    </div>
    )
    
}

export default InfoProduct