import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


class UniversityItem extends React.Component {
  constructor(props) {
    super(props);
    for (let idx in this.props.follows) {
      if (this.props.follows[idx].uniId === this.props.university.id) {
        this.state = { following: true };
      } else {
        this.state = { following: false};
      }
    }
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow(e) {
    e.preventDefault();
    const follows = this.props.follows;
    const university = this.props.university;
    let toggledFollow = false;
    for (let idx in this.props.follows) {
      if (follows[idx].uniId === university.id) {
        debugger;
        toggledFollow = true;
        this.setState({ following: false });
        return this.props.deleteFollow(follows[idx].followerId, follows[idx].id);
      }
    }
    if (toggledFollow) {
      this.props.createFollow(this.props.currentUser.id, this.props.university.id);
      this.setState({ following: true });
    }
    toggledFollow = false;
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="university-item-box">
            <Link to={`/university/${this.props.university.id}`}>
              <span> { this.props.university.schoolName } </span>
            </Link>
            <input className="follow-button" type="checkbox" checked={this.state.following} onChange={this.toggleFollow} />
        </div>
      );
    }
    return (
      <div className="university-item-box">
          <Link to={`/university/${this.props.university.id}`}>
            <span> { this.props.university.schoolName } </span>
          </Link>
      </div>
    );
  }
}

export default UniversityItem;
