import React, { Component } from "react";
import { Link } from "react-router-dom";
//import SessionDetail from "../SessionDetail/SessionDetail";
import { fakeSessions } from "./fakeSessions";
import "./FolderSessions.css";
import ApiContext from "../ApiContext"
import config from "../config"

export class FolderSessions extends Component {
    static contextType = ApiContext;


  render() {
    return (
      <div>
          <h2>Check out your Sessions from {this.context.selectedFolder}</h2>
        <ul className="session-list">
          {this.context.sessions.map((session) => (
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
