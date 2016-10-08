var React = require('react');
var SimpleButton = require('./SimpleButton.jsx');

var MediumDarkButton = React.createClass({

  propTypes: {
    click: React.PropTypes.func,
    label: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      <SimpleButton
        className="medium-dark-button"
        click={this.props.click}
        label={this.props.label} />
    );
  }});

module.exports = MediumDarkButton;
