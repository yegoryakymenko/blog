import React, { Component } from "react";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { getUsers } from "../provider/Action";
import _ from "lodash";
import { Button, Container, Row, Col } from "reactstrap";
import uuid from "uuid";

@inject("PostsStore")
@observer
class PostsList extends Component {
  state = {
    page: 0,
    count: 10
  };
  loadPreviousPosts = () => {
    this.setState({
      page: this.state.page - 1
    });
  };
  loadNextPosts = () => {
    this.setState({
      page: this.state.page + 1
    });
  };
  componentDidMount() {
    const p = getUsers.call(this);
    console.log(p, "d");
  }

  // handleUserId = e => {
  //   console.log(id, "e");

  //   PostsStore.setUserId(id);
  // };

  render() {
    const { users, posts } = this.props.PostsStore;
    const { page, count } = this.state;
    if (!users || !posts) return <h1>No users or posts</h1>;
    console.log(posts[0].id);

    let postId = _.map(users, (item, i) => {
      let id = i * count + page;
      return (
        <li key={uuid.v4()} className="blogBlock-li">
          <Link to={"/user/" + item.id}>
            <h2 className="blogBlock-userName">{item.name}</h2>
          </Link>
          <Link to={"/post/" + posts[id].id}>
            <h3 className="blogBlock-title">{posts[id].title}</h3>
          </Link>
          <p className="blogBlock-body">{posts[id].body}</p>
        </li>
      );
    });

    return (
      <div className="App">
        <ul className="blogBlock">{postId}</ul>
        <Container>
          <Row>
            <Col sm={{ size: "auto", offset: 4 }}>
              <Button
                color="primary"
                onClick={this.loadPreviousPosts}
                disabled={page === 0}
              >
                Previous
              </Button>
              <Button
                color="primary"
                onClick={this.loadNextPosts}
                disabled={Math.round(posts.length / 10) - 2 === page}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostsList;
