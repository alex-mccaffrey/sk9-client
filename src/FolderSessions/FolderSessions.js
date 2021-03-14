import React, { Component } from "react";
import { Link } from "react-router-dom";
//import SessionDetail from "../SessionDetail/SessionDetail";
import { fakeSessions } from "./fakeSessions";
import "./FolderSessions.css";
import ApiContext from "../ApiContext";
//import config from "../config"
import { getSessionsForFolder } from "../sessions-helpers";

export class FolderSessions extends Component {
  static contextType = ApiContext;

  render() {
    const folderId = this.context.selectedFolder.id;
    const sessions = this.context.sessions;
    const sessionsForFolder = getSessionsForFolder(sessions, folderId);
    console.log("these are the sessions for the folder:", sessionsForFolder)
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
      </div>
    );
  }
}

export default FolderSessions;
