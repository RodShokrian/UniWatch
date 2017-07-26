import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UniversityItem from './university_item';
import SearchBar from './search_bar';
import ReactPaginate from 'react-paginate';

export class UniversityIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      data: [],
      perPage: 10,
      offset: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.props.requestUniversities(this.state.perPage, this.state.offset);
    this.props.requestUniData();
  }

  handleChange(e) {
      this.setState({searchString: e.target.value});
  }

  handlePageClick (data) {
    let selected = data.selected;
    let newOffset = Math.ceil(selected * this.state.perPage);
    this.setState({offset: newOffset}, () => {
      this.props.requestUniversities(this.state.perPage, this.state.offset);
    });
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
    let uniItems;
    if ((searchString.length > 0) === false) {
      uniItems =
      libraries.slice(this.state.offset, this.state.perPage + this.state.offset).map(university => (
        <UniversityItem
          key={university.id}
          university={university}
          createFollow={this.props.createFollow}
          currentUser={this.props.currentUser}
          deleteFollow={this.props.deleteFollow}
           />
      ));
    } else {
      uniItems = libraries.map(university => (
        <UniversityItem
          key={university.id}
          university={university}
          createFollow={this.props.createFollow}
          currentUser={this.props.currentUser}
          deleteFollow={this.props.deleteFollow}
           />
       ));
    }

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
                <i className="fa fa-search search-icon"></i>
              </button>
            </div>
          </div> <br />
          <ul className="scroll-container">
            {uniItems}
            <ReactPaginate previousLabel={"<"}
                 nextLabel={">"}
                 breakLabel={<a href="">...</a>}
                 breakClassName={"break-me"}
                 pageCount={10}
                 marginPagesDisplayed={2}
                 pageRangeDisplayed={10}
                 onPageChange={this.handlePageClick}
                 containerClassName={"pagination"}
                 subContainerClassName={"pages pagination"}
                 activeClassName={"active"}
                 pageClassName={"page-link"}
                 previousClassName={"previous-link"}
                 nextClassName={"next-link"}
                 activeClassName={"active-page"} />
            </ul>
        </section>
      </div>
    );
  }
}
