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
import AgreementAcceptanceCheck from './AgreementAcceptanceCheck.jsx';
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

        <DismissablePopup
          active={this.props.agreementAcceptancePopupOpen}
          dismiss={this.props.dismissAgreementAcceptancePopup}>
          <AgreementAcceptanceCheck
            accept={this.props.acceptAgreement} />
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
  fetchCurrentCustomer: React.PropTypes.func.isRequired,
  agreementAcceptancePopupOpen: React.PropTypes.bool,
  dismissAgreementAcceptancePopup: React.PropTypes.func.isRequired,
  acceptAgreement: React.PropTypes.func
};


const mapStateToProps = (state) => {
  return {
    error: state.bag.error,
    errorPopupOpen: state.bag.errorPopupOpen,
    agreementAcceptancePopupOpen: state.bag.agreementAcceptancePopupOpen,
    loading: state.main.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBag: bag.fetchBag,
    dismissErrorPopup: bag.dismissErrorPopup,
    fetchCurrentCustomer: customer.fetchCurrentCustomer,
    dismissAgreementAcceptancePopup: bag.dismissAgreementAcceptancePopup,
    acceptAgreement: bag.agreementAcceptance
  }, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Layout);
