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
    const priceCalculatorUrl = university.schoolPriceCalculatorUrl.slice(0, 4) === "http" ?
    university.schoolPriceCalculatorUrl : "https://" + university.schoolPriceCalculatorUrl; 
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
              <span className="location">
                {university.schoolCity}, {university.schoolState} {university.schoolZip}
              </span><br />
                <a href={schoolUrl} className="school-url">School Website</a>
            </div>
          </div>
          <div>
            <NewsFeedContainer university={university} />
          </div>
        </div>
        <div className="right-show-box">
          <div id="show-map" ref="map"></div>
          <div className="show-metrics-headline">University Data</div>
          <div className="show-academics-box">Admissions
            <div className="show-academics">
              <span className="show-field">Admission Rate:</span>
              <span className="show-data">{admissionRate}</span>
            </div>
            <div className="show-academics">
              <span className="show-field">SAT Average (Reading & Math):</span>
              <span className="show-data">{SATAverage}</span>
            </div>
            <div className="show-academics">
              <span className="show-field">ACT Average:</span>
              <span className="show-data">{ACTAverage}</span>
            </div>
            <div className="show-academics">
              <span className="show-field">ACT Math:</span>
              <span className="show-data">{ACTMath}</span>
            </div>
            <div className="show-academics">
              <span className="show-field">ACT Reading:</span>
              <span className="show-data">{ACTEnglish}</span>
            </div>
            <div className="show-academics">
              <span className="show-field">ACT Writing:</span>
              <span className="show-data">{ACTWriting}</span>
            </div>
          </div>
          <div className="show-cost-box">Finances<br />
            <a className="price-calculator" href={priceCalculatorUrl}>Price Calculator</a>
            <div className="show-costs">
              <span className="show-field">In-State Tuition:</span>
              <span className="show-data">${university.costTuitionInState}</span>
            </div>
            <div className="show-costs">
              <span className="show-field">Out-of-State Tuition:</span>
              <span className="show-data">${university.costTuitionOutOfState}</span>
            </div>
            <div className="show-costs">
              <span className="show-field">Average Cost of Attendance:</span>
              <span className="show-data">${university.costAttendanceAcademicYear}</span>
            </div>
            <div className="show-costs">
              <span className="show-field">Median Debt Load of Graduates:</span>
              <span className="show-data">${university.aidMedianDebtCompletersOverall}</span>
            </div>
          </div>
        </div>
      </div>
      );
  }


}

export default UniversityShow;
