import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: '' };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
      this.setState({searchString: e.target.value});
  }

  render () {
    let libraries =
    Object.keys(this.props.uniData).map(id => (
      this.props.uniData[id]
    ));
    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      libraries = libraries.filter(function(l){
        return l.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
          <ul>
            { libraries.map(function(l){
              return (<li>{l.name} <a href={l.url}>{l.url}</a></li>);
            })}
          </ul>
      </div>
    );
  }
}

export default SearchBar;
