import React from 'react';
import Menu from './Menu.jsx';
import QuickBag from './QuickBag.jsx';
import CurrentCustomer from './CurrentCustomer.jsx';
import DeliveryBar from './DeliveryBar.jsx';
import Loading from './Loading.jsx';
import Oops from './Oops.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DismissablePopup from './DismissablePopup.jsx';
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

        <DeliveryBar />

        <Menu />

        <div className="layout-content">
          <CurrentCustomer />
          {this.props.children}
        </div>

        <Loading active={this.props.loading} />


        <DismissablePopup
          active={this.props.errorPopupOpen}
          dismiss={() => { this.props.dismissErrorPopup(); }}>
          <Oops text={this.props.error} />
        </DismissablePopup>

        <QuickBag />

      </div>
    );
  }
}

Layout.propTypes = {
  error: React.PropTypes.string,
  loading: React.PropTypes.bool,
  errorPopupOpen: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
  fetchBag: React.PropTypes.func.isRequired,
  dismissErrorPopup: React.PropTypes.func.isRequired,
  fetchCurrentCustomer: React.PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
  return {
    error: state.bag.error,
    errorPopupOpen: state.bag.errorPopupOpen,
    loading: state.main.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBag: bag.fetchBag,
    dismissErrorPopup: bag.dismissErrorPopup,
    fetchCurrentCustomer: customer.fetchCurrentCustomer
  }, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Layout);
