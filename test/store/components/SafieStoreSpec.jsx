/* global describe, before, it */
require('./fakedom.js')();
var SafieStore = require('../../../src/store/components/SafieStore.jsx');
var Footer = require('../../../src/store/components/Footer.jsx');
var React = require('react');
var enzyme = require('enzyme');
//var expect = require('chai').expect;
import {expect} from 'chai';

describe('SafieStore - root component', function(){

  describe('Should render properly.', function(){

    before('render component', function() {
      this.wrapper = enzyme.shallow(
        <SafieStore >
          <div id="safieStoreChildren"></div>
        </SafieStore>
      );
    });

    it('should render an <div> element with the css class "safie-store".', function() {
      expect(this.wrapper.find('.safie-store')).to.exist;
    });

    it('should render the children passed in.', function() {
        expect(this.wrapper.find(<div className="safieStoreChildren"></div>)).to.exist;
    });

    it('should render a <Footer />.', function() {
      expect(this.wrapper.find(Footer)).to.exist;
    });

  });

});
