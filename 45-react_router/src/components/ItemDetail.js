import React, {useEffect, useState} from 'react'
import "../App.css"
import {Link} from "react-router-dom"

export default function Item({ match }) {       // Match comes from the <Link />
    useEffect(() => {
        fetchItem()
    }, [])      // empty sqaure brackets mean it will only run when the component mounts

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const singleItem = await fetchItem.json()
        setItem(singleItem)
        console.log(singleItem)
    }
    
    return (
        <div>
            <h1>Item</h1>
        </div>
    )
}
