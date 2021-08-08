import React from "react"

class ViewRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: sessionStorage.getItem("username"),
            imagesrc: "",
            recipename: sessionStorage.getItem("currentRecipe").split('_')[1],
            recipesteps: "",
            recipeuser: sessionStorage.getItem("currentRecipe").split('_')[0]
        };
    }

    componentDidMount() {
        const recipeStuff = sessionStorage.getItem("currentRecipe").split('_');
        this.setState({
            recipeuser: recipeStuff[0],
            recipename: recipeStuff[1]
        });

        fetch("http://localhost:5000/getRecipe?user=" + this.state.recipeuser + "&name=" + this.state.recipename).then(response => response.json()).then(data => {
            this.setState({
                imagesrc: data.imagesrc,
                recipesteps: data.recipesteps
            });
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.imagesrc} />
                <h3 className="display-3">{this.state.recipename}</h3>
                <p className="text-muted">{"by " + this.state.recipeuser}</p>
                {this.state.recipesteps.split(',').map((value, index) => (<div><p id={"step" + index}>{index + ". " + value}</p></div>))}
            </div>
        );
    }
}

export default ViewRecipe;