import React from 'react';
import Item from '../Item/Item';
import itemListStyles from './ItemList.module.css';

const ItemList = ({ items }) => (
  <ul className={itemListStyles.list}>
    {items.map(item => <li key={item.value}><Item value={item.value} isDone={item.isDone} /></li>)}
  </ul>);

export default ItemList;