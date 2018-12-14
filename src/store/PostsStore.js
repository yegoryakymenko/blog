import { observable, observer, action } from "mobx";

class PostsStore {
  @observable users = null;
  @observable posts = null;
}

const store = (window.store = new PostsStore());
export default store;
