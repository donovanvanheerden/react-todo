var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;

    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = '';
      var timestamp = null;

      if (completed) {
        timestamp = completedAt;
        message = 'Completed '
      } else {
        timestamp = createdAt;
        message = 'Created '
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    }

    return (
      <div className={todoClassName} onClick={() => {
            //this.props.onToggle(id);
            dispatch(actions.toggleTodo(id));
          }}>
          <div>
            <input type="checkbox" checked={completed} readOnly/>
          </div>
          <div>
            <p>{text}</p>
            <p className="todo__subtext">{renderDate()}</p>
          </div>
      </div>
    )
  }
});

export default connect()(Todo);
