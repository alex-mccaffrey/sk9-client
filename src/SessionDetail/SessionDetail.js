import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
//import { format } from 'date-fns'
//import EditSession from '../EditSession/EditSession'
import { fakeSessions } from "../FolderSessions/fakeSessions";

class SessionDetail extends Component {

handleAddClick = () => {
  this.props.history.push('/add-session')
}

handleEditClick = () => {
  this.props.history.push('/edit-session')
}


  render() {
    const id = this.props.match.params.sessionId;
    const specificSessionArray = fakeSessions.filter(
      (session) => session.id === parseInt(id)
    );
    const specificSession = specificSessionArray.length > 0 ? specificSessionArray[0] : {}

    if (specificSessionArray.length > 0) {
      return (
        <main role="main">
          <h2 className="Session__title">Title: {specificSession.title}</h2>
          <p>{specificSession.details}</p>
          <p>Drill Type: {specificSession.drill_type}</p>
          <div className="Session__dates">
            <div className="Session__dates-modified">
              Modified <span className="Date">{specificSession.modified}</span>
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
            onClick={() => this.handleEditClick()}
          >
            Edit
          </button>
          <button
            className="Session__add"
            type="button"
            onClick={() => this.handleAddClick()}
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

export default withRouter(SessionDetail);
