import { observable, observer, action } from "mobx";

class PostsStore {
  @observable users = null;
  @observable userId = 1;
  @observable count = 0;
  @observable posts = null;
  @observable comments = null;

  @action setUsers(users) {
    this.users = users;
  }
  @action setPosts(posts) {
    this.posts = posts;
  }
  @action setCount(count) {
    this.count = count;
  }

  @action setUserId(userId) {
    console.log(userId, "oo");

    this.userId = userId;
  }
  @action setComments(comments) {
    this.comments = comments;
  }
}

const store = (window.store = new PostsStore());
export default store;
