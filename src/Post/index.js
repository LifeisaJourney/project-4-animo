import React, { Component } from "react";
import "../Post/style.css";
import UpdatePost from '../UpdatePost';

export default class Post extends Component {
  constructor() {
    super()
    this.state = {
      posts: {},
      updatedPost: ''
      // updatedTitle: ''
    }
    this.titleChange = this.titleChange.bind(this);
    // this.tChange=this.tChange.bind(this);
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

  // https://animo-news.herokuapp.com/api/posts
  fetchPosts = async () => {
    const response = await fetch(`https://animo-news.herokuapp.com/api/posts`);
    const responseBody = await response.json();
    // console.log(responseBody);
    console.log(responseBody.posts);
    // console.log(responseBody.posts[0]);
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

  // updatedLine2 = (id, newTitle) => {
  //   let updatedLine2 = this.state.posts;
  //   updatedLine2[id].title = newTitle;
  //   this.setState({
  //     posts: updatedLine2
  //   })
  // }

  titleChange(evt) {
    this.setState({
      updatedPost: evt.target.value
    });
  }

  // tChange(evt){
  //   this.setState({
  //     updatedTitle: evt.target.value
  //   })
  // }

  renderPost = () => {
    return Object.values(this.state.posts).map(post => {
      return (
        <UpdatePost
          updatedLine={this.updatedLine}
          key={post.id}
          post={post}
          title={post}
          // updatedLine2={this.updatedLine2}
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


