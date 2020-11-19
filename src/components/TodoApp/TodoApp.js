import React, { useState, useMemo } from 'react';
import { Form } from '../Form/Form';
import { TodoList } from '../TodoList/TodoList';
import { TodosFilter } from '../TodosFilter/TodosFilter';

function countActiveTodos(todos) {
  const activeTodos = todos.filter(
    todo => todo.completed === false,
  );

  return activeTodos.length;
}

function checkTodo(todos, setTodos, todoId) {
  const newTodos = todos.map(
    (todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    },
  );

  setTodos(newTodos);
}

function deleteTodo(todos, setTodos, todoId) {
  const newTodos = todos.filter(
    todo => todo.id !== todoId,
  );

  setTodos(newTodos);
}

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filtredType, setFiltredType] = useState('All');

  const filterTodo = useMemo(
    () => {
      if (filtredType === 'Completed') {
        return todos.filter(todo => todo.completed === true);
      }

      if (filtredType === 'Active') {
        return todos.filter(todo => todo.completed === false);
      }

      return todos;
    }, [todos, filtredType],
  );

  function onSubmit(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Form onSubmit={onSubmit} />
      </header>
      <TodoList
        todos={filterTodo}
        setTodos={setTodos}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />

      <footer className="footer">
        <span className="todo-count">
          {`${countActiveTodos(todos)} items left`}
        </span>
        <TodosFilter
          setFiltredType={setFiltredType}
          filtredType={filtredType}
        />
        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
};
