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
                <PostRecipe imagesrc={this.state.imagesrc} recipename={this.state.recipename} recipeuser={this.state.recipeuser}/>
                <button>Like</button>
                <button>Save</button>
                <button>Next</button>
            </div>
        );
    }
}
    

export default Feed;