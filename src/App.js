import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import Header from "./components/Header/Header";
import House from "./components/House/House";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Wizard />
        <Dashboard>
          {/* <House /> */}
        </Dashboard>
      </div>
    );
  }
}

export default App;
