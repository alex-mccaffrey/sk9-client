import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import { fakeSessions } from "../FolderSessions/fakeSessions";
import { fakeFolders } from "../App/fakeFolders";
import ApiContext from "../ApiContext";
//import "./AddSession.css"

export class AddSession extends Component {
  static contextType = ApiContext;

  state = { 
    title: "",
    details: "",
    folder_id: -1,
    drill_type: 1,
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    const { title, details, folder_id, drill_type } = this.state
    //const timeNow = new Date()
    const newSession = { title, details, folder_id, drill_type, modified: new Date()}
    };

    handleRadioButton = (drill_type) => {
      this.setState({ drill_type })
    }

  render() {
    return (
      <div>
        <header>
          <h2>Add a Session</h2>
        </header>
        <form id="new-session" onSubmit={this.handleSubmit}>
          <section className="form-section overview-section">
            <label htmlFor="session-title">Session Title</label><br/>
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
            <label htmlFor="session-folder">Session Folder</label><br/>
            <select name="session-folder" id="session-folder" onChange={(e) => this.setState({ folder_id: e.target.value })}>
              {fakeFolders.map((folder) => {
                return (
                  <option key={folder.id} value={folder.id} name="folder-id">
                    {folder.title}
                  </option>
                );
              })}
            </select>
          </section>

          <section className="form-section overview-section">
            <label htmlFor="session-content">Session content</label><br/>
            <textarea value={this.state.details} name="session-content" id="session-details-box" rows="5" onChange={(e) => this.setState({ details: e.target.value })} required></textarea>
          </section>
          {/* <section className="search-time-container form-section">
            <label htmlFor="distance-searched">Search Distance (miles)</label>
            <input
              type="number"
              name="distance-searched"
              id="distance-searched"
              placeholder="1"
            />
          </section> */}

          <section className="form-section session-type-section">
            <h2>Select session type</h2>
            <input
              type="radio"
              name="session-type"
              id="session-type-runaway"
              value="0"
              className="session-type-radio"
              checked={this.state.drill_type === 0 }
              onChange={() => this.handleRadioButton(0)}
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
              value="1"
              className="session-type-radio"
              checked={this.state.drill_type === 1 }
              onChange={() => this.handleRadioButton(1)}
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
              value="2"
              className="session-type-radio"
              checked={this.state.drill_type === 2 }
              onChange={() => this.handleRadioButton(2)}
            />
            <label htmlFor="session-type-multiple">
              <span>Multiple</span>
              <p className="session-type-explanation">
                Multiple subjects are hidden during one search.
              </p>
            </label>
          </section>

          {/* <section className="form-section">
            <label className="dream-date-label" htmlFor="date-month">
              Date of Session
            </label>
            <input
              type="number"
              name="date-month"
              id="date-month"
              placeholder="01"
              min="1"
              max="12"
              required=""
            />{" "}
            .
            <input
              type="number"
              name="date-day"
              className="date-day"
              placeholder="01"
              min="1"
              max="31"
              required=""
            />{" "}
            .
            <input
              type="number"
              name="date-year"
              className="date-year"
              placeholder="2017"
              min="2016"
              max="2017"
              required=""
            />
          </section> */}

          <section className="button-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </div>
    );
  }
}

export default AddSession;
