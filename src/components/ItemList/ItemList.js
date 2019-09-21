import React from 'react';
import Item from '../Item/Item';
import classnames from 'classnames';
import styles from '../App/App.module.css';
import itemListStyles from './ItemList.module.css';

const ItemList = ({ items }) => (
  <ul className={itemListStyles.list}>
    {items.map(item => <li key={item.value} className={
      classnames({
        [styles['icon-of-done']]: item.isDone,
        [styles['icon-of-unfinished']]: !item.isDone,
      })
    }>
      <Item value={item.value} isDone={item.isDone} /></li>)}
  </ul>);

export default ItemList;