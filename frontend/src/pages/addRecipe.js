import React, { useState } from "react"
import { Router, Link, useLocation } from "wouter";
import logo from "../logo.png"

function AddRecipe() {
    const [count, setCount] = useState(1);
    const [location, setLocation] = useLocation();

    function doTheAdd() {
        const recipename = document.getElementById("recipename").value;
        var recipesteps = []
        const recipeimage = sessionStorage.getItem("recipeimage");
        const username = sessionStorage.getItem("username");

        for (var i = 0; i < count; i++) {
            recipesteps.push(document.getElementById("recipesteps" + i).value);
        }

        recipesteps = recipesteps.join();

        fetch("http://localhost:5000/postRecipe", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                recipename: recipename,
                recipesteps: recipesteps,
                recipeimage: recipeimage,
                username: username
            })
        }).then(response => response.json()).then((data) => {
            if(data.message === "Success") {
                alert("Successfully posted!");
                setLocation("/feed");
            } else if (data.message === "Recipe name already exists") {
                alert("Recipe name already exists. Please change the name.");
            } else {
                alert("Please try again.");
            }
        });
    }

    const checkUploadResult = (resultEvent) => {
        if (resultEvent.event === "success") {
            sessionStorage.setItem("recipeimage", resultEvent.info.secure_url);
        }
    }

    const addLine = () => {
        setCount(count + 1);
    }

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "guptap1",
        uploadPreset: "potluck_post"
    },(error, result) => { checkUploadResult(result) });
    
    const showWidget = () => {
        widget.open()
    }

    return(
        <div>
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
                                <Link href="/feed" className="nav-link active pt-auto pb-auto pl-2">My Feed</Link>
                            </li>
                            <li className="nav-item pt-auto pb-auto pl-2">
                                <Link href="/addRecipe" className="nav-link active pt-auto pb-auto pl-2">New Recipe</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="w-100 text-center ml-auto mr-auto d-flex justify-content-center pt-5 align-items-center">
                <div className="register shadow">
                    <h3 className="display-3 text-center">Add a Recipe</h3>
                    <div className="form-group text-center">
                        <label for="recipename" className="mx-2 form-label">Recipe Name</label><br />
                        <input type="text" id="recipename" name="recipename" placeholder="What'd you make?" className="m-auto pl-3 form-control w-75" />
                    </div>
                    <div className="form-group text-center">
                        <label for="recipesteps" className="mx-2 form-label">Steps (no commas)</label><br />
                        {[...Array(count)].map((value, index) => (<div><input type="text" id={"recipesteps" + index} name="recipesteps" placeholder="How'd you make it?" className="m-auto pl-3 form-control w-75" /><br /></div>))}
                    </div>
                    <div className="text-center">
                        <button onClick={addLine} type="submit" className="btn btn-primary m-2 text-center">Add Step</button>
                    </div>
                    <div className="form-group text-center">
                        <label for="profilepic" className="mx-2 form-label">Recipe Photo</label><br />
                        {/*<input type="file" name="profilepic" accept="image/*" id="profilepic" className="m-2" />*/}
                        <button onClick={showWidget} className="btn btn-primary m-2 text-center">Upload Photo</button>
                    </div>
                    <div className="text-center">
                        <button onClick={doTheAdd} type="submit" className="btn btn-primary m-2 text-center">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRecipe;