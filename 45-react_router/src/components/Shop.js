import React, {useEffect, useState} from 'react'
import "../App.css"
import {Link} from "react-router-dom"

export default function Shop() {
    
    useEffect(() => {
        fetchItems()
    }, [])      // empty sqaure brackets mean it will only run when the component mounts
    
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")


        const items = await data.json()
        console.log(items.data)
        setItems(items.data)
    }
    
    return (
        <div>
            <h1>Shop</h1>
            {items.map(item => {
                return (
                    <h1 key={item.itemId}>
                        <Link to={`/shop/${item.itemId}`}>
                            {item.item.name}
                        </Link>
                    </h1>
                )
            })}
        </div>
    )
}
