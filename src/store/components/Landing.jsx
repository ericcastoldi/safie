import React from 'react';
import Menu from './Menu.jsx';
import Logo from './Logo.jsx';
import UnderstandButton from './UnderstandButton.jsx';
import Subscribe from './Subscribe.jsx';
import AmazingSale from './AmazingSale.jsx';
import DismissablePopup from './DismissablePopup.jsx';
import Footer from './Footer.jsx';
import home from './state/home.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Landing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="safie-store">
        <div className="landing">
          <Menu />
          <Logo />
          <UnderstandButton />
        </div>

        <Subscribe />

        <DismissablePopup
          active={this.props.subscribePopupOn}
          dismiss={() => { this.props.dismiss(); }}>
          <AmazingSale />
        </DismissablePopup>

        <Footer />
      </div>
    );
  }
}

Landing.propTypes = {
  subscribePopupOn: React.PropTypes.bool.isRequired,
  dismiss: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    subscribePopupOn: state.home.subscribePopupOn
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dismiss: home.dismissSubscribePopup
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Landing);
