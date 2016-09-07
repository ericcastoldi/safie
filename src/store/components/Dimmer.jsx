var React = require('react');

var Dimmer = React.createClass({

  propTypes: {
    active: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired
  },

  componentDidMount: function() {
    document.body.classList.toggle('popup-open', this.props.active);
  },

  componentWillReceiveProps: function(nextProps) {
    document.body.classList.toggle('popup-open', nextProps.active);
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
