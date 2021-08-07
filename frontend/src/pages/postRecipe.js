import React from "react"

class PostRecipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.imagesrc} width='500' height='500'/>
                <h3 className="display-3">{this.props.recipename}</h3>
                <small className="muted">{this.props.recipeuser}</small>
            </div>
        );
    }
}

export default PostRecipe;