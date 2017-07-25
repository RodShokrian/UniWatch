import React, { Component } from 'react';
import Infinite from 'react-infinite';
import UniversityItem from './university_item';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: '',
                    perPage: 10,
                    offset: 0 };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
      this.setState({searchString: e.target.value});
  }

  render () {
    let libraries =
    Object.keys(this.props.universities).map(id => (
      this.props.universities[id]
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
      <div>
        <div className="wrap">
          <div className="search">
            <input type="text"
              value={this.state.searchString} onChange={this.handleChange} placeholder="Search" className="searchTerm" />
            <button type="submit" className="searchButton" disabled>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div> <br />
        <ul className="scroll-container">
            <Infinite containerHeight={500} elementHeight={50}
              infiniteLoadBeginEdgeOffset={250}
              useWindowAsScrollContainer>
              {uniItems}
            </Infinite>
          </ul>
      </div>
    );
  }
}

export default SearchBar;
