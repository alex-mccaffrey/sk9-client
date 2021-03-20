import React, { Component } from "react";
import config from "../config";
import ApiContext from "../ApiContext";
export class AddFolder extends Component {
  static contextType = ApiContext;

  state = {
    title: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const newFolder = { title };
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        //'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(newFolder),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((newFolder) => {
        this.context.addFolder(newFolder);
        this.props.history.push(`/user/:userId`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <div>
        <h2>Add a Folder</h2>
        <form id="new-folder" onSubmit={this.handleSubmit}>
          <section className="form-folder overview-section">
            <label htmlFor="folder-title">Folder Title</label>
            <br />
            <input
              type="text"
              name="folder-title"
              placeholder="Folder Title"
              required
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </section>
          <section className="button-section">
            <button type="submit">Submit</button>
          </section>
        </form>
      </div>
    );
  }
}

export default AddFolder;
