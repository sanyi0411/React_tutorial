import React from "react"

function ContactCard( props ) {
    return (
        <div className="contact-card">
            <img src={props.imgUrl} />
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>

        // If you choose the method commented out in App.js, then here it should look like this:
        /*
        <div className="contact-card">
            <img src={props.contact.imgUrl} />
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
        */
    )
}

export default ContactCard