import React, { Component } from "react";
//import { Link } from "react-router-dom";

export class AddFolder extends Component {
  render() {
    return (
      <div>
          <h2>Add a Folder</h2>
        <form id="new-folder">
          <section className="form-folder overview-section">
            <label htmlFor="folder-title">Folder Title</label><br/>
            <input
              type="text"
              name="folder-title"
              placeholder="Folder Title"
              required
            />
          </section>
          <section className="button-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </div>
    );
  }
}

export default AddFolder;
