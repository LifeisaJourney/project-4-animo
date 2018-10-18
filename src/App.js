import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import Login from './Login';
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
                  to='/'>Threads </Link>
                &nbsp;
                &nbsp;
            </div>
              <div className="link-wrapper">
                <Link
                  className="link"
                  to='/register'>Register </Link>
                &nbsp;
                &nbsp;
            </div>
              <div className="link-wrapper">
                <Link
                  className="link"
                  to='/login' onClick={this.logOut}>Log out/ Log in </Link>
              </div>
            </nav>
            <div>
              <Post />
              {/* <Route path ='/login' exact component = {Login} /> */}
              {/* <Route path ='/register' exact component ={Register} /> */}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
