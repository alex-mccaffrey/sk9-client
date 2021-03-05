import React, { Component } from 'react'
import { /*NavLink*/ Link } from 'react-router-dom'
//import ApiContext from '../ApiContext'
import './MainNav.css'


export class MainNav extends Component {
    render() {
        return (
            <div className="main-nav-links">
                <Link to="/">Welcome</Link>
                <Link to="/user/:userId">Home</Link>
                <Link to="/add-session">Add a Session</Link>
                <Link to="/add-folder">Add a Folder</Link>
            </div>
        )
    }
}

export default MainNav
