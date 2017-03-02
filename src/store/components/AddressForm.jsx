import React from 'react';
import DarkButton from './DarkButton.jsx';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
    this.searchAddress = this.searchAddress.bind(this);
    this.state = {
      street: '',
      city: '',
      state: '',
      district: '',
      code: '',
      obs: '',
      number: ''
    };
  }

  searchAddress() {
    if (this.state && this.state.code) {
      const cep = this.state.code;
      this.props.searchAddress(cep);
    }
  }

  componentWillReceiveProps(nextProps) {

    var addr = nextProps.address;
    if (addr) {
      this.setState(addr);
    }
  }

  render() {

    var curr = this.state || {};
    const searching = this.props.searching;

    return (
      <div className="form-medidas form-enderecos">
        <h3>Endereço</h3>

        <div className="row">
          <div className="twelve columns">

            <label htmlFor='code'>CEP</label>
            <input
              id='code'
              type="text"
              value={curr.code}
              onChange={event => this.setState({ code: event.target.value })}
              onBlur={this.searchAddress}
            />

          </div>
        </div>

        <div className="row">

          <div className="six columns">

            <div className="field-container">
              <label htmlFor='street'>Rua</label>
              <input
                id='street'
                type="text"
                value={curr.street}
                disabled={searching}
                onChange={event => this.setState({ street: event.target.value })}
              />
            </div>

          </div>

          <div className="six columns">
            <div className="field-container">
              <label htmlFor='number'>Número</label>
              <input
                id='number'
                type="text"
                value={curr.number}
                disabled={searching}
                onChange={event => this.setState({ number: event.target.value })}
              />
            </div>
          </div>

        </div>

        <div className="row">

          <div className="six columns">

            <div className="field-container">
              <label htmlFor='obs'>Complemento</label>
              <input
                id='obs'
                type="text"
                value={curr.obs}
                disabled={searching}
                onChange={event => this.setState({ obs: event.target.value })}
              />
            </div>

          </div>

          <div className="six columns">
            <div className="field-container">
              <label htmlFor='district'>Bairro</label>
              <input
                id='district'
                type="text"
                value={curr.district}
                disabled={searching}
                onChange={event => this.setState({ district: event.target.value })}
              />
            </div>

          </div>

        </div>
        <div className="row">

          <div className="six columns">
            <div className="field-container">
              <label htmlFor='city'>Cidade</label>
              <input
                id='city'
                type="text"
                value={curr.city}
                disabled={searching}
                onChange={event => this.setState({ city: event.target.value })}
              />
            </div>
          </div>

          <div className="six columns">
            <div className="field-container">
              <label htmlFor='state'>Estado</label>
              <input
                id='state'
                type="text"
                value={curr.state}
                disabled={searching}
                onChange={event => this.setState({ state: event.target.value })}
              />
            </div>
          </div>

        </div>

        <DarkButton click={this.save} label="Salvar Endereço" />

      </div>
    );
  }

  save() {
    if (!this.props.savingAddress) {
      this.props.saveAddress(this.state);
    }
  }
}

AddressForm.propTypes = {
  address: React.PropTypes.object,
  searchAddress: React.PropTypes.func,
  saveAddress: React.PropTypes.func,
  savingAddress: React.PropTypes.bool,
  searching: React.PropTypes.bool
};

module.exports = AddressForm;
