import React from 'react'

export default React.createContext({
  sessions: [],
  folders: [],
  loggedIn: false,
  addFolder: () => {},
  addSession: () => {},
  deleteSession: () => {},
  deleteFolder: () => {},
  editSession: () => {},
  loggedInState: "",
})

  