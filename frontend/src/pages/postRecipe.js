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
                <img src={this.props.imagesrc} width='400' height='400'/><br></br>
                <div width='1000'>
                    <Link href="/viewRecipe"><h3 className="postRecipeName">{this.props.recipename}</h3></Link>
                    <Link href="/viewProfile" className="postRecipeUser"><small className="muted">{"by " + this.props.recipeuser}</small></Link>
                </div>
            </div>
        );
    }
}

export default PostRecipe;