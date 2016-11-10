var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
  handleAddTodo: function(text) {
    alert('new Todo: ' + text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <h2>Todo</h2>
        <TodoList todos={todos}/>
        <AddTodo onSubmit={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
