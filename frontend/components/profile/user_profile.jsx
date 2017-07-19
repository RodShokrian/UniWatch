import React from 'react';

class UserProfile extends React.Component {

  render() {
    debugger;
    return (
      <div>
        <ul className="user-details">
          <li>Username: {this.props.currentUser.username}</li>
          <li>Email: {this.props.currentUser.email}</li>
        </ul>
      </div>
    )
  }
}

export default UserProfile;
