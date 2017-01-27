import React from 'react';
import DarkButton from './DarkButton.jsx';

class AddressForm extends React.Component {
  constructor(props){
    super(props);

    this.save = this.save.bind(this);

  }

  render() {
    return (
      <div className="form-medidas form-enderecos">
        <h3>Endereço</h3>

        <div className="row">
          <label htmlFor='code'>CEP</label>
          <input
            id='code'
            type="text"
            onChange={event => this.setState({code: event.target.value})}
          />
        </div>

        <div className="row">

          <div className="field-container">
            <label htmlFor='street'>Rua</label>
            <input
              id='street'
              type="text"
              onChange={event => this.setState({street: event.target.value})}
            />
          </div>

          <div className="field-container">
            <label htmlFor='number'>Número</label>
            <input
              id='number'
              type="text"
              onChange={event => this.setState({number: event.target.value})}
            />
          </div>
        </div>

        <div className="row">

          <div className="field-container">
            <label htmlFor='obs'>Complemento</label>
            <input
              id='obs'
              type="text"
              onChange={event => this.setState({obs: event.target.value})}
            />
          </div>

          <div className="field-container">
            <label htmlFor='district'>Bairro</label>
            <input
              id='district'
              type="text"
              onChange={event => this.setState({district: event.target.value})}
            />
          </div>
        </div>

        <div className="row">

          <div className="field-container">
            <label htmlFor='state'>Estado</label>
            <input
              id='state'
              type="text"
              onChange={event => this.setState({state: event.target.value})}
            />
          </div>

          <div className="field-container">
            <label htmlFor='city'>Cidade</label>
            <input
              id='city'
              type="text"
              onChange={event => this.setState({city: event.target.value})}
            />
          </div>
        </div>

        <DarkButton click={() => this.save()} label="Salvar Endereço" />
      </div>
    );
  }

  save(){
    if(!this.props.savingAddress){
      this.props.saveAddress(this.state);
    }
  }
}

AddressForm.propTypes = {
  saveAddress: React.PropTypes.func,
  savingAddress: React.PropTypes.bool
};

module.exports = AddressForm;
