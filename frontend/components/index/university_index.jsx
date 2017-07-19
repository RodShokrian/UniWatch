import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UniversityItem from './university_item';

class UniversityIndex extends React.Component {
  componentDidMount() {
    this.props.requestUniversities();
  }

  render() {
    if (Object.keys(this.props.universities).length === 0) {
      return (<div></div>)
    }
    debugger;
    const universityItems = Object.keys(this.props.universities).map(university => (
      <UniversityItem key={this.props.universities[university].id} university={this.props.universities[university]} />
      )
    );
    return (
      <section className="university-index">
        <ul>
          {universityItems}
        </ul>
      </section>
    )
  }


}

export default UniversityIndex;
