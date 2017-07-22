import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


class UniversityItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { follow: false };
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow(e) {
    e.preventDefault();
    debugger;
    this.props.createFollow(this.props.currentUser.id, this.props.university.id);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="university-item-box">
            <Link to={`/university/${this.props.university.id}`}>
              <span> { this.props.university.schoolName } </span>
            </Link>
            <input className="follow-button" type="checkbox" checked={this.state.follow} onChange={this.toggleFollow} />
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
