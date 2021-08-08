import React from "react"
import PostRecipe from "./postRecipe";

class ViewProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
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
                <h2 className="display-2">{this.state.username}</h2>
                <h5 className="display-5">{this.state.profilename}</h5>
                <h5 className="display-5">{this.state.bio}</h5>
                {this.state.recipes.map((value, index) => (<div><PostRecipe imagesrc={this.state.recipes[index].picture} recipename={this.state.recipes[index].name} recipeuser={this.state.username} /></div>))}
            </div>
        );
    }
}

export default ViewProfile;