import React from 'react';
import { login } from '../../actions/session_actions';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Guest',
      password: 'guest123',
    };
  }

  componentDidMount() {
    debugger;
    login(this.state);
  }

  render () {
    return (<div></div>)
  }
}

export default Demo;
