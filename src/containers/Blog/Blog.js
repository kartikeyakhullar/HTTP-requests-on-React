import React, { Component } from 'react';
import Posts from "./Posts/Posts"
import NewPost from "./NewPost/NewPost"

import './Blog.css';
import {Route,NavLink,Switch,Redirect} from "react-router-dom";
// import FullPost from "./FullPost/FullPost"

class Blog extends Component {

    state = {
        auth : true
    }


    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact> Posts </NavLink></li>
                            <li><NavLink to="/new-post"> New-Post </NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component = {NewPost} /> : null}
                    <Route path="/posts" component = {Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* To handle error 404 routes */}
                    {/* <Route render={()=>{<h1>Page not found!!</h1>}} /> */}
                    {/* <Route path="/:id" exact component = {FullPost} /> */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;