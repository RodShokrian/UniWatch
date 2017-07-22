import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UniversityItem from './university_item';

class UniversityIndex extends React.Component {
  componentDidMount() {
    this.props.requestUniversities();
    if (this.props.currentUser) {
      this.props.requestFollows(this.props.currentUser.id);
    }
  }

  render() {
    if (Object.keys(this.props.universities).length === 0) {
      return (<div></div>)
    }
    const universityItems = Object.keys(this.props.universities).map(university => (
      <UniversityItem
        key={this.props.universities[university].id}
        university={this.props.universities[university]}
        createFollow={this.props.createFollow}
        currentUser={this.props.currentUser}
        follows={this.props.follows}
         />
      )
    );
    return (
      <section className="university-index">
          {universityItems}
      </section>
    )
  }


}

export default UniversityIndex;
