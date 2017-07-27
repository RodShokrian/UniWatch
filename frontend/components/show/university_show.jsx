import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NewsFeedContainer from '../news_feed/news_feed_container';
import ReactDOM from 'react-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class UniversityShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUniversity(this.props.location.pathname.slice(12)).then(
      () => (this.setState({ currentUniversity: this.props.currentUniversity}))
    );
  }

  componentDidUpdate() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const pos = new google.maps.LatLng(this.props.currentUniversity.locationLat,
                                       this.props.currentUniversity.locationLon);
    const options = {
      center: {lat: this.props.currentUniversity.locationLat,
               lng: this.props.currentUniversity.locationLon},
      zoom: 11
    };
    this.map = new google.maps.Map(map, options);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    const mapCenter = { lat: this.props.currentUniversity.locationLat,
                        lng: this.props.currentUniversity.locationLon};
    // ReactDOM.render(
      // <Map center={mapCenter} />,
      // document.getElementById('root')
    // );
  }

  render() {
    if (!this.props.currentUniversity) {
      return (<div id="show-map" ref="map"></div>);
    }
    const university = this.props.currentUniversity;
    const priceCalculatorUrl = "http://" + university.schoolPriceCalculatorUrl;
    const schoolUrl = "http://" + university.schoolSchoolUrl;
    const admissionRate = (Math.round(university.admissionsAdmissionRateOverall * 10000)/100).toString() + "%";
    const hbcuFlag = university.schoolMinorityServingHistoricallyBlack === 1 ? "Yes" : "No";
    const SATAverage = university.admissionsSatScoresAverageOverall;
    const ACTAverage = university.admissionsActScoresMidpointCumulative ?
    university.admissionsActScoresMidpointCumulative : "N/A";
    const ACTMath = university.admissionsActScoresMidpointMath ?
    university.admissionsActScoresMidpointMath : "N/A";
    const ACTEnglish = university.admissionsActScoresMidpointEnglish ?
    university.admissionsActScoresMidpointEnglish : "N/A";
    const ACTWriting = university.admissionsActScoresMidpointWriting ?
    university.admissionsActScoresMidpointWriting : "N/A";
    return (
      <div className="show-page-container">
        <div className="left-show-box">
          <div className="header-box">
            <img className="header-logo" src={university.imgUrl}></img>
            <div className="header">
              <h2 className="link-header">{ university.schoolName }</h2>
              <div className="location">
                {university.schoolCity}, {university.schoolState} {university.schoolZip}
              </div>
                <a href={schoolUrl} className="school-url">School Website</a>
            </div>
          </div>
          <div>
            <NewsFeedContainer university={university} />
          </div>
        </div>
        <div className="right-show-box">
          <div id="show-map" ref="map"></div>
          <div className="show-academics-box">Admissions
            <div className="show-academics">Admission Rate: {admissionRate}</div>
            <div className="show-academics">SAT Average (Reading & Math): {SATAverage}</div>
            <div className="show-academics">ACT Average: {ACTAverage}</div>
            <div className="show-academics">ACT Math: {ACTMath}</div>
            <div className="show-academics">ACT Reading: {ACTEnglish}</div>
            <div className="show-academics">ACT Writing: {ACTWriting}</div>
          </div>
          <div className="show-cost-box">Finances
            <div className="show-costs">In-State Tuition: ${university.costTuitionInState}</div>
            <div className="show-costs">Out-of-State Tuition: ${university.costTuitionOutOfState}</div>
            <div className="show-costs">Average Cost of Attendance: ${university.costAttendanceAcademicYear}</div>
            <div className="show-costs">Median Debt Load of Graduates: ${university.aidMedianDebtCompletersOverall}</div>
            <div className="show-costs">
              <a className="price-calculator" href={priceCalculatorUrl}>{university.schoolName} Price Calculator</a>
            </div>
          </div>
        </div>
      </div>
      );
  }


}

export default UniversityShow;
