import React from 'react';

class NothingToSeeHere extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let text = this.props.text || 'Não encontramos nada para mostrar aqui :/';

    return (
      <div className="no-items">{text}</div>
    );
  }
}


NothingToSeeHere.propTypes = {
  text: React.PropTypes.string
};

module.exports = NothingToSeeHere;
