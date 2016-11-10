var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id:uuid(), text: 'Walk the dog' },
        { id:uuid(), text: 'Clean the yard' },
        { id:uuid(), text: 'Feed the cat' },
        { id:uuid(), text: 'Take out garbage' },
      ]
    }
  },
  handleSearch: function(showCompleted, searchText) {
    console.log(showCompleted)
    console.log(searchText)
    this.setState({ showCompleted: showCompleted, searchText: searchText.toLowerCase() });
  },
  handleAddTodo: function(text) {
    this.setState({todos: [...this.state.todos, { id:uuid(), text:text }] });
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
