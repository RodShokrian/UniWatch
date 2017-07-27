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
            <div className="academics">Admission Rate: {admissionRate}</div>
            <div className="academics">SAT Average (Reading & Math): {university.admissionsSatScoresAverageOverall}</div>
        </div>
        <div className="cost-box">Finances
          <div className="costs">
            <a id="price-calculator" href={priceCalculatorUrl}>{university.schoolName} Price Calculator</a>
          </div>
          <div className="costs">In-State Tuition: ${university.costTuitionInState}</div>
          <div className="costs">Out-of-State Tuition: ${university.costTuitionOutOfState}</div>
          <div className="costs">Average Cost of Attendance: ${university.costAttendanceAcademicYear}</div>
          <div className="costs">Median Debt Load of Graduates: ${university.aidMedianDebtCompletersOverall}</div>

        </div>
      </div>
    );
  }
}

export default FollowedItem;
