import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NewsFeedContainer from '../news_feed/news_feed_container';

class UniversityShow extends React.Component {

  render() {
    const university = this.props.currentUniversity;
    const priceCalculatorUrl = "http://" + university.schoolPriceCalculatorUrl;
    const admissionRate = (university.admissionsAdmissionRateOverall * 100).toString() + "%";
    const hbcuFlag = university.schoolMinorityServingHistoricallyBlack === 1 ? "Yes" : "No";
    return (
      <div className="show-box">
        <h1 className="university-show-header">{university.schoolName}</h1>
        <h2 className="link-header"><a href={university.schoolSchoolUrl}>Link</a></h2>
        <ul className="location-list">
          <li>{university.schoolCity}</li>
          <li>{university.schoolState}</li>
          <li>{university.schoolZip}</li>
        </ul>
        <div className="academics-box">
          <ul className="academics-list">
            <li>Admission Rate: {admissionRate}</li>
            <li>SAT Average (Reading & Math): {university.admissionsSatScoresAverageOverall}</li>
            <li>HBCU: {hbcuFlag}</li>
          </ul>
        </div>
        <ul className="cost-list">
          <li>In-State Tuition: ${university.costTuitionInState}</li>
          <li>Out-of-State Tuition: ${university.costTuitionOutOfState}</li>
          <li>Average Cost of Attendance: ${university.costAttendanceAcademicYear}</li>
          <li>Median Debt Load of Graduates: ${university.aidMedianDebtCompletersOverall}</li>
          <li>
            <a href={priceCalculatorUrl}>{university.schoolName} Price Calculator</a>
          </li>
        </ul>
        <div className="news-feed-box">
          <NewsFeedContainer />
        </div>
      </div>
    )
  }


}

export default UniversityShow;

// change
