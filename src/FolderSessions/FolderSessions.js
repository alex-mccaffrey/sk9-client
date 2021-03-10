import React, { Component } from "react";
import { Link } from "react-router-dom";
import SessionDetail from "../SessionDetail/SessionDetail";
import { fakeSessions } from "./fakeSessions";

export class FolderSessions extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/user/:id">SK9</Link>{" "}
        </h1>
        <ul>
          {fakeSessions.map((session) => (
            <li key={session.id}>
              <Link to={`/session/${session.id}`}>{session.title}</Link>

              {/* <Link
                to={`/session/${session.id}`}
                render={(rprops) => <SessionDetail {...rprops} />}
              >
                {session.title}
              </Link> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderSessions;
