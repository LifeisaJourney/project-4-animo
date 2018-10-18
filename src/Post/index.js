import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Login/style.css";

export default class Post extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount = async () => {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch(`https://animo-news.herokuapp.com/api/posts`);
    const responseBody = await response.json();
    const id = responseBody.posts[0].id;
    this.setState({
      posts: responseBody.posts,
    })
    // console.log(responseBody.posts[1].post);
    // console.log(responseBody.posts[1].created_at.split("T")[0]);
  }

  renderPost = () => {
    return this.state.posts.map(post => {
      return (
        <div key={post.id}>
          <div className="title">{post.post}</div>
          <div className="day-of-post">{post.created_at.split("T")[0]}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="render-post">
        {this.renderPost()}
      </div>
    );
  }
}


