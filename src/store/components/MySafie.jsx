import React from 'react';
import MySafieBox from './MySafieBox.jsx';
import MyMeasurements from './MyMeasurements.jsx';
import MyOrders from './MyOrders.jsx';
import MyAddresses from './MyAddresses.jsx';
import MyBag from './MyBag.jsx';
import mySafie from './state/mySafie.js';

class MySafie extends React.Component {

  constructor(props){
    super(props);
  }


  componentDidMount() {
    this.props.fetchCurrentCustomer();
  }


  render() {

    if(!this.props.customer || !this.props.customer.id){
      return null;
    }


    return (
      <div className="my-safie">
        <div className="container">
          <h2>My Safie</h2>
          <hr />
          <p className="boas-vindas">Olá, {this.props.customer.name}</p>

          <MySafieBox title="Minhas Medidas"
            opened={this.props.measurementsOpened}
            toggle={this.props.toggleMeasurementsBox}>
            <MyMeasurements />
          </MySafieBox>

          <MySafieBox title="Meus Pedidos"
            opened={this.props.ordersOpened}
            toggle={this.props.toggleOrdersBox}>
            <MyOrders />
          </MySafieBox>

          <MySafieBox title="Meus Endereços"
            opened={this.props.addressesOpened}
            toggle={this.props.toggleAddressesBox}>
            <MyAddresses />
          </MySafieBox>

          <MySafieBox title="Minha Sacola"
            opened={this.props.bagOpened}
            toggle={this.props.toggleBagBox}>
            <MyBag />
          </MySafieBox>

        </div>
      </div>
    );
  }
}

MySafie.propTypes = mySafie.shape;

module.exports = mySafie.connect(MySafie);
