import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";

export class EditSession extends Component {
  static contextType = ApiContext;

  state = {
    id: null,
    title: "",
    details: "",
    folderId: 1,
    drillType: "",
  };

  componentDidMount() {
    console.log("specificSession.is:", this.props.location.state.specificSession.id)
    const { id, title, details, folder_id, drill_type } = this.props.location.state.specificSession;
    this.setState ({
      id,
      title,
      details,
      folderId: folder_id,
      drillType: drill_type,
    });
}

  handleCancel = () => {
    this.props.history.push("/user/:userId");
  };

  handleRadioButton = (drillType) => {
    this.setState({ drillType });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, title, details, folderId, drillType } = this.state;
    const updatedSession = {
      id,
      title,
      details,
      folder_id: folderId,
      drill_type: drillType,
      modified: new Date(),
    };
    console.log("this is the updatedSession in edit session", updatedSession)
    fetch(
      `${config.API_ENDPOINT}/sessions/${this.props.location.state.specificSession.id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          //'Authorization': `Bearer ${config.API_KEY}`
        },
        body: JSON.stringify(updatedSession)
      }
    )
      .then((res) => {
        console.log("this is the res", res)
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((updatedSession) => {
        console.log("this is the updatedSession in the last promise", updatedSession)
        this.context.editSession(updatedSession);
        this.props.history.push(`/user/:userId}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const getFolders = this.context.folders;

    return (
      <div>
        <header>
          <h2>Edit your Session</h2>
        </header>
        <form id="new-session" onSubmit={this.handleSubmit}>
          <section className="form-section overview-section">
            <label htmlFor="session-title">Session Title</label>
            <input
              type="text"
              name="session-title"
              placeholder="Session Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              required
            />
          </section>

          <section className="form-section overview-section">
            <label htmlFor="session-folder">Session Folder</label>
            <select
              name="session-folder"
              id="session-folder"
              value={this.state.folderId}
              onChange={(e) => this.setState({ folderId: e.target.value })}
            >
              {getFolders.map((folder) => {
                return (
                  <option key={folder.id} value={folder.id} name="folder-id">
                    {folder.title}
                  </option>
                );
              })}
            </select>
          </section>

          <section className="form-section overview-section">
            <label htmlFor="session-content">Session content</label>
            <textarea
              name="session-content"
              rows="15"
              value={this.state.details}
              onChange={(e) => this.setState({ details: e.target.value })}
              required
            ></textarea>
          </section>

          <section className="form-section session-type-section">
            <h2>Select session type</h2>
            <input
              type="radio"
              name="session-type"
              id="session-type-runaway"
              value="Runaway"
              className="session-type-radio"
              checked={this.state.drillType === "Runaway"}
              onChange={() => this.handleRadioButton("Runaway")}
            />
            <label htmlFor="session-type-runaway">
              <span>Runaway</span>
              <p className="session-type-explanation">
                These are drills where the dog watches the subject runway and
                hide / partially hide.
              </p>
            </label>

            <input
              type="radio"
              name="session-type"
              id="session-type-blind"
              value="Blind"
              className="session-type-radio"
              checked={this.state.drillType === "Blind"}
              onChange={() => this.handleRadioButton("Blind")}
            />
            <label htmlFor="session-type-blind">
              <span>Blind</span>
              <p className="session-type-explanation">
                A subject hides and the dog does not watch the direction they go
                in or how they are hidden.
              </p>
            </label>

            <input
              type="radio"
              name="session-type"
              id="session-type-multiple"
              value="Multiple"
              className="session-type-radio"
              checked={this.state.drillType === "Multiple"}
              onChange={() => this.handleRadioButton("Multiple")}
            />
            <label htmlFor="session-type-multiple">
              <span>Multiple</span>
              <p className="session-type-explanation">
                Multiple subjects are hidden during one search.
              </p>
            </label>
          </section>

          <section className="button-section">
            <button type="submit">Submit</button>
            <button
              className="Session__cancel"
              type="button"
              onClick={() => this.handleCancel()}
            >
              {" "}
              Cancel
            </button>
          </section>
        </form>
      </div>
    );
  }
}

export default withRouter(EditSession);
