import React, { Component } from "react";
import "../Post/style.css";
import UpdatePost from '../UpdatePost';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

export default class Post extends Component {
  constructor() {
    super()
    this.state = {
      posts: {},
      updatedPost: ''
    }
    this.titleChange = this.titleChange.bind(this);
    this.routeChange=this.routeChange.bind(this);
  }

  componentDidMount = async () => {
    this.fetchPosts();
  }

  changingToObject = (posts) => {
    const holder = {};
    posts.forEach(post => {
      holder[post.id] = post
    });
    return holder;
  }

  fetchPosts = async () => {
    const response = await fetch(`https://animo-news.herokuapp.com/api/posts`);
    const responseBody = await response.json();
    console.log(responseBody);
    console.log(responseBody.posts)
    console.log(responseBody.posts[0])
    this.changingToObject(responseBody.posts);
    this.setState({
      posts: this.changingToObject(responseBody.posts)
    });
  }

  deletePost = (id) => {
    let updatedState = this.state.posts;
    delete updatedState[id]
    this.setState({
      posts: updatedState
    });
  }

  updatedLine = (id, newName) => {
    let updatedLine = this.state.posts;
    updatedLine[id].post = newName;
    this.setState({
      posts: updatedLine
    })
  }

  titleChange(evt) {
    this.setState({
      updatedPost: evt.target.value
    });
  }

  routeChange(){
    const id = this.props.match.params.id;
    let path = `https://animo-news.herokuapp.com/api/posts/${id}/comments`;
    this.props.history.push(path);
  }

  renderPost = () => {
    return Object.values(this.state.posts).map(post => {
      return (
        <UpdatePost
          updatedLine={this.updatedLine}
          key={post.id}
          id = {post.id}
          post={post}
          title={post}
          deletePost={this.deletePost} />
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


