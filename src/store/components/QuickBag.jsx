var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var bagActions = require('./state/bagActions.js');
var Link = require('react-router').Link;

var QuickBag = React.createClass({
  propTypes: {
    fetchBag: React.PropTypes.func.isRequired,
    opened: React.PropTypes.bool.isRequired,
    toggle: React.PropTypes.func.isRequired,
    removeProductFromBag: React.PropTypes.func.isRequired,
    error: React.PropTypes.object,
    fetching: React.PropTypes.bool,
    doneFetching: React.PropTypes.bool,
    removing: React.PropTypes.bool,
    doneRemoving: React.PropTypes.bool,
    shipping: React.PropTypes.object,
    total: React.PropTypes.number,
    items: React.PropTypes.shape({
      options: React.PropTypes.shape({
        color: React.PropTypes.object,
        measurements: React.PropTypes.object
      }),
      product: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        measurements: React.PropTypes.object,
        pictures: React.PropTypes.shape({
          main: React.PropTypes.number.isRequired,
          product: React.PropTypes.number.isRequired,
          paths: React.PropTypes.arrayOf(React.PropTypes.object)
        }),
        colors: React.PropTypes.object.isRequired,
        defaultColor: React.PropTypes.string.isRequired
      })
    })
  },


  componentDidMount: function() {
    this.props.fetchBag();
  },

  toggle: function(){
    this.props.toggle();
    /*
    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight,
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    var qb = document.getElementsByClassName("quickbag");
    qb[0].setAttribute("style","height:" + height + "px");
    */
  },

  render: function () {
    let cssClasses = ['quickbag'];
    if(this.props.opened) {
      cssClasses.push('open');
    }

    const items = this.renderItems();
    return (
      <div className={cssClasses.join(' ')} onClick={this.toggle}>

        <Link to="/bag">
          <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
        </Link>
        <div className="items">

          {items}

        </div>
      </div>
    );
  },

  renderItems: function() {
    if(this.props.fetching || this.props.removing){
      return (
        <div>
          Carregando...
        </div>
      );
    }

    if(!this.props.items || Object.keys(this.props.items).length === 0){
      return null;
    }

    return Object
      .keys(this.props.items)
      .map(function (itemId, index) {

        var item = this.props.items[itemId];
        var product = item.product;
        var picture = product.pictures.paths[product.pictures.product];

        return (
          <div className="quickbag-item" key={index}>
            <img src={picture} alt={product.name.toUpperCase()} />
            <i
              className="fa fa-times-circle-o"
              aria-hidden="true"
              onClick={() => {
                this
                  .props
                .removeProductFromBag(itemId);
              }}>
            </i>
            <p>{product.name}<br />R$ {product.price}</p>
          </div>
        );
      }.bind(this));

  }
});




function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBag: bagActions.fetchBag,
    removeProductFromBag: bagActions.removeProductFromBag,
    toggle: bagActions.toggleQuickBag
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    opened: state.bag.quickBagOpened,
    total: state.bag.total,
    items: state.bag.items,
    error: state.bag.error,
    fetching: state.bag.fetching,
    doneFetching: state.bag.doneFetching,
    removing: state.bag.removing,
    doneRemoving: state.bag.doneRemoving,
    shipping: state.bag.shipping
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(QuickBag);
