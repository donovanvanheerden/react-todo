var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    return (
      <div>
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        })}
      </div>
    )
  }
});

module.exports = TodoList;
