import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';


class FollowedItem extends React.Component {

  render() {
    const university = this.props.university;
    const priceCalculatorUrl = "http://" + university.schoolPriceCalculatorUrl;
    const admissionRate = (Math.round(university.admissionsAdmissionRateOverall * 10000)/100).toString() + "%";
    const hbcuFlag = university.schoolMinorityServingHistoricallyBlack === 1 ? "Yes" : "No";
    return (
      <div className="item-box">
        <div id="header">
          <h2 className="link-header">
            <Link to={`/university/${university.id}`}>
              <span> { this.props.university.schoolName } </span>
            </Link>
          </h2>
          <div className="location">
            {university.schoolCity}, {university.schoolState} {university.schoolZip}
          </div>
        </div>
        <div className="academics-box">Admissions
            <div className="academics">Admission Rate: {admissionRate}</div>
            <div className="academics">SAT Average (Reading & Math): {university.admissionsSatScoresAverageOverall}</div>
        </div>
        <div className="cost-box">Finances
          <div className="costs">In-State Tuition: ${university.costTuitionInState}</div>
          <div className="costs">Out-of-State Tuition: ${university.costTuitionOutOfState}</div>
          <div className="costs">Average Cost of Attendance: ${university.costAttendanceAcademicYear}</div>
          <div className="costs">Median Debt Load of Graduates: ${university.aidMedianDebtCompletersOverall}</div>
          <div className="costs">
            <a href={priceCalculatorUrl}>{university.schoolName} Price Calculator</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowedItem;
