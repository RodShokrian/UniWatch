import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


class UniversityItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { following: false };
    if (this.props.currentUser) {
      for (let idx in this.props.follows) {
        if (this.props.follows[idx].uniId === this.props.university.id) {
          this.state = {following: true};
        }
      }
    }
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow(e) {
    e.preventDefault();
    if (this.state.following) {
      let followIdx;
      for (let idx in this.props.follows) {
        if (this.props.follows[idx].uniId === this.props.university.id) {
          followIdx = idx;
        }
      }
      this.props.deleteFollow(this.props.currentUser.id, this.props.follows[followIdx].id).then(() => {
        this.setState({following: false});
      });


    } else {
      this.props.createFollow(this.props.currentUser.id, this.props.university.id).then(() => {
        this.setState({following: true});
      });
    }
  }

  render () {
    const university = this.props.university;
    if (this.props.currentUser) {
      return (
        <div className="university-item-box">
          <img className="university-seal" src="http://res.cloudinary.com/dxucikdys/image/upload/v1500499016/Science-University_yzgogm.ico" />
          <div className="title-location-box">
            <Link to={`/university/${this.props.university.id}`}>
              <span> { this.props.university.schoolName } </span>
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
        <img className="university-seal" src="http://res.cloudinary.com/dxucikdys/image/upload/v1500499016/Science-University_yzgogm.ico" />
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
