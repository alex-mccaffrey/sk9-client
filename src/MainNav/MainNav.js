import React, { Component } from "react";
import { /*NavLink*/ Link } from "react-router-dom";
import ApiContext from '../ApiContext'
import "./MainNav.css";

export class MainNav extends Component {
    static contextType = ApiContext

  renderLoggedInLinks() {
    if (this.context.loggedIn) {
      return (
        <>
          <Link to="/user/:userId">Home</Link>
          <Link to="/add-session">Add a Session</Link>
          <Link to="/add-folder">Add a Folder</Link>
        </>
      );
    }
  }

  render() {
    // const isLoggedIn = true;
    // const loggedInNavBar = (
    //   <>
    //     <Link to="/user/:userId">Home</Link>
    //     <Link to="/add-session">Add a Session</Link>
    //     <Link to="/add-folder">Add a Folder</Link>
    //   </>
    // );

    return (
      <div className="main-nav-links">
        <Link to="/">Welcome</Link>
        {this.renderLoggedInLinks()}
        {/* {isLoggedIn && <Link to="/user/:userId">Home</Link>}
        <Link to="/add-session">Add a Session</Link>
        <Link to="/add-folder">Add a Folder</Link> */}
        {/* {isLoggedIn && loggedInNavBar} */}
      </div>
    );
  }
}

export default MainNav;
