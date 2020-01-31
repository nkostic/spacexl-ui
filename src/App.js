import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.sass";
import FlightTable from "./components/FlightTable";
import Title from "./components/Title";
const App = () => (
  <Router>
    <section className="app">
      <Title>SpaceX Launches</Title>
      <FlightTable />
    </section>
  </Router>
);
export default App;
