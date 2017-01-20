import React from 'react';

class MyAddresses extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className='my-address'>
        <div className='row'>
          <div className='one columns'>
            <input type='checkbox'/>
          </div>
          <div className='eleven columns'>
            <div className='address'>
              <p>Nome da cliente</p>
              <p>Rua nome da rua,numero</p>
              <p>Bairro</p>
              <p>Cidade</p>
              <p>22222-222</p>
              <p>Brasil</p>
              <i className="fa fa-times-circle-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='one columns'>
            <input type='checkbox'/>
          </div>
          <div className='eleven columns'>
            <div className='address'>
              <p>Nome da cliente</p>
              <p>Rua nome da rua,numero</p>
              <p>Bairro</p>
              <p>Cidade</p>
              <p>22222-222</p>
              <p>Brasil</p>
              <i className="fa fa-times-circle-o" aria-hidden="true"></i>
            </div>
            <div className='new-address'>
              <button className='new-address-button'><i className="fa fa-plus-square-o" aria-hidden="true"></i> Adicionar Novo endereco</button>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

module.exports = MyAddresses;
