import React, { Component } from "react";

export class AddFolder extends Component {
  render() {
    return (
      <div>
        <form id="new-folder">
          <section className="form-folder overview-section">
            <label htmlFor="folder-title">Folder Title</label>
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
