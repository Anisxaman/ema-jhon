import "./Cart.css"
import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let totalQuantity=0;
    for(const product of cart){

       if( !product.quantity){
           product.quantity=1;
       }
        console.log(product);
        // total=total+product.price;
        total=total+product.price*product.quantity;
        totalQuantity=totalQuantity+product.quantity;
    }
    return (
        <div>
             <h3>Order Summary:  </h3>
            {/* <h5 className="item">Items Order: {props.cart.length}  </h5> */}
            <h5 className="item">Items Order: {totalQuantity}  </h5>
            <br />
            <p>Total : {total.toFixed(2)}</p>
            
        </div>
    );
};

export default Cart;