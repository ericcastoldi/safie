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
});
