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
        <Link
          className="navbar-brand"
          href="/"
        >
          <img src={logo} className="img-fluid m-2" alt="logo" width="75"/>
          Potluck
        </Link>
        <Link href="/about">About</Link>
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
