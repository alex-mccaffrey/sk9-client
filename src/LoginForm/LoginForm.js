import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiContext from "../ApiContext";
import UserHome from "../UserHome/UserHome";
import "./LoginForm.css";

export class LoginForm extends Component {
  static contextType = ApiContext;

  handleLogin = (e) => {
    e.preventDefault();
    this.context.login();
    this.props.history.push("/user/:userId");
  };

  render() {
    return (
      <div>
        <section className="login-section">
          <h3>Sign In</h3>
          <button className="login-button" onClick={this.handleLogin}>
            Login to Demo Account
          </button>
          {this.context.loggedIn ? <UserHome /> : null}
        </section>
      </div>
    );
  }
}

export default withRouter(LoginForm);
