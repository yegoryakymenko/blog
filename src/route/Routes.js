import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import PostsStore from "../store/PostsStore";
import { Provider } from "mobx-react";
import PostsList from "../components/PostsList";
import UsersPosts from "../components/UsersPosts";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Provider PostsStore={PostsStore}>
          <Switch>
            <Route path="/posts" component={PostsList} />
            <Route path="/user/:id" component={UsersPosts} />
            {/*<Route path="/user/:id" component={UsersPosts} />let userUrl = "users/"+2*/}
            <Redirect to="posts" />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default Routes;
