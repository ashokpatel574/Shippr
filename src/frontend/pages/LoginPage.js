import React from "react";

const LoginPage = () => {
  return (
    <article className="loginpage_container flex-center">
      <section className="login_container flex-center">
        <h3>Log In</h3>
        <div className="login_email-container">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="loginEmail"
            name="email"
            placeholder="Enter email here"
            required
          />
        </div>
        <div className="login_password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="loginPassword"
            placeholder="Enter password here"
            name="password"
            required
          />
        </div>
        <button className="btn loginUserBtn">Login</button>
        <button className="btn loginGuestBtn">Login as Guest</button>
        <p className="loginPage-switchtext">
          Don't have an account ? <span>Sign Up</span>
        </p>
      </section>
    </article>
  );
};

export default LoginPage;
