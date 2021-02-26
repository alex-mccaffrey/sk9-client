import React, { Component } from 'react'
//import { NavLink, Link } from 'react-router-dom'
//import EditSession from '../EditSession/EditSession'

export class SessionDetail extends Component {

    render() {
        return (
            <main role="main">
      <header role="banner">
        <h1>Session Details</h1>
      </header>
      <section>
        <header>
            <h2>Session 1 Details</h2>
            <p>Short description of Session 1</p>
        </header>
        <blockquote>This is a summary of Session 1.</blockquote>
        <blockquote>This is a full description of Session 1. What went well? What went bad? Where were you? Who were you with? What dogs were there? What type of drill did you do? What was the weather? Were there any other factors affecting the drill? </blockquote>
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
    </main>
        )
    }
}

export default SessionDetail
