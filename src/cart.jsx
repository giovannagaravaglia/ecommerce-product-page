import { useState } from "react"

function Cart ({product, setProduct, thumbImages}){

    const deleteProduct = () =>{
        setProduct({...product, quantity: 0});
        console.log('delete')
    }

    return(
        <div className="cart-wrapper">
            <span className="cart-title">Cart</span>

            <div className="cart-bottom">

                {
                    product.quantity === 0 ?

                    <div className="cart-empty">
                        <span>Your cart is empty.</span>
                    </div>

                    : 

                    <div className="cart-full">
                        <div className="cart-full__product">

                            <div className="cart-full__imgAndInfo">
                                <img src={thumbImages[0]} alt="" className="cart-full__img" />

                                <div className="cart-full__info">
                                    <span className="cart-full__name">{product.name}</span>
                                    <span className="cart-full__price">${product.price.toFixed(2)} x {product.quantity}</span>

                                    <span className="cart-full__amount">${(product.price * product.quantity).toFixed(2)}</span>
                                    
                                </div>

                            </div>

                            <img src="./images/icon-delete.svg" alt="" className="cart-full__icon" onClick={deleteProduct}/>

                        </div>

                        <a href="#" className="cart-full__btn">Checkout</a>
                    </div>
                }
                

                
            </div>

            
        </div>
    )

}

export default Cart