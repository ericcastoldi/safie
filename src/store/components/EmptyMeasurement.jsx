import React from 'react';

class EmptyMeasurement extends React.Component {

  constructor() {
    super();
  }

  render() {

    return <span className="tamanho">Medida não especificada <i className="fa fa-exclamation-triangle" aria-hidden="true"></i></span>;

  }
}


module.exports = EmptyMeasurement;
