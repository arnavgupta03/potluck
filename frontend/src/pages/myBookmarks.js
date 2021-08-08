import React from "react"
import PostRecipe from "./postRecipe";

class MyBookmarks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            bookmarks: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/getBookmarks?user=" + this.state.username).then(response => response.json()).then(data => {
            this.setState({
                bookmarks: data.bookmarks
            });
        });
    }

    render() {
        return (
            <div>
                <h3 className="display-3">My Bookmarks</h3>
                {this.state.bookmarks.map((value, index) => (<div><PostRecipe imagesrc={value.recipeimage} recipename={value.recipename} recipeuser={value.recipeuser} /></div>))}
            </div>
        );
    }
}

export default MyBookmarks;