import React, { Component } from "react";
import { Link } from "react-router-dom";
//import FolderSessions from '../FolderSessions/FolderSessions'
import { fakeFolders } from "../App/fakeFolders";

export class UserHome extends Component {
  render() {
    return (
      <main role="main">
        <h1>
          <Link to="/user/:id">SK9</Link>{" "}
        </h1>
        <header role="banner">
          <h1>Check out your Folders</h1>
        </header>
        {fakeFolders.map((folder) => {
          return (
            <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>{folder.title}</Link>
            </li>
          );
        })}
      </main>
    );
  }
}

export default UserHome;
