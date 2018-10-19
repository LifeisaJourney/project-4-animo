import React, { Component } from 'react'

export default class UpdatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedPost: ''
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.titleChange=this.titleChange.bind(this);
  }

  deletePost = (id) => async () => {
    const deletePost = await fetch(`https://animo-news.herokuapp.com/api/posts/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ postid: id }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.props.deletePost(id);
  }

  onSubmit = async (evt) => {
    evt.preventDefault();
    // const requestBody = JSON.stringify({
    //   post: {post:this.state.updatedPost}
    // });
    // const response = await fetch(`https://animo-news.herokuapp.com/api/posts/${evt.target.dataset.id}`, {
    //   method: 'PATCH',
    //   body: requestBody,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    this.props.updatedLine(evt.target.dataset.id, this.state.updatedPost);
  }

  titleChange(evt) {
    this.setState({
      updatedPost: evt.target.value
    });
  }

  render() {
    const { post } = this.props;
    return (
      <div key={post.id}>
        <div className="post-title">{post.post}</div>

        <div className="day-of-post">{post.created_at.split("T")[0]}</div>

        <form className="update-post" data-id={post.id}  onSubmit={this.onSubmit}>
          <input type="text" 
          placeholder="Update" 
          name="update" 
          onChange={this.titleChange} 
          value={this.state.updatedPost}>
          </input>

          <button className="button-for-sub">Submit Here</button>
        </form>
        
        <div>
        <button className="delete-button" onClick={this.deletePost(post.id)}>
          Delete
        </button>
      </div>
      </div>
    );
  }
}
