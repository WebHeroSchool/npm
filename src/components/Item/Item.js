import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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
    <button className={itemStyles.button}><DeleteForeverIcon className={itemStyles.icon}></DeleteForeverIcon></button>
  </div>
</span>);

export default Item;