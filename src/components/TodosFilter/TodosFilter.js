import React from 'react';
import PropTypes from 'prop-types';

export const TodosFilter = ({ setFiltredType, filtredType }) => (
  <ul className="filters">
    <li>
      <a
        href="#/"
        className={filtredType === 'All' ? 'selected' : ''}
        onClick={() => setFiltredType('All')}
      >
        All
      </a>
    </li>

    <li>
      <a
        href="#/active"
        className={filtredType === 'Active' ? 'selected' : ''}
        onClick={() => setFiltredType('Active')}
      >
        Active
      </a>
    </li>

    <li>
      <a
        href="#/completed"
        className={filtredType === 'Completed' ? 'selected' : ''}
        onClick={() => setFiltredType('Completed')}
      >
        Completed
      </a>
    </li>
  </ul>
);

TodosFilter.propTypes = {
  setFiltredType: PropTypes.func.isRequired,
  filtredType: PropTypes.string.isRequired,
};
