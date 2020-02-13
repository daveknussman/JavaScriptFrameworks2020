import React from 'react';
import PropTypes from 'prop-types'

const ToDo = ({todos,showCompleted}) => {
  // using map instead of forEach to iterate because map returns a value where forEach just loops
  return todos.map(item => item.completed === showCompleted && <p key={'todo-'+item.id}>{item.title}</p>);
}

ToDo.propTypes = {
    todos: PropTypes.array.isRequired,
    showCompleted : PropTypes.bool.isRequired
  };

export default ToDo;