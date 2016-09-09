/* global describe, before, it */
require('./fakedom.js')();
var SafieStore = require('../../../src/store/components/SafieStore.jsx');
var Dimmer = require('../../../src/store/components/Dimmer.jsx');
var SubscribePopup = require('../../../src/store/components/SubscribePopup.jsx');
var fakeStore = require('./fakeStore.js');
var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;


describe('SafieStore - root component', function(){

  describe('should render properly with the Subscribe Popup On.', function(){

    before('render component', function() {


      this.componentTree = enzyme.shallow(
        <SafieStore subscribePopupOn={true} store={fakeStore} >
          <div id="safieStoreChildren"></div>
        </SafieStore>
      );
    });

    it('should render an <div> element with the css class "safie-store".', function() {

      expect(this.componentTree.find('.safie-store')).to.exist;

    });

    it('should render a <Dimmer>.', function() {
      var dimmer = this.componentTree.find(Dimmer);
      expect(dimmer).to.exist;
    });

  });

});
