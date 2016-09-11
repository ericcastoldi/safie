var React = require('react');
var Footer = require('./Footer.jsx');

var SafieStore = React.createClass({

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render: function () {
    return (
      <div className="safie-store">
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = SafieStore;
