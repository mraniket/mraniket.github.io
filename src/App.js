import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import About from "./about/About";
import Resume from "./resume/Resume";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Router>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
