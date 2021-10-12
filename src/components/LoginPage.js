import React from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css";
function LoginPage() {
  return (
    <div className="login">
      <form>
        <h3>Log in</h3>
        <hr className="hrs" />
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              required
            />
            <label
              className="custom-control-label"
              htmlFor="customCheck1"
              style={{ paddingLeft: "10px" }}
            >
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="LButton">
          Sign in
        </button>
        <p className="forgot-password text-center">
          Create a new Account?
          <Link to="/signup">
            <p>Sign up</p>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
