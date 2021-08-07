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

        fetch("http://localhost:5000/loginUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json()).then(function(data) {
            if (data.message === "Success") {
                sessionStorage.removeItem("password");
                sessionStorage.setItem("loggedIn", "true");
                sessionStorage.setItem("postsDone", "");
                setLocation("/feed");
            } else {
                sessionStorage.setItem("loggedIn", "false");
                setLocation("/")
            }
        });
    });

    return(
        <div>
            Setting up your profile...
        </div>
    );
}

export default ProfileSetup;