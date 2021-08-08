import React from "react"
import '../styles/feed.css';
import PostRecipe from "./postRecipe";
import logo from "../logo.png";
import { Router, Link } from "wouter";

class ViewProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem("currentRecipe").split('_')[0],
            profilename: "",
            bio: "",
            recipes: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/getProfile?user=" + this.state.username).then(response => response.json()).then(data => {
            this.setState({
                profilename: data.profilename,
                bio: data.bio,
                recipes: data.recipes
            });
        });
    }

    render() {
        return (
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
                                <li className="nav-item pt-auto pb-auto pl-2">
                                    <Link href="/viewMyProfile" className="nav-link active pt-auto pb-auto pl-2">{sessionStorage.getItem("username")}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h2 className="display-2">{this.state.username}</h2>
                <h5 className="display-5">{this.state.profilename}</h5>
                <h5 className="display-5">{this.state.bio}</h5>
                {this.state.recipes.map((value, index) => (<div><PostRecipe imagesrc={this.state.recipes[index].picture} recipename={this.state.recipes[index].name} recipeuser={this.state.username} /></div>))}
            </div>
        );
    }
}

export default ViewProfile;