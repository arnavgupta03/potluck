import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Login from "../pages/login";
import Register from "../pages/register";
import ProfileSetup from "../pages/profileSetup"
import Feed from "../pages/feed"
import AddRecipe from "../pages/addRecipe"
import ViewRecipe from "../pages/viewRecipe";
import ViewProfile from "../pages/viewProfile";
import ViewMyProfile from "../pages/viewMyProfile";
import MyBookmarks from "../pages/myBookmarks";

/*
The router is imported in app.jsx

Our site just has two routes in it–Home and About
- Each one is defined as a component in /pages
- We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/setupProfile" component={ProfileSetup} />
      <Route path="/addRecipe" component={AddRecipe} />
      <Route path="/feed" component={Feed} />
      <Route path="/viewRecipe" component={ViewRecipe} />
      <Route path="/viewProfile" component={ViewProfile} />
      <Route path="/viewMyProfile" component={ViewMyProfile} />
      <Route path="/myBookmarks" component={MyBookmarks} />
      <Route path="/about" component={About} />
    </Switch>
);
