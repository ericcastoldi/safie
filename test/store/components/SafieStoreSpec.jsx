/* global describe, before, it */
require('./fakedom.js')('<html><body></body></html>');
var SafieStore = require('../../../src/store/components/SafieStore.jsx');

var expect = require('chai').expect;
var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');

describe('SafieStore - root component', function(){

  before('render and locate element', function() {

    var componentTree = ReactTestUtils.renderIntoDocument(
      <SafieStore />
    );

    this.safieStoreTitle = ReactTestUtils.findRenderedDOMComponentWithTag(componentTree, 'h1');
  });

  // TODO: Ajustar teste quando o componente for atualizado
  it('should render an <h1> element with the name of the store.', function() {

    expect(this.safieStoreTitle.tagName).to.equal('H1');
    expect(this.safieStoreTitle.textContent).to.equal('Safie');
  });

});
