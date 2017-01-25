import React from 'react';
import { connect } from 'react-redux';

class TotalPrice extends React.Component {

  render (){
    return (
      <div className="total-price">
        <h3>Total:</h3>
        {this.props.total}
      </div>
    );
  }

}
TotalPrice.propTypes = {
  total: React.PropTypes.string.isRequired
};


function mapStateToProps(state) {
  return {
    total: state.bag.subtotal
  };
}

module.exports = connect(mapStateToProps)(TotalPrice);
