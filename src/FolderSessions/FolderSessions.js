import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SessionDetail from '../SessionDetail/SessionDetail'
import { fakeSessions } from './fakeSessions'

export class FolderSessions extends Component {
    render() {
        return (
            <div>
                <ul>
          {fakeSessions.map(session =>
            <li key={session.id}>
                <Link to={`/session/${session.id}`} render={(rprops) => <SessionDetail {...rprops}/>}>
            {session.title}
          </Link>
              {/* <SessionDetail
                id={session.id}
                title={session.title}
                details={session.details}
                modified={session.modified}
                drill_type={session.drill_type}
              /> */}
            </li>
          )}
        </ul>
            </div>
        )
    }
}

export default FolderSessions
