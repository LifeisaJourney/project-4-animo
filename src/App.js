import React, { Component } from 'react';
import './App.css';
import Post from './Post';
// import Login from './Login';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';
import Comment from './Comments';
// import Register from './Register';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  // constructor(){
  //   super()
  //   this.handleClick=this.handleClick.bind(this);
  // }

  // handleClick =(e) => {
  //   e.preventDefault();
  //   console.log('link was clicked');
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-wrapper">
            <h1 className='welcome-screen-title'>Animal-News</h1>
            <nav className="nav-links">
              <div className="link-wrapper">
                <Link
                  className="link"
                  to='/posts'>Posts </Link>
                &nbsp;
                &nbsp;
            </div>
              <div className="link-wrapper">
                <Link
                  className="posts-new"
                  to='/posts/new'>New Post </Link>
                &nbsp;
                &nbsp;
            </div>
            </nav>
            <div>
              &nbsp;
              <Route path='/' exact component = {Post} />
              <Route path='/posts' exact component={Post} />
              <Route path='/posts/new' component={NewPost} />
              <Switch>
                <Redirect from='/posts/:id' to='/posts/:id/comments'/>
                <Route exact path='/posts/:id/comments' component={Comment} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
