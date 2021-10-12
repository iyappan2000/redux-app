import React, { useState } from "react";
import "./Signup.css";
// import "./Loginpage.css";
import { Link } from "react-router-dom";
function SignupPage() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name,
      email,
      Password: Password,
    };
    console.log("works");
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <hr className="hr" />
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Create Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Retype the password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="Button">
          Sign Up
        </button>
        <p className="forgot-password text-center">
          or
          <Link to="/login">
            <p>Sign in?</p>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
