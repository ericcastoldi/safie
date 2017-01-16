var React = require('react');
var MenuItem = require('./MenuItem.jsx');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var menu = require('./state/menu.js');


var SubMenu = React.createClass({

  propTypes: {
    id: React.PropTypes.string.isRequired,
    expanded: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    toggleSubItems: React.PropTypes.func.isRequired,
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired
      })
    )
  },

  titleClicked: function() {
    this.props.toggleSubItems(this.props.id);
  },

  renderItems: function(){
    return this.props.items.map(function (item, rowIndex) {
      return (
        <li key={rowIndex}>
          <MenuItem title={item.title} route={item.route} />
        </li>
      );
    });
  },

  render: function () {
    let cssClasses = ['submenu'];
    if(this.props.expanded) {
      cssClasses.push('open');
    }

    var items = this.renderItems();

    return (
    <div>
      <MenuItem click={this.titleClicked} title={this.props.title} />
      <ul className={cssClasses.join(' ')}>
        {items}
      </ul>
    </div>
    );
  }
});

function mapSubitemsDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleSubItems: menu.toggleSubItems
  }, dispatch);
}


module.exports = connect(null, mapSubitemsDispatchToProps)(SubMenu);
