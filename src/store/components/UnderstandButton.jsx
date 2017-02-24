var React = require('react');

var UnderstandButton = React.createClass({
  render: function () {
    return (
      <div className="understand-button">
        <a href="/entenda" >
          Quero entender como a
          <br />
          SAFIE funciona!
        </a>
      </div>
    );
  }
});

module.exports = UnderstandButton;
