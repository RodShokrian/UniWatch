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
    <Link className="navbutton" to="/demo">Demo Login</Link>
</div>
);

const signedInGreeting = (currentUser, logout) => (
  <div className="navbar-links navbar-text">
     <button className="navbutton" onClick={logout}>Log Out</button>
      <a className="navbutton follows" href={`/#/profile/${currentUser.id}`}>
       My Followed Universities
     </a>
   </div>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? signedInGreeting(currentUser, logout) : signedOutGreeting()
);

export default Greeting;
