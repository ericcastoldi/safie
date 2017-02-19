import React from 'react';

class Oops extends React.Component {

  constructor() {
    super();
  }

  render() {

    const title = this.props.title ? this.props.title : 'Oops!';

    return (
      <div>
        <h2>{title}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}


Oops.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string
};

module.exports = Oops;
