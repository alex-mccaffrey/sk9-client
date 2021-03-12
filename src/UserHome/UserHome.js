import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
//import FolderSessions from '../FolderSessions/FolderSessions'


export class UserHome extends Component {
  static contextType = ApiContext;

  updateSelectedFolder = (folderTitle) => {
    this.context.setFolder(folderTitle)
  }

  render() {
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
              }}
              onClick={() => {this.updateSelectedFolder(folder.title)}}
              >
                {folder.title}</Link>
            </li>
          );
        })}
      </main>
    );
  }
}

export default UserHome;
