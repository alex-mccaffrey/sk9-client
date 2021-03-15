import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import ApiContext from "../ApiContext";
import UserHome from '../UserHome/UserHome';

export class LoginForm extends Component {


  static contextType = ApiContext;

  handleLogin = (e) => {
    e.preventDefault();
    this.context.login()
    this.props.history.push('/user/:userId');
  };

  render() {
    return (
      <div>
        <section>
          <header>
            <h3>Sign In</h3>
          </header>
          <button className="login-button" onClick={this.handleLogin}>Login to Demo Account</button>
          {/* <form className="login-form">
            <p>
              Demo Account: <br />
              <b>Username: Alex</b><br /> Password: Demo
            </p>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit" value="true" onClick={this.handleLogin}>
              Sign In
            </button>
          </form> */}
          {this.context.loggedIn ? <UserHome /> : null}
        </section>
      </div>
    );
  }
}

export default withRouter(LoginForm);
