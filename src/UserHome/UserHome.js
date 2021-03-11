import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
//import FolderSessions from '../FolderSessions/FolderSessions'
import { fakeFolders } from "../App/fakeFolders";

export class UserHome extends Component {
  static contextType = ApiContext;

  render() {
    console.log("this is context folders in userhome:", this.context.folders)
    return (
      <main role="main">
        <header role="banner">
          <h2>Check out your Folders</h2>
        </header>

        {this.context.folders.map((folder) => {
          return (
            <li key={folder.id}>
              <Link to={{
                pathname: `/folder/${folder.id}`, 
                query:{title: `${folder.title}`}
              }}>{folder.title}</Link>
            </li>
          );
        })}

        {/* {fakeFolders.map((folder) => {
          return (
            <li key={folder.id}>
              <Link to={{
                pathname: `/folder/${folder.id}`, 
                query:{title: `${folder.title}`}
              }}>{folder.title}</Link>
            </li>
          );
        })} */}
      </main>
    );
  }
}

export default UserHome;
