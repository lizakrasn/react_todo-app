import React, { useState } from 'react';
import { Form } from '../Form/Form';
import { TodoList } from '../TodoList/TodoList';

function countActiveTodos(todos) {
  const activeTodos = todos.filter(
    todo => todo.completed === false,
  );

  return activeTodos.length;
}

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  function onSubmit(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Form onSubmit={onSubmit} />
      </header>
      <TodoList todos={todos} />

      <footer className="footer">
        <span className="todo-count">
          {countActiveTodos(todos)}
          {' '}
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
};
