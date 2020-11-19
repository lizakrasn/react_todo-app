import React from 'react';
import PropTypes from 'prop-types';
import { todoShapes } from '../shapes/todoShapes';

export const TodoItem = ({ todo, todos, setTodos, checkTodo, deleteTodo }) => (
  <li className={todo.completed ? 'completed' : ''}>
    <div className="view">
      <input
        onClick={() => checkTodo(todos, setTodos, todo.id)}
        type="checkbox"
        className="toggle"
      />
      <label>{todo.title}</label>
      <button
        type="button"
        className="destroy"
        onClick={() => deleteTodo(todos, setTodos, todo.id)}
      />
    </div>
    <input type="text" className="edit" />
  </li>
);

TodoItem.defaultProps = {
  todos: [],
};

TodoItem.propTypes = {
  todo: PropTypes.shape(todoShapes).isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(todoShapes)),
  setTodos: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
