import React from 'react';

class BagSummaryBox extends React.Component {

    constructor() {
      super();
    }

    render() {
      return (
        <div className="inside-box">
          <div className="row">
            <div className="eight columns">
              {this.props.leftContent}
            </div>
            <div className="four columns">
              {this.props.rightContent}
            </div>
          </div>
        </div>
      );
    }
}

BagSummaryBox.propTypes = {
  leftContent: React.PropTypes.any,
  rightContent: React.PropTypes.any
};

module.exports = BagSummaryBox;
