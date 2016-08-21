var React = require('react');

var Header = React.createClass({
  render: function(){
    return (
      <div className="header-band ">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <div className="header-container">
                <h1>Safie</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
