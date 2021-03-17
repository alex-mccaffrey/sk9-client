import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";
//import { format } from "date-fns";

class SessionDetail extends Component {
  static contextType = ApiContext;

  handleAddClick = () => {
    this.props.history.push("/add-session");
  };

  // handleEditClick = (specificSession) => {
  //   this.props.history.push({
  //     pathname: "/edit-session",
  //     state: { specificSession },
  //   });
  // };

  handleClickDelete = (e) => {
    const sessionId = this.props.match.params.sessionId;

    fetch(`${config.API_ENDPOINT}/sessions/${sessionId}`, {
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
        this.context.deleteSession(sessionId);
        this.props.history.push("/user/:userId");
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const id = this.props.match.params.sessionId;
    const specificSessionArray = this.context.sessions.filter(
      (session) => session.id === parseInt(id)
    );
    const specificSession =
      specificSessionArray.length > 0 ? specificSessionArray[0] : {};
    const dateString = specificSession.modified;
    const modifiedDate = new Date(dateString);
    const formattedDate = modifiedDate.toString()

    if (specificSessionArray.length > 0) {
      return (
        <main role="main">
          <h2 className="Session__title">Title: {specificSession.title}</h2>
          <p>{specificSession.details}</p>
          <p>Drill Type: {specificSession.drill_type}</p>
          <div className="Session__dates">
            <div className="Session__dates-modified">
              Modified: <span className="Date">{formattedDate}</span>
            </div>
          </div>
          <button
            className="Session__delete"
            type="button"
            onClick={() => this.handleClickDelete(specificSession)}
          >
            Delete
          </button>
          {/* <button
            className="Session__edit"
            type="button"
            onClick={() => this.handleEditClick(specificSession)}
          >
            Edit
          </button> */}
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
    );
  }
}

export default withRouter(SessionDetail);
