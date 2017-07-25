import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


class UniversityItem extends React.Component {
  constructor(props) {
    super(props);
    this.props.university.following ? this.state = { following : true } :
                                      this.state = { following : false };
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow(e) {
    e.preventDefault();
    const university = this.props.university;
    const that = this;
    if (this.state.following) {
      this.props.deleteFollow(this.props.currentUser.id, university.id).then(() => {
        that.setState({ following: false});
      });
    } else {
      this.props.createFollow(this.props.currentUser.id, university.id).then(() => {
        that.setState({ following: true });
      });
    }
  }

  render () {
    const university = this.props.university;
    if (this.props.currentUser) {
      return (
        <div className="university-item-box">
          <img className="university-seal" src={university.imgUrl} />
          <div className="title-location-box">
            <Link to={`/university/${this.props.university.id}`}>
              <span id="index-name"> { this.props.university.schoolName } </span>
            </Link>
            <div className="university-location">
              <span>{university.schoolCity}, {university.schoolState}</span>
            </div>
          </div>
          <div className="university-metrics-box">
            <span className="metrics">Tuition and Fees: ${university.costTuitionOutOfState}</span><br />
            <span className="metrics">Average SAT Scores (math & reading): {university.admissionsSatScoresAverageOverall}</span>
          </div>
          <input className="follow-button" type="checkbox" checked={this.state.following} onChange={this.toggleFollow} />
        </div>
      );
    }
    return (
      <div className="university-item-box">
        <img className="university-seal" src={university.imgUrl} />
        <div className="title-location-box">
          <Link to={`/university/${this.props.university.id}`}>
            <span> { this.props.university.schoolName } </span>
          </Link>
          <div className="university-location">
            <span>{university.schoolCity}, {university.schoolState}</span>
          </div>
        </div>
        <div className="university-metrics-box">
          <span className="metrics">Tuition and Fees: ${university.costTuitionOutOfState}</span>
          <br />
          <span className="metrics">Average SAT Scores (math & reading): {university.admissionsSatScoresAverageOverall}</span>
          <br />
          <span className="metrics">Admission Rate: {Math.round(university.admissionsAdmissionRateOverall * 10000) / 100}%</span>
        </div>
      </div>
    );
  }
}

export default UniversityItem;
