import React from 'react';
import FollowedItem from './followed_item';

class UserProfile extends React.Component {


  componentDidMount() {
    this.props.requestUniversities(100, 0);
    if (this.props.currentUser) {
      this.props.requestFollows(this.props.currentUser.id);
    }
  }

  render() {
    const user = this.props.currentUser;
    const follows = Object.keys(this.props.follows).map(follow => (
      <FollowedItem
        key={this.props.universities[this.props.follows[follow].uniId].id}
        university={this.props.universities[this.props.follows[follow].uniId]} />));
    return (
      <div id="profile-container">
        <h2 id="profile-name">{user.username}</h2> <br />
        <div className="followed-universities-container">
          <h4 id="follows-header">Followed Universities</h4>
          <div className="followed-universities-box">
            {follows}
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
