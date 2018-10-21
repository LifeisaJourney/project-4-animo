import React, { Component } from 'react'
import "../NewPost/style.css"

export default class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      post: ''
    }
    this.titleChange = this.titleChange.bind(this);
  }

  titleChange(evt) {
    this.setState({
      post: evt.target.value
    })
  }
  
  onSubmit = async (evt) => {
    evt.preventDefault();
    const requestBody = JSON.stringify({
      post: {post:this.state.post}
    });
  
//
//https://localhost:3000
    const response = await fetch('https://animo-news.herokuapp.com/api/posts', {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
  }

  render() {
    return (
      <div>
        <form 
          action="/posts"
          className="new-post-submission" 
          onSubmit={this.onSubmit}>
          <textarea cols="50" rows="20"
            type="text" 
            placeholder="Post" 
            name="post" 
            onChange={this.titleChange} 
            value={this.state.post.post}>
            </textarea>
            <br></br>
          <button className="button-for-sub">Submit Here</button>
          <input type="reset"></input>
        </form>
      </div>
    )
  }
}
