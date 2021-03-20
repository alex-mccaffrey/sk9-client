import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FolderSessions.css";
import ApiContext from "../ApiContext";
import config from "../config";
import { getSessionsForFolder } from "../sessions-helpers";

export class FolderSessions extends Component {
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    const folderId = this.context.selectedFolder.id;

    fetch(`${config.API_ENDPOINT}/folders/${folderId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        //'Authorization': `Bearer ${API_KEY}`
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        this.context.deleteFolder(folderId);
        this.props.history.push("/user/:userId");
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const folderId = this.context.selectedFolder.id;
    const sessions = this.context.sessions;
    const sessionsForFolder = getSessionsForFolder(sessions, folderId);
    if (sessionsForFolder.length === 0 ) {
      return (
        <h2>This Folder is Empty</h2>
      )
    }
    return (
      <div>
        <h2>
          Check out your Sessions from {this.context.selectedFolder.title}
        </h2>
        <ul>
          {sessionsForFolder.map((session) => (
            <li key={session.id}>
              <Link to={`/session/${session.id}`}>{session.title}</Link>
            </li>
          ))}
        </ul>
        <button
          className="Folder__delete"
          type="button"
          onClick={() => this.handleClickDelete(this.context.selectedFolder)}
        >
          Delete Folder
        </button>
      </div>
    );
  }
}

export default FolderSessions;
