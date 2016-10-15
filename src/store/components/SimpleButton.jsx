var React = require('react');

var SimpleButton = React.createClass({

  propTypes: {
    click: React.PropTypes.func,
    className: React.PropTypes.string,
    label: React.PropTypes.string.isRequired
  },


  render: function(){
    return (
      <button onClick={this.props.click} className={this.props.className}>
        {this.props.label}
      </button>
    );
  }
});

module.exports = SimpleButton;
