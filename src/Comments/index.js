import React, { Component } from 'react';
import "../Comments";

export default class Comment extends Component {

  // fetchAlbums = async () => {
  //   const response = await fetch(`https://animo-news.herokuapp.com/api/posts`);
  //   const responseBody = await response.json();
  //   const id = this.props.match.params.id;
  //   const albums = await (await fetch(`/api/users/${id}/albums`)).json();
  //   this.setState({
  //     userAlbums: albums
  //   });
  // }
  fetchComments = async () => {
    const id = this.props.match
    const response = await fetch (`https://animo-news.herokuapp.com/api/posts/${id}/comments`)
  }
  // const response = await fetch(`https://animo-news.herokuapp.com/api/posts`);
  //   const responseBody = await response.json();
  //   console.log(responseBody);
  //   console.log(responseBody.posts);
  //   console.log(responseBody.posts[0]);

  render() {
    return (
      <div className="render-comments">
        {this.renderComments}
      </div>
    )
  }
}
