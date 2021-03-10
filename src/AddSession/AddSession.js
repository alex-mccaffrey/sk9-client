import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fakeSessions } from "../FolderSessions/fakeSessions";
import { fakeFolders } from "../App/fakeFolders";
import ApiContext from "../ApiContext";

export class AddSession extends Component {
  static contextType = ApiContext;

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newSession = {
  //     title: e.target["session-title"],
  //     details: e.target["session-content"],
  //     //folder_id: e.target["session-folder-id"].value,
  //     modified: new Date(),
  //     //drill_type: e.target["session-type"].value,
  //   };
  //   return fakeSessions.push(newSession), console.log(fakeSessions);
  // };

  handleSubmit = e => {
    e.preventDefault()
    const newSession = {
          title: e.target["session-title"].value,
          details: e.target["session-content"].value,
          folder_id: e.target["folder-id"].value,
          modified: new Date(),
          //drill_type: e.target["session-type"].value,
    }

    fetch(`${fakeSessions}`, {
      // .then(res => {
      //   if (!res.ok)
      //     return res.json().then(e => Promise.reject(e))
      //   return res.json()
      // })
    })
      .then(newSession => {
        fakeSessions.push(newSession)
      })
      .catch(error => {
        console.error({ error })
      })
    }
  render() {
    return (
      <div>
        <h1>
          <Link to="/user/:id">SK9</Link>{" "}
        </h1>
        <header>
          <h1>Add a Session</h1>
        </header>
        <form id="new-session">
          <section className="form-section overview-section">
            <label htmlFor="session-title">Session Title</label>
            <input
              type="text"
              name="session-title"
              placeholder="Session Title"
              required
            />
          </section>

          <section className="form-section overview-section">
            <label htmlFor="session-folder">Session Folder</label>
            <select name="session-folder" id="session-folder">
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
            <label htmlFor="session-content">Session content</label>
            <textarea name="session-content" rows="15" required></textarea>
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
