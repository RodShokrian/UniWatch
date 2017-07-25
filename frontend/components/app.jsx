import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import ProfileContainer from './profile/profile_container';
import IndexContainer from './index/index_container';
import ShowContainer from './show/show_container';
import AuthFormContainer from './auth/auth_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthModal from './modals/auth_modal';

const App = () => (
  <div>
    <header>
      <nav className="navbar navbar-fixed-top bg-faded">
        <div id="logo">
          <Link to="/">
            <img className="brand" src="http://res.cloudinary.com/dxucikdys/image/upload/v1500499095/University-symbol-white_fpqpty.png" alt="College symbol" height="38" width="50" />
            <h2 className="navbar-brand">UniWatch</h2>
          </Link>
        </div>
        <GreetingContainer />
        </nav>
    </header>
        <Route path="/" exact component={IndexContainer} />
        <Route path="/university/:universityId" exact component={ShowContainer} />
        <Route path="/profile/:userId" exact component={ProfileContainer} />
    <Switch>
      <AuthRoute path="/demo" exact component={AuthFormContainer} />
    </Switch>
  </div>
);

export default App;
