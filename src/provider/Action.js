import store from "../store/PostsStore";

export const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(users => {
      store.setUsers(users);
      getPosts();
    });
};

export const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(posts => {
      store.setPosts(posts);
      getComments();
    });
};
export const getComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(result => result.json())
    .then(comments => {
      store.setComments(comments);
      // console.log(comments)
      // return comments;
    });
};
