import React from "react";
import { Router, Link, useLocation } from "wouter";
import '../styles/loginRegister.css';
import logo from "../logo.png"

function Login() {
    const [location, setLocation] = useLocation();

    const doTheRegister = () => {
        sessionStorage.setItem("username", document.getElementById("username").value);
        sessionStorage.setItem("password", document.getElementById("password").value);
        setLocation("/setupProfile");
    }

    return (
        <div className="register">
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
            <h1 className="display-1 mx-1 text-center">Log In</h1>
            <form id="form">{/* action="http://localhost:5000/loginUser" method="post" target="dummyframe">*/}
                <div className="form-group text-center">
                    <label for="username" className="mx-2">Username</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter username" className="m-2" />
                </div>
                <div className="form-group text-center">
                    <label for="password" className="mx-2">Password</label><br />
                    <input type="password" name="password" id="password" placeholder="Enter password" className="m-2" />
                </div>
            </form>
            <div className="text-center">
                <button onClick={doTheRegister} className="btn btn-primary m-2">Submit</button>
            </div>
            <iframe name="dummyframe" id="dummyframe" style={{visibility: 'hidden'}}></iframe>
        </div>
    );
}

export default Login;