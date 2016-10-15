var React = require('react');
var SimpleButton = require('./SimpleButton.jsx');

var DarkButton = React.createClass({
  propTypes: {
    click: React.PropTypes.func,
    label: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      <SimpleButton
        className="dark-button"
        click={this.props.click}
        label={this.props.label} />
    );
  }
});

module.exports = DarkButton;
