import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
//import FolderSessions from '../FolderSessions/FolderSessions'
import { fakeFolders } from "../App/fakeFolders";
import config from "../config"

export class UserHome extends Component {
  static contextType = ApiContext;

  state = {
    sessions: [],
    //folders: [],
    //loggedIn: true,
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/sessions`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        //'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return (res.json())
      })
      .then((sessions) => {
        this.setState({ sessions })
      })
      .catch(error => this.setState({ error }))
  }

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
