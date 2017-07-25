import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NewsFeedContainer from '../news_feed/news_feed_container';

class UniversityShow extends React.Component {


  render() {
    const university = this.props.currentUniversity;
    const priceCalculatorUrl = "http://" + university.schoolPriceCalculatorUrl;
    const admissionRate = (Math.round(university.admissionsAdmissionRateOverall * 10000)/100).toString() + "%";
    const hbcuFlag = university.schoolMinorityServingHistoricallyBlack === 1 ? "Yes" : "No";
    return (
      <div className="show-page-container">
      <div className="show-box">
        <div id="header">
          <h2 className="link-header">
            <Link to={`/university/${university.id}`}>
              <span> { university.schoolName } </span>
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
      <div className="news-feed-box">
        <NewsFeedContainer university={university} />
      </div>
      </div>
    );
  }


}

export default UniversityShow;

// change
