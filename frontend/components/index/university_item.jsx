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

  componentDidMount() {
    this.props.university.following ? this.setState({following : true}) :
                                      this.setState({following : false});
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
    let name;
    if (university.schoolName.length > 45) {
      name = university.schoolName.slice(0, 45) + "...";
    } else {
      name = university.schoolName;
    }
    if (this.props.currentUser) {
      return (
      <a href={`/#/university/${university.id}`} className="university-item-wrapper">
        <div className="university-item-box">
          <img className="university-seal" src={university.imgUrl} />
          <div className="title-location-box">
            <span id="index-name"> { name } </span>
            <div className="university-location">
              <span>{university.schoolCity}, {university.schoolState}</span>
            </div>
          </div>
          <div className="university-metrics-box">
            <span className="metrics">Tuition and Fees: ${university.costTuitionOutOfState}</span><br />
            <span className="metrics">Average SAT Scores (math & reading): {university.admissionsSatScoresAverageOverall}</span><br />
            <span className="metrics">Average ACT Scores (cumulative): {university.admissionsActScoresMidpointCumulative}</span>
          </div>
          <input className="follow-button" type="checkbox" checked={this.state.following} onChange={this.toggleFollow} />
        </div>
        </a>
      );
    }
    return (
      <a href={`/#/university/${university.id}`} className="university-item-wrapper">
        <div className="university-item-box">
          <img className="university-seal" src={university.imgUrl} />
          <div className="title-location-box">
            <Link to={`/university/${university.id}`}>
              <span id="index-name"> { name } </span>
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
      </a>
    );
  }
}

export default UniversityItem;
