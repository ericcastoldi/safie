var React = require('react');

var Popup = React.createClass({
  propTypes: {
    active: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired
  },
  render: function () {
    let cssClasses = ['dimmer'];
    if(this.props.active) {
      cssClasses.push('active');
    }

    return (
      <div className={cssClasses.join(' ')}>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Popup;
