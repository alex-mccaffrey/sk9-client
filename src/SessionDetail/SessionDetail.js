import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { format } from 'date-fns'
//import EditSession from '../EditSession/EditSession'
import { fakeSessions } from "../FolderSessions/fakeSessions";

class SessionDetail extends Component {
  render() {
    const id = this.props.match.params.sessionId;
    const specificSessionArray = fakeSessions.filter(
      (session) => session.id === parseInt(id)
    );
    // const specificSession = specificSessionArray.length > 0 ? specificSessionArray[0] : {}
    if (specificSessionArray.length > 0) {
      return (
        <main role="main">
          <h1>
            <Link to="/user/:id">SK9</Link>{" "}
          </h1>
          {console.log(
            "this is the specific session in the render:",
            specificSessionArray[0]
          )}
          <h2 className="Session__title">Title: {specificSessionArray[0].title}</h2>
          <p>{specificSessionArray[0].details}</p>
          <p>Drill Type: {specificSessionArray[0].drill_type}</p>
          <div className="Session__dates">
            <div className="Session__dates-modified">
              Modified <span className="Date">{specificSessionArray[0].modified}</span>
            </div>
          </div>
          <button
            className="Session__delete"
            type="button"
            onClick={() => console.log("session delete clicked")}
          >
            Delete
          </button>
          <button
            className="Session__edit"
            type="button"
            onClick={() => console.log("session edit clicked")}
          >
            Edit
          </button>
          <button
            path="/add-session"
            className="Session__add"
            type="button"
            onClick={() => console.log("session add clicked")}
          >
            Add Session
          </button>
        </main>
      );
    }
    return (
      <div>
        <h1>Session not Found</h1>
      </div>
    )
  }
}

export default SessionDetail;
