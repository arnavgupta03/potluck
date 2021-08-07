import React from "react"

class PostRecipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.imagesrc}/>
                <h3 className="display-3">{this.props.recipename}</h3>
                <small className="muted">{this.props.recipeuser}</small>
            </div>
        );
    }
}

export default PostRecipe;