import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      newSession: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    if (nextProps.formType === this.props.formType) {
      this.setState({ newSession: true });
    } else {
      this.setState({ newSession: false });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Create Account</Link>;
    } else {
      return <Link to="/login">Login</Link>;
    }
  }

    submitButtonText() {
     if (this.props.formType === 'login') {
       return "Log In";
     } else {
       return "Create Account";
        }
      }



  renderErrors() {
    if (this.state.newSession) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <h3>UniWatch</h3>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <br/>
            <input type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input" />
            <br/>
            <input type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input" />
            <br/>
            {this.renderErrors()}
            <input className="submitbutton"
              type="submit"
              value={this.props.formType === 'login' ? "Log In" : "Create Account"} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
