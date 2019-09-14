import React from 'react';
import { Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <Link className="navbar-brand" to="/session">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/session">Session</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/invigilation">Invigilation</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/batchOwner">Batch Owner</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;