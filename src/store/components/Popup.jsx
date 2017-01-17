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


//
//
// var Popup = React.createClass({
//   propTypes: {
//     active: React.PropTypes.bool.isRequired,
//     dismiss: React.PropTypes.func,
//     children: React.PropTypes.node.isRequired
//   },
//
//   render: function () {
//
//     let cssClasses = ['dimmer'];
//     if(this.props.active) {
//       cssClasses.push('active');
//     }
//
//     return (
//       <div className={cssClasses.join(' ')}>
//         <div className="content">
//           <div className="close-popup">
//             <i onClick={this.props.dismiss} className="fa fa-close" aria-hidden="true"></i>
//           </div>
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// });
