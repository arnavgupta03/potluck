import React from "react"
import '../styles/feed.css';
import PostRecipe from "./postRecipe";

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
            this.setState({
                imagesrc: data.recipeimage,
                recipename: data.recipename,
                recipeuser: data.user
            });
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
                            </ul>
                        </div>
                    </div>
                </nav>
                <PostRecipe imagesrc={this.state.imagesrc} recipename={this.state.recipename} recipeuser={this.state.recipeuser}/>
                <button>Like</button>
                <button>Save</button>
                <button>Next</button>
            </div>
        );
    }
}
    

export default Feed;