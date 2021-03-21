import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import "./MainNav.css";

export class MainNav extends Component {
  static contextType = ApiContext;

  renderLoggedInLinks() {
    if (this.context.loggedIn) {
      return (
        <>
          <Link className="text-link" to="/user/:userId">
            Home
          </Link>
          <Link className="text-link" to="/add-session">
            Add a Session
          </Link>
          <Link className="text-link" to="/add-folder">
            Add a Folder
          </Link>
          <div className="logout">
            <button
              className="logout-button"
              onClick={() => this.context.logout()}
            >
              <Link to="/landing" className="logout-text">
                Logout
              </Link>
            </button>
          </div>
        </>
      );
    }
  }

  render() {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" label=""/>
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link className="text-link" to="/">
              Welcome
            </Link>
            {this.renderLoggedInLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNav;
