var React = require('react');

var Article = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </article>
    );
  }
});

module.exports = Article;
