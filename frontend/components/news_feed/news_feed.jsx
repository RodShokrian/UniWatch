import React from 'react';

class newsFeed extends React.Component {
  componenetDidMount() {
    this.props.requestNews();
  }

  render () {
    debugger;
    return (
      <div></div>
    )
  }
}

export default newsFeed;
