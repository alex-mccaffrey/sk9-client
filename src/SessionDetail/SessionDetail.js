import React, { Component } from "react";
//import { NavLink, Link } from "react-router-dom";
//import { format } from 'date-fns'
//import EditSession from '../EditSession/EditSession'
import { fakeSessions } from "../FolderSessions/fakeSessions";

class SessionDetail extends Component {


  render() {
    const id = this.props.match.params.sessionId;
    const specificSession = fakeSessions.filter((session) => {
      if (session.id === parseInt(id)) {
        return session
      }
    });
    return (
      <main role="main">
        {console.log("this is the specific session in the render:", specificSession)}
        <h2 className="Session__title">Title: {specificSession[0].title}</h2>
        <p>{specificSession[0].details}</p>
        <p>Drill Type: {specificSession[0].drill_type}</p>
        <div className="Session__dates">
          <div className="Session__dates-modified">
            Modified <span className="Date">{specificSession[0].modified}</span>
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
}

export default SessionDetail;
