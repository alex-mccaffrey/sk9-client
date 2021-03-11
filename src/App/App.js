import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import config from "../config";
import "./App.css";
import ApiContext from "../ApiContext";
import AddFolder from "../AddFolder/AddFolder";
import AddSession from "../AddSession/AddSession";
import MainNav from "../MainNav/MainNav";
import UserHome from "../UserHome/UserHome";
import Landing from "../Landing/Landing";
import SessionDetail from "../SessionDetail/SessionDetail";
import EditSession from "../EditSession/EditSession";
import FolderSessions from "../FolderSessions/FolderSessions";
import { fakeFolders } from "./fakeFolders";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   };

  state = {
    sessions: [],
    folders: [],
    loggedIn: true,
  };

  setFolders = folders => {
    console.log("folders in setFolders:", folders)
    this.setState(folders)
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        //'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        console.log("this is the res in first promise:", res)
        if (!res.ok) {
          console.log("this is the res is not ok:", res.ok)
          throw new Error(res.status)
        }
        return (
          Promise.all(res.json())
        )
      })
      .then((folders) => {
        this.setState({ folders })
      })
      .catch(error => this.setState({ error }))
  }




  handleAddFolder(folder) {
    this.setState({
      folders: [...this.state.folders, folder],
    });
  }

  handleAddSession(session) {
    this.setState({
      sessions: [...this.state.sessions, session],
    });
  }

  handleDeleteSession(sessionId) {
    this.setState({
      sessions: this.state.sessions.filter(
        (session) => session.id !== sessionId
      ),
    });
  }

  handleDeleteFolder(folderId) {
    this.setState({
      folders: this.state.folders.filter((folder) => folder.id !== folderId),
    });
  }

  handleLogin = () => {
    this.setState({
      loggedIn: true,
    });
  };

  renderMainRoutes() {
    if (this.state.loggedIn === false) {
      return (
        ["/", "/landing"].map((path) => (
          <Route exact key={path} path={path} component={Landing} />
        ))
      )
    }
    return (
      <>
      {["/", "/landing"].map((path) => (
          <Route exact key={path} path={path} component={Landing} />
        ))}
        <Route path="/user/:userId" component={UserHome} />
        <Route exact path="/folder/:folderId" component={FolderSessions} />
        <Route path="/session/:sessionId" component={SessionDetail} />
        <Route path="/add-folder" component={AddFolder} />
        <Route path="/add-session" component={AddSession} />
        <Route path="/edit-session" component={EditSession} />
      </>
    );
  }

  render() {
    const value = {
      sessions: this.state.sessions,
      folders: this.state.folders,
      login: this.handleLogin,
      loggedIn: this.state.loggedIn,
      addFolder: this.handleAddFolder,
      addSession: this.handleAddSession,
      deleteSession: this.handleDeleteSession,
      deleteFolder: this.handleDeleteFolder,
      //editSession: this.handleEditSession
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <nav className="App_nav">
            <MainNav />
          </nav>
          <header className="App_header">
            <h1>
            <Link to="/landing">SK9</Link>{" "}
            </h1>
            <h2>Search and Rescue K9 Training Journal</h2>
          </header>
          <main className="App_main">{this.renderMainRoutes()}</main>
          <footer className="content-info">Built by Alex McCaffrey</footer>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
