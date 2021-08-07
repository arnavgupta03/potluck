import React from "react";
import '../styles/loginRegister.css';

function Register() {
    return (
        <div>
            <h1 className="display-1 mx-1">Register</h1>
            <form action="/registerUser" method="post">
                <div className="form-group">
                    <label for="username" className="mx-2">Username</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter username" className="m-2" />
                </div>
                <div className="form-group">
                    <label for="password" className="mx-2">Password</label><br />
                    <input type="password" name="password" id="password" placeholder="Enter password" className="m-2" /> <br />
                    <small id="passwordTip" className="form-text text-muted m-2">Make sure it's something unique.</small>
                </div>
                <button type="submit" className="btn btn-primary m-2">Submit</button>
            </form>
        </div>
    );
}

export default Register;