import React, { Component } from 'react';
import './App.css';
import Post from './Post';
// import Login from './Login';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';
// import Register from './Register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
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
              <Route path='/posts/new' component={NewPost} />
              <Route path='/posts' exact component={Post} />

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
