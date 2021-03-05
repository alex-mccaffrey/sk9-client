import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FolderSessions from '../FolderSessions/FolderSessions'
import { fakeFolders } from '../App/fakeFolders'

export class UserHome extends Component {
    render() {
        return (
            <main role="main">
      <header role="banner">
        <h1>Check out your Folders</h1>
      </header>
      {fakeFolders.map(folder => {
        return (
        <li key={folder.is}>
          <Link to={`/folder/${folder.id}`}>
            {folder.title}
          </Link>
        </li>)
      })}
      {/* <section>
        <header>
            <h2>Note 1 in Folder 1</h2>
            <p>Short description of Note 1</p>
        </header>
        <blockquote>This is a description of Note 1. What went well? What went bad? Where were you? Who were you with? What dogs were there? What type of drill did you do? What was the weather? Were there any other factors affecting the drill? </blockquote>
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
      </section>
      <section>
        <header>
            <h2>Example Folder 2</h2>
            <p>Short description of Folder 2</p>
        </header>
      </section>
      <section>
        <header>
            <h2>Example Folder 3</h2>
            <p>Short description of Folder 3</p>
        </header>
      </section> */}
    </main>
        )
    }
}

export default UserHome;