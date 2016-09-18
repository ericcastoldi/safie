var React = require('react');
var connect = require('react-redux').connect;
var PolicyCard = require('./PolicyCard.jsx');
var CreditCards = require('./CreditCards.jsx');

var Footer = React.createClass({

  propTypes: {
    policies: React
      .PropTypes
      .arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        items: React
          .PropTypes
          .arrayOf(React.PropTypes.shape({title: React.PropTypes.string.isRequired, route: React.PropTypes.string}))
          .isRequired
      }))
      .isRequired
  },

  render: function () {
    return (
      <div className="footer-band">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <div className="politica">
                <PolicyCard policy={this.props.policies[0]}/>
              </div>
              <div className="politica">
                <PolicyCard policy={this.props.policies[1]}/>
              </div>
              <div className="politica">
                <PolicyCard policy={this.props.policies[2]}/>
                <CreditCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
    policies: state.footer.policies
  };
}

module.exports = connect(mapStateToProps)(Footer);
