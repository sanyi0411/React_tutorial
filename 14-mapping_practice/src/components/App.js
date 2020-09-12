import React from "react"
import Product from "./Product"
import products from "../products"

function App() {
    let gray = true;
    const productComponents = products.map((item) => {
        gray = !gray;
        return (
            <Product key={item.id} product={item} background={gray}/>
        )
    })

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App