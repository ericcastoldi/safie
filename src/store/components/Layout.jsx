import React from 'react';
import Menu from './Menu.jsx';
import QuickBag from './QuickBag.jsx';
import DeliveryBar from './DeliveryBar.jsx';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="layout-content">
          {this.props.children}
        </div>
        <QuickBag />
        <DeliveryBar />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired
};

module.exports = Layout;
