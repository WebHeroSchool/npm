import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import classnames from 'classnames';
import styles from '../App/App.module.css';
import itemStyles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id }) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone,
  })
}>
  <div className={itemStyles.item}>
    <span className={itemStyles.text} onClick={() => onClickDone(id)}>{value}</span>
    <button className={itemStyles.button}><DeleteForeverIcon className={itemStyles.icon}></DeleteForeverIcon></button>
  </div>
</span>);

export default Item;