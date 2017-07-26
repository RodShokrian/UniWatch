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
  }

  componentDidUpdate() {
    const mapCenter = { lat: this.props.currentUniversity.locationLat,
                        lng: this.props.currentUniversity.locationLon};

    ReactDOM.render(
      <Map center={mapCenter} />,
      document.getElementById('root')
    );
  }
  //
  // componentDidMount () {
  //   window.initMap = this.initMap;
  //   loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyB5SXTW-o-b5-nfkYUUQ5SQD_N4PVozrOc&callback=initMap');
  // }

  // initMap() {
  //       var uluru = {lat: -25.363, lng: 131.044};
  //       var map = new google.maps.Map(document.getElementById('map'), {
  //         zoom: 4,
  //         center: uluru
  //       });
  //       var marker = new google.maps.Marker({
  //         position: uluru,
  //         map: map
  //       });
  //     }


  render() {
    const university = this.props.currentUniversity;
    const priceCalculatorUrl = "http://" + university.schoolPriceCalculatorUrl;
    const schoolUrl = "http://" + university.schoolSchoolUrl;
    const admissionRate = (Math.round(university.admissionsAdmissionRateOverall * 10000)/100).toString() + "%";
    const hbcuFlag = university.schoolMinorityServingHistoricallyBlack === 1 ? "Yes" : "No";
    return (
      <div className="show-page-container">
        <div className="left-show-box">
          <div className="header-box">
            <img className="header-logo" src={university.imgUrl}></img>
            <div className="header">
              <h2 className="link-header">
                <Link to={`/university/${university.id}`}>
                  <span> { university.schoolName } </span>
                </Link>
              </h2>
              <div className="location">
                {university.schoolCity}, {university.schoolState} {university.schoolZip}
              </div>
                <a href={schoolUrl} className="school-url">School Website</a>
            </div>
          </div>
          <div className="news-feed-box">
            <NewsFeedContainer university={university} />
          </div>
        </div>
        <div className="right-show-box">
          <div id="show-map" ref="map">Wut</div>
          <div className="show-academics-box">Admissions
            <div className="show-academics">Admission Rate: {admissionRate}</div>
            <div className="show-academics">SAT Average (Reading & Math): {university.admissionsSatScoresAverageOverall}</div>
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
