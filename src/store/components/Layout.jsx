import React from 'react';
import Menu from './Menu.jsx';
import QuickBag from './QuickBag.jsx';
import CurrentCustomer from './CurrentCustomer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bag from './state/bag.js';
import customer from './state/customer.js';

class Layout extends React.Component {


  componentDidMount() {
    this.props.fetchBag();
    this.props.fetchCurrentCustomer();
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="layout-content">
          <CurrentCustomer />
          {this.props.children}
        </div>
        <QuickBag />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
  fetchBag: React.PropTypes.func.isRequired,
  fetchCurrentCustomer: React.PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBag: bag.fetchBag,
    fetchCurrentCustomer: customer.fetchCurrentCustomer
  }, dispatch);
};

module.exports = connect(null, mapDispatchToProps)(Layout);
