import React from 'react';
import { Link } from 'react-router-dom';

// available state: currentUser
// available actions: logout

const sessionLinks = () => (
  <div className="navbar-links navbar-text">
    <Link to="/login">Login</Link>
    &nbsp;
    &nbsp;
    <Link to="/signup">Signup</Link>
    &nbsp;
    &nbsp;
    <Link to="/demo">Demo</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
    <div className="navbar-links navbar-text">
      <button className="logout" onClick={logout}>Log Out</button>
      <Link to={`/profile/${currentUser.id}`}>
        <span>My Profile</span>
      </Link>
    </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
