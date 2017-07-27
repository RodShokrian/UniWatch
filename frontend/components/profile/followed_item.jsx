import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


class FollowedItem extends React.Component {

  render() {
    const university = this.props.university;
    const priceCalculatorUrl = university.schoolPriceCalculatorUrl;
    const admissionRate = (Math.round(university.admissionsAdmissionRateOverall * 10000)/100).toString() + "%";
    const hbcuFlag = university.schoolMinorityServingHistoricallyBlack === 1 ? "Yes" : "No";
    const ACTAverage = university.admissionsActScoresMidpointCumulative ?
    university.admissionsActScoresMidpointCumulative : "N/A";
    const ACTMath = university.admissionsActScoresMidpointMath ?
    university.admissionsActScoresMidpointMath : "N/A";
    const ACTEnglish = university.admissionsActScoresMidpointEnglish ?
    university.admissionsActScoresMidpointEnglish : "N/A";
    const ACTWriting = university.admissionsActScoresMidpointWriting ?
    university.admissionsActScoresMidpointWriting : "N/A";

    return (
      <div className="item-box">
        <div id="header">
          <div className="profile-header">
            <Link to={`/university/${university.id}`}>
              <span id="link-header"> { university.schoolName } </span>
            </Link>
          </div>
          <div className="profile-location">
            {university.schoolCity}, {university.schoolState} {university.schoolZip}
          </div>
        </div>
        <div className="academics-box">Admissions
            <div className="academics">
              <span className="profile-field">Admission Rate:</span>
              <span className="profile-data">{admissionRate}</span>
            </div>
            <div className="academics">
              <span className="profile-field">SAT Average (Reading & Math):</span>
              <span className="profile-data">{university.admissionsSatScoresAverageOverall}</span>
             </div>
            <div className="academics">
              <span className="profile-field">ACT Average: </span>
              <span className="profile-data">{ACTAverage}</span>
            </div>
            <div className="academics">
              <span className="profile-field">ACT Math: </span>
              <span className="profile-data">{ACTMath}</span>
            </div>
            <div className="academics">
              <span className="profile-field">ACT Reading: </span>
              <span className="profile-data">{ACTEnglish}</span>
            </div>
            <div className="academics">
              <span className="profile-field">ACT Writing: </span>
              <span className="profile-data">{ACTWriting}</span>
            </div>
        </div>
        <div className="cost-box">Finances
          <div className="costs">
            <a id="price-calculator" href={priceCalculatorUrl}>{university.schoolName} Price Calculator</a>
          </div>
          <div className="costs">
            <span className="profile-field">In-State Tuition: </span>
            <span className="profile-data">${university.costTuitionInState}</span>
          </div>
          <div className="costs">
            <span className="profile-field">Out-of-State Tuition: </span>
            <span className="profile-data">${university.costTuitionOutOfState}</span>
          </div>
          <div className="costs">
            <span className="profile-field">Average Cost of Attendance: </span>
            <span className="profile-data">${university.costAttendanceAcademicYear}</span>
          </div>
          <div className="costs">
            <span className="profile-field">Median Debt Load of Graduates: </span>
            <span className="profile-data">${university.aidMedianDebtCompletersOverall}</span>
          </div>

        </div>
      </div>
    );
  }
}

export default FollowedItem;
