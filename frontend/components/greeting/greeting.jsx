import React from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';
import AuthFormContainer from '../auth/auth_form_container';

const signedOutGreeting = () => (
  <header className="navbar">
    <nav className="unraveled-logo">
      <Link to="/">

      </Link>
    </nav>

    <nav className="login-signup-buttons">
      &nbsp;
      <AuthModal formType="login"/>
      &nbsp;
      <AuthModal formType="signup"/>
      &nbsp;
      <button className="navbutton" onClick={AuthFormContainer} formType="demo"/>
    </nav>
  </header>
);

const signedInGreeting = (currentUser, logout) => (
	<hgroup className="navbar">
    <h2 className="header-name">Hi, {currentUser.email}!</h2>
    <button className="header-button" onClick={logout}>Sign Out</button>
	</hgroup>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? signedInGreeting(currentUser, logout) : signedOutGreeting()
);

export default Greeting;
