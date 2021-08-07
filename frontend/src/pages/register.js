import React, {useState, setState} from "react";
import { Router, Link, useLocation } from "wouter";
import '../styles/loginRegister.css';

function Register() {
    const [location, setLocation] = useLocation();
    /*constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            results: ""
        }
    }

    handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        };
        fetch("http://localhost:5000/registerUser", requestOptions).then(response => response.json()).then(data => this.setState({ results: data.message }));
        if (this.state.results === "Success") {
            setLocation("/setupProfile")
        }
    }

    updateUsername(evt) {
        this.setState({
            username: evt.target.value
        });
        console.log(this.state.username + " " + this.state.password);
    }

    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        });
        console.log(this.state.username + " " + this.state.password);
    }*/

    //render() {

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
            <h1 className="display-1 mx-1 text-center">Register</h1>
            <form action="http://localhost:5000/registerUser" method="post" target="dummyframe">
                <div className="form-group text-center">
                    <label for="username" className="mx-2">Username</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter username" className="m-2" />
                </div>
                <div className="form-group text-center">
                    <label for="password" className="mx-2">Password</label><br />
                    <input type="password" name="password" id="password" placeholder="Enter password" className="m-2" /> <br />
                    <small id="passwordTip" className="form-text text-muted m-2">Make sure it's something unique.</small>
                </div>
                <div className="form-group text-center">
                    <label for="name" className="mx-2">Name</label><br />
                    <input type="text" name="name" id="name" placeholder="Enter name" className="m-2" />
                </div>
                <div className="form-group text-center">
                    <label for="bio" className="mx-2">Bio</label><br />
                    <input type="text" name="bio" id="bio" placeholder="Enter a simple bio" className="m-2" />
                </div>
                {/*<div className="form-group">
                    <label for="file" className="mx-2">Profile Photo</label><br />
                    <input type="file" name="profilepic" accept="image/*" id="profilepic" className="m-2" />
                </div>*/}
                <div className="text-center">
                    <button onClick={doTheRegister} type="submit" className="btn btn-primary m-2 text-center">Submit</button>
                </div>
            </form>
            <iframe name="dummyframe" id="dummyframe" style={{visibility: 'hidden'}}></iframe>
        </div>
    );
    //}
}

export default Register;