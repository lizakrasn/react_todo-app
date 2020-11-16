import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { todoShapes } from '../shapes/todoShapes';

export const TodoItem = ({ todo }) => {
  const [checked, setChecked] = useState(false);

  return (
    <li className={checked ? 'completed' : ''}>
      <div className="view">
        <input
          onClick={() => setChecked(!checked)}
          type="checkbox"
          className="toggle"
        />
        <label>{todo.title}</label>
        <button type="button" className="destroy" />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape(todoShapes).isRequired,
};
