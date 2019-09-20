import React from 'react';
import buttonClearFocusedTodo from './ButtonClearFocusedTodo.module.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ButtonClearFocusedTodo = () => (<div>
    <button className={buttonClearFocusedTodo.button}><DeleteForeverIcon className={buttonClearFocusedTodo.icon}></DeleteForeverIcon></button>
  </div>);

export default ButtonClearFocusedTodo;