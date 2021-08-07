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
        return (
            <div>
                <h1 className="display-1 mx-1">Register</h1>
                <form action="http://localhost:5000/registerUser" method="post" target="dummyframe">
                    <div className="form-group">
                        <label for="username" className="mx-2">Username</label><br />
                        <input type="text" id="username" name="username" placeholder="Enter username" className="m-2" />
                    </div>
                    <div className="form-group">
                        <label for="password" className="mx-2">Password</label><br />
                        <input type="password" name="password" id="password" placeholder="Enter password" className="m-2" /> <br />
                        <small id="passwordTip" className="form-text text-muted m-2">Make sure it's something unique.</small>
                    </div>
                    <button onClick={() => setLocation("/setupProfile")} type="submit" className="btn btn-primary m-2">Submit</button>
                </form>
                <iframe name="dummyframe" id="dummyframe" style={{visibility: 'hidden'}}></iframe>
            </div>
        );
    //}
}

export default Register;