import React from 'react';
import Menu from './Menu.jsx';
import QuickBag from './QuickBag.jsx';
import CurrentCustomer from './CurrentCustomer.jsx';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <CurrentCustomer />
        <div className="layout-content">
          {this.props.children}
        </div>
        <QuickBag />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired
};

module.exports = Layout;
