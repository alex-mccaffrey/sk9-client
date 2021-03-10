import React, { Component } from "react";
import { Link } from "react-router-dom";
//import FolderSessions from '../FolderSessions/FolderSessions'
import { fakeFolders } from "../App/fakeFolders";

export class UserHome extends Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h2>Check out your Folders</h2>
        </header>
        {fakeFolders.map((folder) => {
          return (
            <li key={folder.id}>
              <Link to={{
                pathname: `/folder/${folder.id}`, 
                query:{title: `${folder.title}`}
              }}>{folder.title}</Link>
              {/* <Link to={`/folder/${folder.id}`}>{folder.title}</Link> */}
            </li>
          );
        })}
      </main>
    );
  }
}

export default UserHome;
