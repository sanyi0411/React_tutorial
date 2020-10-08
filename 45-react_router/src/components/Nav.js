import React, { Component } from 'react'
import '../App.css';
import {Link, withRouter} from "react-router-dom"

export default class Nav extends Component {

    navStyle = {
        color: "white"
    }

    render() {
        return (
            <nav>
                <Link to="/" style={this.navStyle} >
                    <h3>Logo</h3>
                </Link>
                <ul className="nav-links">
                    <Link to="/about" style={this.navStyle} >
                        <li>About</li>
                    </Link>
                    <Link to="/shop" style={this.navStyle}>
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}
