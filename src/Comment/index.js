import React, { Component } from 'react';
import "../Comment/style.css";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {}
    }
    this.fetchComments=this.fetchComments.bind(this);
  }

  componentDidMount = async () => {
    this.fetchComments();
  }

  changingToObject = (comments) => {
    const holder = {};
    comments.forEach(comment => {
      holder[comment.id] = comment
    });
    return holder;
  }

  fetchComments = async () => {
    const id = this.props.match.params.id
    const response = await fetch(`https://animo-news.herokuapp.com/api/posts/${id}/comments`);
    const responseBody = await response.json();
    console.log(responseBody);
    console.log(responseBody.comments)
    console.log(responseBody.comments[0]);
    this.changingToObject(responseBody.comments);
    this.setState({
      comments: this.changingToObject(responseBody.comments)
    });
  }

  renderComment = () => {
      return Object.values(this.state.comments).map(comment => {
        return (
        <div className="comment-wrapper" key={comment.id}>
          <div className="title">{comment.comment_text}</div>
          <div className="day-of-post">{comment.created_at.split("T")[0]}</div>
        </div>
        )
    })
  }

  render() {
    return (
      <div className="render-comments">
        {this.renderComment()}
      </div>
    )
  }
}