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
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthModal from './modals/auth_modal';

const App = () => (
  <div>
    <header>
      <nav className="navbar navbar-fixed-top bg-faded">
        <Link to="/">
        <img src="http://res.cloudinary.com/dxucikdys/image/upload/v1500499095/University-symbol-white_fpqpty.png" alt="College symbol" height="38" width="50" />
        </Link>
        <a className="navbar-brand" href="/">UniWatch</a>
        <GreetingContainer />
        </nav>
        <Route path="/" exact component={IndexContainer} />
        <Route path="/university/:universityId" exact component={ShowContainer} />
        <Route path="/profile/:userId" exact component={ProfileContainer} />
    </header>
  </div>
);

export default App;
