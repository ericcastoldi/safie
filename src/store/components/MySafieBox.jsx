import React from 'react';

class MySafieBox extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const defaultTitleStyle = 'titulo-mysafie';
    const openedTitleStyle = 'aberto titulo-mysafie';

    const defaultBoxStyle = 'ten columns cerca';
    const openedBoxStyle = 'ten columns aberto cerca';

    const boxStyle = this.props.opened ? openedBoxStyle : defaultBoxStyle;
    const titleStyle = this.props.opened ? openedTitleStyle : defaultTitleStyle;

    return (
      <div className='row'>
        <div className='two columns'>
          <div
            className={titleStyle}
            onClick={() => { this.props.toggle();}}>
            <p>{this.props.title}</p>
          </div>
        </div>
        <div className={boxStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

MySafieBox.propTypes = {
  children: React.PropTypes.node.isRequired,
  opened: React.PropTypes.bool,
  toggle: React.PropTypes.func,
  title: React.PropTypes.string
};

module.exports = MySafieBox;
