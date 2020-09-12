import React from "react"

function Product( props ) {
    return (
        <div style={{backgroundColor: props.background ? "lightgray" : "white"}}>
            <h3>{props.product.name}</h3>
            <p>Price: ${props.product.price}</p>
            <p>Description: {props.product.description}</p>
            <hr/>
        </div>
    )
}

export default Product