import uuid from "uuid";

export const getUsers = () => {
  console.log(this);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(users => {
      users.length ? getPosts() : getUsers();
    })
    .then();
};

export const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(result => result.json())
    .then(posts => {
      console.log("posts is loaded");

      return posts;
    });
};
