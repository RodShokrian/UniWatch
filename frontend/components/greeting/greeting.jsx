import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    ,&nbsp;
    <Link to="/signup">Sign up</Link>
    &nbsp;or&nbsp;
    <Link to="/demo">Try the Demo</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="nav">
    <h2 className="welcome-header">Welcome, {currentUser.username}!</h2>
    <button className="logout" onClick={logout}>Log Out</button>
    <Link to={`/profile/${currentUser.id}`}>
      <span>Profile</span>
    </Link>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
