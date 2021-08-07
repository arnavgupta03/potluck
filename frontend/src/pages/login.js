import React from "react";
import { Router, Link, useLocation } from "wouter";
import '../styles/loginRegister.css';

function Login() {
    const [location, setLocation] = useLocation();

    const doTheRegister = () => {
        sessionStorage.setItem("username", document.getElementById("username").value);
        sessionStorage.setItem("password", document.getElementById("password").value);
        setLocation("/setupProfile");
    }

    return (
        <div>
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