import React from 'react';

class Popup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

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
}

Popup.propTypes = {
  active: React.PropTypes.bool,
  children: React.PropTypes.node
};


module.exports = Popup;
