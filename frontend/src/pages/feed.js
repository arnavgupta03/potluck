import React from "react"
import '../styles/feed.css';
import PostRecipe from "./postRecipe";
import logo from "../logo.png";
import like from "../like.png";
import save from "../save.png";
import next from "../next.png";
import { Router, Link } from "wouter";

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: sessionStorage.getItem("username"),
            imagesrc: "",
            recipename: "",
            recipeuser: ""
        };
    }

    componentDidMount() {
        const username = sessionStorage.getItem("username");
        const postsDone = sessionStorage.getItem("postsDone");

        fetch("http://localhost:5000/getPost", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                postsDone: postsDone
            })
        }).then(response => response.json()).then((data) => {
            sessionStorage.setItem("currentRecipe", data.user + "_" + data.recipename);
            this.setState({
                imagesrc: data.recipeimage,
                recipename: data.recipename,
                recipeuser: data.user
            });
        });
    }

    getNextPost() {
        const donePost = this.state.recipeuser + "_" + this.state.recipename;
        var newPostsDoneArray = sessionStorage.getItem("postsDone").split(',')
        if (!(newPostsDoneArray.includes(donePost))){
            newPostsDoneArray.push(donePost);
        }
        const newPostsDone = newPostsDoneArray.join(',');
        sessionStorage.setItem("postsDone", newPostsDone);

        fetch("http://localhost:5000/getPost", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.user,
                postsDone: newPostsDone
            })
        }).then(response => response.json()).then((data) => {
            sessionStorage.setItem("currentRecipe", data.user + "_" + data.recipename);
            this.setState({
                imagesrc: data.recipeimage,
                recipename: data.recipename,
                recipeuser: data.user
            });
        });
    }

    handleLike() {
        fetch("http://localhost:5000/getBookmarks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.user,
                recipename: this.state.recipename,
                recipeimage: this.state.imagesrc,
                recipeuser: this.state.recipeuser
            })
        }).then(response => response.json()).then(data => {
            if(data.message == "Success") {
                this.getNextPost();
            }
        });
    }

    handleNext() {
        this.getNextPost();
    }

    handleSave() {
        fetch("http://localhost:5000/getBookmarks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.user,
                recipename: this.state.recipename,
                recipeimage: this.state.recipeimage,
                recipeuser: this.state.recipeuser
            })
        }).then(response => response.json()).then(data => {
            if(data.message == "Success") {
                this.getNextPost();
            }
        });
    }

    render() {
        return(
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
                                <li className="nav-item pt-auto pb-auto pl-2">
                                    <Link href="/myBookmarks" className="nav-link active pt-auto pb-auto pl-2">My Bookmarks</Link>
                                </li>
                                <li className="nav-item pt-auto pb-auto pl-2">
                                    <Link href="/viewMyProfile" className="nav-link active pt-auto pb-auto pl-2">{sessionStorage.getItem("username")}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="pt-5">
                    <PostRecipe imagesrc={this.state.imagesrc} recipename={this.state.recipename} recipeuser={this.state.recipeuser}/>
                    <button onClick={() => this.handleLike()}><img src={like} className="m-auto" width="50" height="50"></img></button>
                    <button onClick={() => this.handleSave()}><img src={save} className="m-auto" width="50" height="50"></img></button>
                    <button onClick={() => this.handleNext()}><img src={next} className="m-auto" width="50" height="50"></img></button>
                </div>
            </div>
        );
    }
}
    

export default Feed;