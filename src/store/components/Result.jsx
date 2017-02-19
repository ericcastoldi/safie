import React from 'react';

class Result extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const resultClass = this.props.success ? 'sucesso' : 'falha';
    const classes = 'resultado ' + resultClass;

    return (
      <div className={classes}>
        {this.props.message}
      </div>
    );
  }
}


Result.propTypes = {
  success: React.PropTypes.bool,
  message: React.PropTypes.string
};


module.exports = Result;
