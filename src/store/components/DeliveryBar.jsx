import React from 'react';

class DeliveryBar extends React.Component {

  render(){
    return (
      <div className="delivery-bar">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <span>Entrega em todo o Brasil</span>
              <i className="fa fa-truck fa-flip-horizontal" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DeliveryBar;
