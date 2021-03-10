import React, { Component } from "react";
import { Link } from "react-router-dom";
//import SessionDetail from "../SessionDetail/SessionDetail";
import { fakeSessions } from "./fakeSessions";
import "./FolderSessions.css";

export class FolderSessions extends Component {
  render() {
    return (
      <div>
        <h2>Check out your Sessions from {this.props.location.query.title}</h2>
        <ul className="session-list">
          {fakeSessions.map((session) => (
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
