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
import AuthFormContainer from './auth/auth_form_container';
import Demo from './auth/demo';
import IndexContainer from './index/index_container';
import ShowContainer from './show/show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>UniWatch</h1>
      </Link>
      <GreetingContainer />
      <Route path="/" exact component={IndexContainer} />
      <Route path="/university/:universityId" exact component={ShowContainer} />
      <Route path="/profile/:userId" exact component={ProfileContainer} />
    </header>
    <Switch>
      <AuthRoute path="/login" exact component={AuthFormContainer} />
      <AuthRoute path="/signup" exact component={AuthFormContainer} />
      <AuthRoute path="/demo" exact component={AuthFormContainer} />
    </Switch>
  </div>
);

export default App;
