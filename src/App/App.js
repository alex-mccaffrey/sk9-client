import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import config from "../config";
import ApiContext from "../ApiContext";
import AddFolder from "../AddFolder/AddFolder";
import AddSession from "../AddSession/AddSession";
import MainNav from "../MainNav/MainNav";
import UserHome from "../UserHome/UserHome";
import Landing from "../Landing/Landing";
import SessionDetail from "../SessionDetail/SessionDetail";
import FolderSessions from "../FolderSessions/FolderSessions";
import "./App.css";
import Koda from "../Images/Koda3.jpg";
// import EditSession from "../EditSession/EditSession"

class App extends Component {
  state = {
    sessions: [],
    folders: [],
    selectedFolder: {
      id: null,
      title: "",
    },
    loggedIn: false,
  };

  setFolder = (selectedFolder) => {
    this.setState({ selectedFolder });
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/sessions`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }),
      fetch(`${config.API_ENDPOINT}/folders`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }),
    ])
      .then(([sessionsRes, foldersRes]) => {
        if (!sessionsRes.ok)
          return sessionsRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([sessionsRes.json(), foldersRes.json()]);
      })
      .then(([sessions, folders]) => {
        this.setState({ sessions, folders });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleAddFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder],
    });
  };

  handleAddSession = (session) => {
    this.setState({
      sessions: [...this.state.sessions, session],
    });
  };

  handleDeleteSession = (sessionId) => {
    this.setState({
      sessions: this.state.sessions.filter(
        (session) => session.id !== parseInt(sessionId)
      ),
    });
  };

  handleDeleteFolder = (folderId) => {
    this.setState({
      folders: this.state.folders.filter((folder) => folder.id !== folderId),
    });
  };

  // handleEditSession = (sessionId) => [
  //   this.setState({
  //     sessions: this.state.sessions.filter(
  //       (session) => session.id !== parseInt(sessionId)
  //     )
  //   })
  // ]

  handleLogin = () => {
    this.setState({
      loggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      loggedIn: false,
    });
  };

  renderMainRoutes() {
    if (this.state.loggedIn === false) {
      return ["/", "/landing"].map((path) => (
        <Route exact key={path} path={path} component={Landing} />
      ));
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
        {/* <Route path="/edit-session" component={EditSession} /> */}
      </>
    );
  }

  render() {
    const value = {
      sessions: this.state.sessions,
      folders: this.state.folders,
      selectedFolder: this.state.selectedFolder,
      loggedIn: this.state.loggedIn,
      setFolder: this.setFolder,
      login: this.handleLogin,
      logout: this.handleLogout,
      addFolder: this.handleAddFolder,
      addSession: this.handleAddSession,
      deleteSession: this.handleDeleteSession,
      deleteFolder: this.handleDeleteFolder,
      // editSession: this.handleEditSession,
    };
    if (this.state.loggedIn === false) {
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
              <img src={Koda} className="koda-logo" alt="dog logo" />
            </header>
            <main className="App_main">
              <Landing />
            </main>
            <footer className="content-info">Built by Alex McCaffrey</footer>
          </div>
        </ApiContext.Provider>
      );
    }
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
            <img src={Koda} className="koda-logo" alt="dog logo" />
          </header>
          <main className="App_main">{this.renderMainRoutes()}</main>
          <footer className="content-info">Built by Alex McCaffrey</footer>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
