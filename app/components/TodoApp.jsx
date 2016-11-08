var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        { id:1, text: 'Walk the dog' },
        { id:2, text: 'Clean the yard' },
        { id:3, text: 'Feed the cat' },
        { id:4, text: 'Take out garbage' },
      ]
    }
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <h2>Todo</h2>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
