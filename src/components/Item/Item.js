import React from 'react';
import ButtonClearFocusedTodo from '../ButtonClearFocusedTodo/ButtonClearFocusedTodo';
import classnames from 'classnames';
import styles from '../App/App.module.css';
import itemStyles from './Item.module.css';

const Item = ({ value, isDone }) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone,
  })
}>
  <div className={itemStyles.item}>
    {value}
    <ButtonClearFocusedTodo />
  </div>
</span>);

export default Item;