import React from "react"
import { Router, Link } from "wouter";
import '../styles/feed.css';

class PostRecipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.imagesrc} width='500' height='500'/><br></br>
                <div width='1000'>
                    <Link href="/viewRecipe"><h3 className="display-3" className="postRecipeName">{this.props.recipename}</h3></Link>
                    <Link href="/viewUser" className="postRecipeUser"><small className="muted">{"by " + this.props.recipeuser}</small></Link>
                </div>
            </div>
        );
    }
}

export default PostRecipe;