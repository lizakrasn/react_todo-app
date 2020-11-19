import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem/TodoItem';
import { todoShapes } from '../shapes/todoShapes';

export const TodoList = ({ todos, setTodos, checkTodo, deleteTodo }) => (
  <section className="main">
    <input type="checkbox" id="toggle-all" className="toggle-all" />
    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  </section>
);

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(todoShapes)),
  setTodos: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
