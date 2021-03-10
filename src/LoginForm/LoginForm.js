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
          <form className="login-form">
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
          </form>
          {this.context.loggedIn ? <UserHome /> : null}
          {/* <form className='login-form'>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign In</button>
        </form>
      </section>
      <section>
        <header><h3>Become a Dream Team</h3>
        </header>
        <form className='signup-form'>
            <div>
              <label htmlFor="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form> */}
        </section>
      </div>
    );
  }
}

export default withRouter(LoginForm);
