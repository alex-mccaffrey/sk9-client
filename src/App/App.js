import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
//import config from "../config";
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

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   };

  state = {
    sessions: [],
    folders: [],
    loggedIn: true,
  };

  // handleAddFolder(folder) {
  //   this.setState({
  //     folders: [...this.state.folders, folder],
  //   });
  // }

  handleAddSession(session) {
    this.setState({
      sessions: [...this.state.sessions, session],
    });
  }

  // handleDeleteSession(sessionId) {
  //   this.setState({
  //     sessions: this.state.sessions.filter(
  //       (session) => session.id !== sessionId
  //     ),
  //   });
  // }

  // handleDeleteFolder(folderId) {
  //   this.setState({
  //     folders: this.state.folders.filter((folder) => folder.id !== folderId),
  //   });
  // }

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
      // addFolder: this.handleAddFolder,
      addSession: this.handleAddSession,
      //   deleteSession: this.handleDeleteSession,
      //   deleteFolder: this.handleDeleteFolder,
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
          <footer className="content-info">Footer</footer>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
