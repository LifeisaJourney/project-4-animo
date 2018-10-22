import React, { Component } from 'react';
import "../Comment";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {}
    }
  }

  componentDidMount = async () => {
    this.fetchComments();
  }

  fetchComments = async () => {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    console.log(this.props.match.params.post_id);
    const response = await fetch (`https://animo-news.herokuapp.com/api/posts/${:id}/comments`)
    const responseBody = await response.json();
    console.log(responseBody.posts);
    this.changingToObject(responseBody.posts);
    this.setState({
      posts: this.changingToObject(responseBody.posts)
    });
  }
  


  
  // const response = await fetch(`https://animo-news.herokuapp.com/api/posts`);
  //   const responseBody = await response.json();
  //   console.log(responseBody);
  //   console.log(responseBody.posts);
  //   console.log(responseBody.posts[0]);

  render() {
    return (
      <div className="render-comments">
        {this.fetchComments}
      </div>
    )
  }

}