import React, { Component } from 'react'
import ApiContext from '../ApiContext'

export class LoginForm extends Component {
  
  static contextType = ApiContext;


  handleLogin = e => {
    e.preventDefault()
    this.context.loggedIn=true
    console.log("login button clicked")
    console.log(this.context.loggedIn)``
  }

    render() {
      
        return (
            <div>
                <section>
        <header><h3>Sign In</h3>
        </header>
        <form className='login-form'>
          <p>Demo Account: <br />Username: Alex <br /> Password: Demo
          </p>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name='username' id='username' /> 
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit' value='true' onClick={this.handleLogin}>Sign In</button>
        </form>
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
        )
    }
}

export default LoginForm
