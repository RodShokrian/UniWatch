import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UniversityItem from './university_item';
import SearchBar from './search_bar';
import Infinite from 'react-infinite';

export class UniversityIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      perPage: 20,
      offset: 0
    };
    this.infiniteLoad = this.infiniteLoad.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.requestUniversities(this.state.perPage, this.state.offset);
    this.props.requestUniData();
  }

  infiniteLoad () {
    let newPerPage = this.state.perPage + 20;
    this.setState({perPage: newPerPage}, () => {
      this.props.requestUniversities(this.state.perPage, this.state.offset);
    });
  }

  handleChange(e) {
      this.setState({searchString: e.target.value});
  }

  render() {
    if (Object.keys(this.props.universities).length === 0) {
      return (<div></div>);
    }

    let libraries =
    Object.keys(this.props.uniData).map(id => (
      this.props.uniData[id]
    ));

    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      libraries = libraries.filter(function(l){
        return l.schoolName.toLowerCase().match( searchString );
      });
    }

    let uniItems = libraries.map( university => (
      <UniversityItem
        key={university.id}
        university={university}
        createFollow={this.props.createFollow}
        currentUser={this.props.currentUser}
        deleteFollow={this.props.deleteFollow}
         />
    ));

    return (
      <div id="index-container">
        <section className="university-index">
          <div className="wrap">
            <div className="search">
              <input type="text"
                value={this.state.searchString}
                onChange={this.handleChange}
                placeholder="Search"
                className="searchTerm" />
              <button type="submit" className="searchButton" disabled>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div> <br />
          <ul className="scroll-container">
              <Infinite containerHeight={500} elementHeight={50}
                useWindowAsScrollContainer>
                {uniItems}
              </Infinite>
            </ul>
        </section>
      </div>
    );
  }
}
