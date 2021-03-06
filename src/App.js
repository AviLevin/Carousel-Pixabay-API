import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";

import Food from "./components/Food/Food";
import Sport from "./components/Sport/Sport";
import SearchBox from "./components/SearchBox";

import "./App.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="top"></div>
          <div className="App">
            <div className="container">
              <div className="row">
                <div className="title">
                  {" "}
                  <div className="row">
                    {" "}
                    <h1>OUR GALLERY </h1>
                  </div>
                  <div className="row">
                    <SearchBox></SearchBox>
                  </div>
                  <br></br>
                  <div className="container">
                    <NavLink to="/">
                      <button
                        exact
                        activeClassName="active"
                        type="button"
                        className="btn btn-primary"
                      >
                        Sport
                      </button>
                    </NavLink>

                    <NavLink to="/food">
                      <button
                        activeClassName="active"
                        type="button"
                        className="btn btn-primary"
                      >
                        Food
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="elements">
                <Routes>
                  <Route exact path="/" element={<Sport />}></Route>

                  <Route path="/Food" element={<Food />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
