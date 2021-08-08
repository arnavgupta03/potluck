import React from "react";
import '../styles/feed.css';
import PostRecipe from "./postRecipe";
import logo from "../logo.png";
import { Router, Link } from "wouter";

class ViewRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: sessionStorage.getItem("username"),
            imagesrc: "",
            recipename: sessionStorage.getItem("currentRecipe").split('_')[1],
            recipesteps: "",
            recipeuser: sessionStorage.getItem("currentRecipe").split('_')[0]
        };
    }

    componentDidMount() {
        const recipeStuff = sessionStorage.getItem("currentRecipe").split('_');
        this.setState({
            recipeuser: recipeStuff[0],
            recipename: recipeStuff[1]
        });

        fetch("http://localhost:5000/getRecipe?user=" + this.state.recipeuser + "&name=" + this.state.recipename).then(response => response.json()).then(data => {
            this.setState({
                imagesrc: data.imagesrc,
                recipesteps: data.recipesteps
            });
        })
    }

    render() {
        return (
            <div className="text-center">
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
                <PostRecipe imagesrc={this.state.imagesrc} recipename={this.state.recipename} recipeuser={this.state.recipeuser}/>
                <div>
                    {this.state.recipesteps.split(',').map((value, index) => (<div><p id={"step" + index}>{index + ". " + value}</p></div>))}
                </div>
            </div>
        );
    }
}

export default ViewRecipe;