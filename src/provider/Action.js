import uuid from "uuid";
import store from "../store/PostsStore";

export const getUsers = () => {
  console.log(this);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(users => {
      console.log(users);
      store.setUsers(users);
      getPosts();
      // users.length > 0 ? getPosts() : getUsers();
    });
};

export const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(posts => {
      console.log("posts is loaded");
      store.setPosts(posts);
      return posts;
    });
};
