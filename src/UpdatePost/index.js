import React, { Component } from 'react'
import "../UpdatePost/style.css"

export default class UpdatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedPost: ''
      // updatedTitle: ''
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.titleChange=this.titleChange.bind(this);
    // this.tChange=this.tChange.bind(this);
  }

  // componentDidMount = async () => { 
  //   this.deletePost();
  // }

//https://animo-news.herokuapp.com/api/posts/${id}
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
//https://animo-news.herokuapp.com/api/posts/${evt.target.dataset.id}
  onSubmit = async (evt) => {
    // evt.preventDefault();
    const requestBody = JSON.stringify({
      post: {post:this.state.updatedPost}
      // title: {title: this.state.updatedTitle}
    });
    console.log(evt.target.dataset.id);
    const response = await fetch(`https://animo-news.herokuapp.com/api/posts/${evt.target.dataset.id}`, {
      method: 'PUT',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.props.updatedLine(evt.target.dataset.id, this.state.updatedPost);
    // this.props.updatedLine2(evt.target.dataset.id, this.state.updatedTitle);
  }

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

//post.created_at.split("T")[0]
  render() {
    const { post } = this.props;
    return (
      <div key={post.id}>
        <div className="post-post-title">{post.title}</div>

        <div className="post-title">{post.post}</div>

        <div className="day-of-post">{post.created_at.split("T")[0]}</div>

        <form className="update-post" data-id={post.id}  onSubmit={this.onSubmit}>
          <input type="text" 
          placeholder="Update Post" 
          name="update" 
          onChange={this.titleChange} 
          value={this.state.updatedPost}>
          </input>
          
          {/* <input type="text"
          placeholder="Update Topic"
          name="update-topic"
          onChange={this.tChange}
          value={this.state.updatedTitle}>
          </input> */}

          <button className="button-for-sub">Update Post</button>
        </form>
        
        <div>
        <button className="delete-button" onClick={this.deletePost(post.id)}>
          Delete Post
        </button>
      </div>
      </div>
    );
  }
}

