var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed} = this.props;
    return (
      <div>
        <label onClick={() => {
            this.props.onToggle(id);
          }}>
          <input type="checkbox" defaultChecked={completed} />
          {text}
        </label>
      </div>
    )
  }
});

module.exports = Todo;
