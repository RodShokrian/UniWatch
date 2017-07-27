import React from 'react';
import FollowedItem from './followed_item';

class UserProfile extends React.Component {


  componentDidMount() {
    this.props.requestUniversities(100, 0);
  }

  render() {
    const user = this.props.currentUser;
    const follows = Object.keys(this.props.universities).map(id => {
      if (this.props.universities[id].following) {
        return (<FollowedItem
          key={id}
          university={this.props.universities[id]} />);
      }
    });
    return (
      <div id="profile-container">
        <div className="followed-universities-container">
          <h4 id="follows-header">My Followed Universities</h4>
          <div className="followed-universities-box">
            {follows}
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
