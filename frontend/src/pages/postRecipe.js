import React from "react"
import { Router, Link } from "wouter";

class PostRecipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link href="/viewRecipe"><img src={this.props.imagesrc} width='500' height='500'/>
                <h3 className="display-3">{this.props.recipename}</h3></Link>
                <Link href="/viewUser"><small className="muted">{this.props.recipeuser}</small></Link>
            </div>
        );
    }
}

export default PostRecipe;