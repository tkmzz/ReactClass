import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import Routes from './routes'

import Header from './components/Header/index'

class App extends Component {
  render() {
    return (
      <div className="mdl-layout">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
