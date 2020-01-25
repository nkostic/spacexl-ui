import React from "react";
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.sass";
import Placeholder from './assets/placeholder-small.png';
import LinkIco from "./assets/link.png";
//import FlightTable from "./FlightTable";
const App = () => (
  <Router>
    <section className="app">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered has-text-white">SpaceX Launches</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns filters">

            <div className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <button className="button refresh"></button>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <label className="checkbox">
                      LAND
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="level-item">
                    <label className="checkbox">
                      REUSED
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="level-item">
                    <label className="checkbox">
                      WITH REDDIT
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="columns table-header">
            <div className="column">
              <div className="columns">
                <div className="column is-1">
                  Badge
                </div>
                <div className="column">
                  Rocket Name
                </div>
                <div className="column">
                  Rocket Type
                </div>
                <div className="column">
                  Launch Date
                </div>
                <div className="column is-4">
                  Details
                </div>
                <div className="column is-1">
                  ID
                </div>
                <div className="column is-1">
                  Article
                </div>
              </div>
            </div>
          </div>
          <div className="columns ">
            <div className="column">
              <div className="columns table-row">
                <div className="column first is-1">
                  <img src={Placeholder} alt="Rounded Rect" />
                </div>
                <div className="column">
                  Falcon 1
                </div>
                <div className="column">
                  Merlin A
                </div>
                <div className="column">
                  03/25/2005
                </div>
                <div className="column is-4">
                  Enginne Failure blah blah blah
                </div>
                <div className="column is-1">
                  1
                </div>
                <div className="column last is-1">
                  <img src={LinkIco} alt="Rounded Rect" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </Router>
);
export default App;
