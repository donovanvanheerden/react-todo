var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id:1, text: 'Walk the dog' },
        { id:2, text: 'Clean the yard' },
        { id:3, text: 'Feed the cat' },
        { id:4, text: 'Take out garbage' },
      ]
    }
  },
  handleSearch: function(showCompleted, searchText) {
    console.log(showCompleted)
    console.log(searchText)
    this.setState({ showCompleted: showCompleted, searchText: searchText.toLowerCase() });
  },
  handleAddTodo: function(text) {
    alert('new Todo: ' + text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <h2>Todo</h2>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onSubmit={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
