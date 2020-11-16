import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit }) => {
  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = () => {
    const newTodo = {
      id: +new Date(),
      title: todoValue,
      completed: false,
    };

    onSubmit(newTodo);
    setTodoValue('');
  };

  return (
    <form onSubmit={handleSubmit} name="todo">
      <input
        value={todoValue}
        onChange={event => setTodoValue(event.target.value)}
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        required
      />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
