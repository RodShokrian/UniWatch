import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UniversityItem from './university_item';
import ReactPaginate from 'react-paginate';

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
    if (this.props.currentUser) {
      this.props.requestFollows(this.props.currentUser.id);
    }
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
        follows={this.props.follows}
        deleteFollow={this.props.deleteFollow}
         />
      )
    );

    return (
      <section className="university-index">
          {universityItems}
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

      </section>
    );
  }
}
