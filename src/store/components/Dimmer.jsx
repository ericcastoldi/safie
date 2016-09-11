var React = require('react');

var Dimmer = React.createClass({

  propTypes: {
    active: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired
  },

  render: function(){
    let cssClasses = ['dimmer'];
    if(this.props.active) {
      cssClasses.push('active');
    }

    return (
        <div className={cssClasses.join(' ')}>
          {this.props.children}
        </div>
    );
  }

});

module.exports = Dimmer;
