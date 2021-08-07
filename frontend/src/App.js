import logo from './logo.png';
import './styles/App.css';
import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <nav className="navbar navbar-light bg-light">
          <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="navbar-brand"
                href="/"
              >
                <img src={logo} className="img-fluid m-2" alt="logo" width="75"/>
                Potluck
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="sideNavbar">
          <a href="/about">About</a>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </div>
      </nav>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
    </Router>
  );
}
