var React = require('react');

var Popup = React.createClass({
  propTypes: {
    active: React.PropTypes.bool.isRequired,
    dismiss: React.PropTypes.func,
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
          <div className="close-popup">
            <i onClick={this.props.dismiss} className="fa fa-close" aria-hidden="true"></i>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Popup;
