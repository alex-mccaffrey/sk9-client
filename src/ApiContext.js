import React from 'react'

export default React.createContext({
  sessions: [],
  folders: [],
  addFolder: () => {},
  addSession: () => {},
  deleteSession: () => {},
})

  