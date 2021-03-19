import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import "./UserHome.css"


export class UserHome extends Component {
  static contextType = ApiContext;

  updateSelectedFolder = (folder) => {
    this.context.setFolder(folder)
  }

  render() {
    return (
      <main role="main">
        <header role="banner">
          <h2>Check out your Folders</h2>
        </header>
        <ul>
        {this.context.folders.map((folder) => {
          return (
            <li key={folder.id}>
              <Link to={{
                pathname: `/folder/${folder.id}`,
                query:{title: `${folder.title}`}
              }}
              onClick={() => {this.updateSelectedFolder(folder)}}
              >
                {folder.title}</Link>
            </li>
          );
        })}
        </ul>
      </main>
    );
  }
}

export default UserHome;
