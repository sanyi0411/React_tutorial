import React from "react"

function FormComponent( props ) {
    return (
      <main>
        <form onSubmit={props.handleSubmit}>
          <label>First name: </label>
          <input 
            type="text"
            value={props.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={props.handleChange}
          />
          <br />
          <label>Last name: </label>
          <input 
            type="text"
            value={props.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={props.handleChange}
          />
          <br />
          <label>Age: </label>
          <input 
            type="text"
            value={props.age > 0 ? props.age : ""}
            name="age"
            placeholder="Age"
            onChange={props.handleChange}
          />
          <br />

          <label>Gender:
            <input 
              type="radio" 
              name="gender" 
              value="male"
              checked={props.gender === "male"}
              onChange={props.handleChange}
            />Male
          </label>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="female"
              checked={props.gender === "female"}
              onChange={props.handleChange}
            />Female
          </label>
          <br />

          <label>Destination:
            <select 
              name="destination"
              value={props.destination}
              onChange={props.handleChange}
              >
              <option value="">Please choose a destination</option>
              <option value="Budapest">Budapest</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
            </select>
          </label>
          <br />
          <label>
            <input 
              type="checkbox"
              name="isVegan"
              onChange={props.handleChange}
              checked={props.isVegan}
            />Vegan?
          </label>
          <label>
            <input 
              type="checkbox"
              name="isKosher"
              onChange={props.handleChange}
              checked={props.isKosher}
            />Kosher?
          </label>
          <label>
            <input 
              type="checkbox"
              name="isLactoseFree"
              onChange={props.handleChange}
              checked={props.isLactoseFree}
            />Lactose Free?
          </label>
          <br/>
          <button>Submit</button>
          <hr/>

          <h2>Entered information: </h2>
          <p>Your name: {props.firstName} {props.lastName}</p>
          <p>Your age: {props.age > 0 ? props.age : ""}</p>
          <p>Your gender: {props.gender}</p>
          <p>Your destination: {props.destination}</p>
          <p>Your dietary restrictions: <br/>
            Vegan: {props.isVegan ? "Yes" : "No"} <br/>
            Kosher: {props.isKosher ? "Yes" : "No"} <br/>
            Lactose free: {props.isLactoseFree ? "Yes" : "No"} <br/>
          </p>
        </form>
      </main>
    )
}

export default FormComponent