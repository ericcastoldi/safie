import React from 'react';

class DeliveryBar extends React.Component {

  render(){
    return (
      <div className="delivery-bar">
        <span>Entrega em todo o Brasil</span>
        <i className="fa fa-truck fa-flip-horizontal" aria-hidden="true"></i>
      </div>
    );
  }
}

module.exports = DeliveryBar;
