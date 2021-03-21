import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import "./AddSession.css";

export class AddSession extends Component {
  static contextType = ApiContext;

  state = {
    title: "",
    details: "",
    folderId: 1,
    drillType: "Runaway",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, details, folderId, drillType } = this.state;
    const newSession = {
      title,
      details,
      folder_id: folderId,
      drill_type: drillType,
      modified: new Date(),
    };
    fetch(`${config.API_ENDPOINT}/sessions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSession),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((newSession) => {
        this.context.addSession(newSession);
        this.props.history.push(`/user/:userId`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  handleRadioButton = (drillType) => {
    this.setState({ drillType });
  };

  render() {
    const getFolders = this.context.folders;
    return (
      <div>
        <h2>Add a Session</h2>
        <form id="new-session" onSubmit={this.handleSubmit}>
          <section className="form-section overview-section">
            <label htmlFor="session-title" className="session-title">
              Session Title
            </label>
            <br />
            <input
              type="text"
              name="session-title"
              placeholder="Session Title"
              required
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </section>

          <section className="form-section overview-section">
            <label htmlFor="session-folder" className="session-folder">
              Session Folder
            </label>
            <br />
            <select
              name="session-folder"
              id="session-folder"
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
            <label htmlFor="session-content" className="session-content">
              Session content
            </label>
            <br />
            <textarea
              value={this.state.details}
              name="session-content"
              id="session-details-box"
              rows="5"
              onChange={(e) => this.setState({ details: e.target.value })}
              required
            ></textarea>
          </section>

          <section className="form-section session-type-section">
            <label htmlFor="session-type" className="session-type">
              Select session type
            </label>
            <br />
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
          </section>
        </form>
      </div>
    );
  }
}

export default AddSession;
