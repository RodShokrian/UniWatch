import React from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';
import AuthFormContainer from '../auth/auth_form_container';

const signedOutGreeting = () => (
  <div className="nav-box navbar-links navbar-text">
    &nbsp;
    <AuthModal formType="login"/>
    &nbsp;
    <AuthModal formType="signup"/>
    &nbsp;
    <Link className="demo-link" to="/demo">Demo</Link>
</div>
);

const signedInGreeting = (currentUser, logout) => (
  <div className="navbar-links navbar-text">
     <button className="navbutton" onClick={logout}>Log Out</button>
     <Link to={`/profile/${currentUser.id}`}>
       <span>My Profile</span>
     </Link>
   </div>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? signedInGreeting(currentUser, logout) : signedOutGreeting()
);

export default Greeting;
