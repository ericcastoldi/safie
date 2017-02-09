import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="pesquisa">
        <form action="" onSubmit={this.props.search}>
          <input type='text' placeholder='Pesquisa...' />
        </form>
      </div>
    );

  }
}


SearchBar.propTypes = {
  search: React.PropTypes.func.isRequired
};


module.exports = SearchBar;
