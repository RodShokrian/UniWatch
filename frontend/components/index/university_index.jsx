import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UniversityItem from './university_item';
import ReactPaginate from 'react-paginate';
import SearchBar from './search_bar';

export class UniversityIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      perPage: 10,
      offset: 0
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.props.requestUniversities(this.state.perPage, this.state.offset);
    this.props.requestUniData();
  }

  handlePageClick (data) {
    let selected = data.selected;
    let newOffset = Math.ceil(selected * this.state.perPage);
    console.log(newOffset);
    console.log(selected);
    this.setState({offset: newOffset}, () => {
      this.props.requestUniversities(this.state.perPage, this.state.offset);
    });
  }

  render() {
    if (Object.keys(this.props.universities).length === 0) {
      return (<div></div>);
    }

    const universityItems =
    Object.keys(this.props.universities).map(university => (
      <UniversityItem
        key={this.props.universities[university].id}
        university={this.props.universities[university]}
        createFollow={this.props.createFollow}
        currentUser={this.props.currentUser}
        deleteFollow={this.props.deleteFollow}
         />
      )
    );

    const uniArray =
    Object.keys(this.props.uniData).map(id => (
      this.props.uniData[id]
    ));

    console.log(uniArray);
    return (
      <div id="index-container">
        <section className="university-index">
          <SearchBar uniData={this.props.uniData}
                     universities={this.props.universities}
                     createFollow={this.props.createFollow}
                     currentUser={this.props.currentUser}
                     deleteFollow={this.props.deleteFollow} />
        </section>
      </div>
    );
  }
}
