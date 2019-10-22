import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodosMenu.module.css';

const TodosMenu = ({ numberOfCompleted, numberOfUncompleted }) => (
  <div className={styles.menu}>
    <button className={styles['menu__is-done']}>Завершённые <span className={styles['menu__is-done_span']}>{numberOfCompleted}</span></button>
    <button className={styles['menu__isnt-done']}>Незавершённые <span className={styles['menu__isnt-done_span']}>{numberOfUncompleted}</span></button>
    <button className={styles.menu__all}>Все</button>
  </div>
);

TodosMenu.propTypes = {
  count: PropTypes.number.isRequired
};

export default TodosMenu;