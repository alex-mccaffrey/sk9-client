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
    //   <div>
    //     <section className="login-section">
    //       <h3>Sign In</h3>
    //       <button className="login-button" onClick={this.handleLogin}>
    //         Login to Demo Account
    //       </button>
    //       {this.context.loggedIn ? <UserHome /> : null}
    //     </section>
    //   </div>
    // );
    <section className="login">
      {loggedInState === "logging in" ? <Spinner /> : ""}
      <h3>Login</h3>
      {error && (
        <p className="error" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <p>Demo Account: Username "Demo", Password "DemoPassword123!"</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password" 
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
  }
}

export default withRouter(LoginForm);

// import React, { useState } from "react";
// import authApiService from "../services/auth-api-service";
// import TokenService from "../services/token-service";
// //import { Spinner } from "../Spinner/Spinner";
// import "./LoginForm.css";

// export class LoginForm extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     setLoggedInState("logging in");
//     const { username, password } = e.target;
//     const user = { username: username.value, password: password.value };
//     setError(null);
//     authApiService
//       .loginUser(user)
//       .then((loginResponse) => {
//         TokenService.saveAuthToken(loginResponse.authToken);
//         props.history.push("./user/:userId");
//       })
//       .catch((res) => {
//         setLoggedInState("");
//         setError(res.error);
//       });
//   };

//   render() {
//     return (
//       <section className="login-section">
//         {loggedInState === "logging in " ? <Spinner /> : ""}
//         <h3>Sign In</h3>
//         {error && (
//           <p className="error" style={{ color: "red" }}>
//             {error}
//           </p>
//         )}
//         <p>Demo Account: Username "Demo", Password "DemoPassword123!"</p>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="username">Username</label>
//             <input type="text" name="username" id="username" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" name="password" id="password" />
//           </div>
//           <button type="submit">Sign In</button>
//         </form>
//       </section>
//     );
//   }
// }
