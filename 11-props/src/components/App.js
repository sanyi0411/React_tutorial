import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                name="Mr.Whiskerson"
                imgUrl="https://placekitten.com/300/200"
                phone="1234"
                email="a@b.com"
            />
            <ContactCard 
                name="Fluffy"
                imgUrl="https://placekitten.com/400/200"
                phone="2345"
                email="c@d.com"
            />
            <ContactCard 
                name="Destroyer"
                imgUrl="https://placekitten.com/400/300"
                phone="3456"
                email="e@f.com"
            />
            <ContactCard 
                name="Felix"
                imgUrl="https://placekitten.com/200/100"
                phone="4567"
                email="g@h.com"
            />
            {//You can make it like this:
            /*
            <ContactCard 
                contact={{name: "Boo", imgUrl: "http://...", phone: "1234"}}
            />
            */
            }
        </div>
    )
}

export default App