/* global describe, it */
var expect = require('chai')
  .expect;
var bagActions = require('../../../../src/store/components/state/bagActions.js');
var bagReducer = require('../../../../src/store/components/state/bagReducer.js');

describe('bagReducer', function () {
  describe('toggleQuickBag', function () {

    it('should turn quickBagOpened to true when it is falsy.', function () {

      var state = {};
      var action = bagActions.toggleQuickBag();

      var newState = bagReducer(state, action);

      expect(newState.quickBagOpened)
        .to.be.true;
    });

    it('should turn quickBagOpened to false when it is true.', function () {

      var state = {
        quickBagOpened: true
      };
      var action = bagActions.toggleQuickBag();

      var newState = bagReducer(state, action);

      expect(newState.quickBagOpened)
        .to.be.false;
    });
  });

  describe('addProductToBag', function () {

    it('should add the product from the action payload to the items array.', function () {

      var state = {
        items: {}
      };

      var product = {
        name: 'Produto'
      };

      var options = {
        measurements: {}
      };

      var action = bagActions.addProductToBag(product, options);

      var newState = bagReducer(state, action);

      var productKeys = Object.keys(newState.items);

      expect(productKeys.length)
        .to.equal(1);

      var newProduct = newState.items[productKeys[0]];
      expect(newProduct)
        .to.eql(product);
    });

  });
});
