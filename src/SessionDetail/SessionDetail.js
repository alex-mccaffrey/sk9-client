import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";
import "./SessionDetail.css";
//import { format } from "date-fns";

class SessionDetail extends Component {
  static contextType = ApiContext;

  handleAddClick = () => {
    this.props.history.push("/add-session");
  };

  handleClickDelete = (e) => {
    const sessionId = this.props.match.params.sessionId;

    fetch(`${config.API_ENDPOINT}/sessions/${sessionId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
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
    const formattedDate = modifiedDate.toString();

    if (specificSessionArray.length > 0) {
      return (
        <div>
          <section className="details">
            <h2 className="Session__title">{specificSession.title}</h2>
            <p>{specificSession.details}</p>
            <h4>Drill Type:</h4> {specificSession.drill_type}
            <h4>Modified:</h4> <span className="Date">{formattedDate}</span>
            <section className="buttons">
              <button
                className="session-delete"
                type="button"
                onClick={() => this.handleClickDelete(specificSession)}
              >
                Delete Session
              </button>
              <button
                className="session-add"
                type="button"
                onClick={() => this.handleAddClick()}
              >
                Add Session
              </button>
            </section>
          </section>
        </div>
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
