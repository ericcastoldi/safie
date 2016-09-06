var React = require('react');
var Subscribe = require('./Subscribe.jsx');


var Landing = React.createClass({

  render: function () {

    return (
      <div>
        <div className="landing">
        </div>
        <Subscribe />
      </div>
    );
  }
});

module.exports = Landing;
