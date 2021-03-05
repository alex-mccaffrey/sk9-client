import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
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
        {/* <header role="banner">
        <h1>Session Details</h1>
      </header> */}
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
          onClick={console.log("session delete clicked")}
        >
          Delete
        </button>

        {/* <section>
        <header>
            <h2>Session 1 Details</h2>
            <p>Short description of Session 1</p>
        </header>
        <blockquote>This is a summary of Session 1.</blockquote>
        <blockquote>This is a full description of Session 1. What went well? What went bad? Where were you? Who were you with? What dogs were there? What type of drill did you do? What was the weather? Were there any other factors affecting the drill? </blockquote>
        <dl>
          <dt>Length of search</dt>
          <dd>0.5 miles</dd>
          <dt>Search Type</dt>
          <dd>Blind</dd>
          <dt>Date</dt>
          <dd>MM-DD-YYYY</dd>
        </dl>
        <button>Edit</button>
        <button>Delete</button>
      </section> */}
      </main>
    );
  }
}

export default SessionDetail;
