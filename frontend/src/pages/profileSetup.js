import React, { useState, useEffect } from "react"
import { Router, Link, useLocation } from "wouter";

function ProfileSetup() {
    const [location, setLocation] = useLocation();

    useEffect(() => {
        const username = sessionStorage.getItem("username");
        const password = sessionStorage.getItem("password");

        /*var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:5000/loginUser", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            username: username,
            password: password
        }));

        const loginRequest = xhr.send();
        alert(loginRequest);*/

        if (!(sessionStorage.getItem("loggedIn") === "true")){
            fetch("http://localhost:5000/loginUser", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }).then(response => response.json()).then(function(data) {
                if (data.message == "Success") {
                    alert("Login passed!")
                    sessionStorage.removeItem("password");
                    sessionStorage.setItem("loggedIn", "true");
                    sessionStorage.setItem("postsDone", "");
                    setLocation("/feed");
                } else {
                    sessionStorage.setItem("loggedIn", "false");
                    alert("Login failed! Please try again.");
                    setLocation("/");
                }
            });
        } else {
            setLocation("/feed");
        }
    });

    return(
        <div>
            Setting up your profile...
        </div>
    );
}

export default ProfileSetup;