import React from "react";

const SignUpPage = () => {
  return (
    <article className="signUpPage_container flex-center">
      <section className="signUp_container flex-center">
        <h3>Sign Up</h3>

        <div className="signUp_name-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="signUpEmail"
            name="name"
            placeholder="Enter name here"
            required
          />
        </div>
        <div className="signUp_email-container">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="signUpEmail"
            name="email"
            placeholder="Enter email here"
            required
          />
        </div>
        <div className="signUp_password-container">
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
        <div className="signUp_passwordConfirm-container">
          <label htmlFor="passwordconfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordconfirm"
            className="loginPasswordconfirm"
            placeholder="Confirm password"
            name="passwordconfirm"
            required
          />
        </div>
        <button className="btn signUpUserBtn">Login</button>

        <p className="signUpPage-switchtext">
          Already have an account ? <span>Login In</span>
        </p>
      </section>
    </article>
  );
};

export default SignUpPage;
