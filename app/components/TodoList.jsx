var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    return (
      <div>
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo}/>
        })}
      </div>
    )
  }
});

module.exports = TodoList;
