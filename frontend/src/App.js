import logo from './logo.png';
import './styles/App.css';
import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            href="/"
          >
            <img src={logo} className="img-fluid m-2" alt="logo" width="36"/>
            Potluck
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item pt-auto pb-auto pl-2">
                <Link href="/about" className="nav-link active pt-auto pb-auto pl-2">About</Link>
              </li>
              <li className="nav-item pt-auto pb-auto pl-2">
                <Link href="/register" className="nav-link active pt-auto pb-auto pl-2">Register</Link>
              </li>
              <li className="nav-item pt-auto pb-auto pl-2">
                <Link href="/login" className="nav-link active pt-auto pb-auto pl-2">Login</Link>
              </li>
            </ul>
          </div>
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
