import React, { Component } from 'react'
import { /*NavLink*/ Link } from 'react-router-dom'
//import ApiContext from '../ApiContext'
import './MainNav.css'


export class MainNav extends Component {
    render() {
        return (
            <div className="main-nav-links">
                <Link to="/landing">Welcome</Link>
                <Link to="/">Home</Link>
                <Link to="/add-session">Add a Session</Link>
                <Link to="/session/:sessionId">Session Details</Link>
            </div>
        )
    }
}

export default MainNav
