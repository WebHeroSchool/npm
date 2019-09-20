import React from 'react';
import buttonClearCompletedTodosStyles from './ButtonClearCompletedTodos.module.css';

const ButtonClearCompletedTodos = () => (<div>
    <button className={buttonClearCompletedTodosStyles.button}>Clear completed</button>
  </div>);

export default ButtonClearCompletedTodos;