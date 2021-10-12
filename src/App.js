import { Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
// import bg from "./components/background.jpg";
function App() {
  return (
    <div className="App">
      {/* <div className="layout">
        <div className="layout-head">
          <h1>Navbar</h1>
        </div>
        <div className="links" style={{ float: "right" }}>
          <Link exact to="/">
            <h4>Login</h4>
          </Link>
          <Link to="/signup">
            <h4>Signup</h4>
          </Link>
        </div>
      </div> */}

      <div class="card text-center" className="page">
        <Route exact path="/login" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
      </div>
    </div>
  );
}

export default App;
