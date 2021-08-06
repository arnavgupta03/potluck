import logo from './logo.svg';
import './styles/App.css';
import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
        <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">About</Link>
        </div>
      </footer>
      </main>
    </Router>
  );
}
