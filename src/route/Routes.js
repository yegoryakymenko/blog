import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import store from "../store/PostsStore";
import { Provider } from "mobx-react";
import PostsList from "../components/PostsList";
import UsersPosts from "../components/UsersPosts";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Provider postsStore={store}>
          <Switch>
            <Route path="/posts" component={PostsList} />
            <Route path="/user" component={UsersPosts} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default Routes;
